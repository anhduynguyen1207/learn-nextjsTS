// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";

type Data = {
  message: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return new Promise((resolve) => {
    if (req.method !== "POST") {
      return res.status(404).json({ message: "method not supported" });
    }
    //dont send cookies to API server
    req.headers.cookie = "";

    const cookies = new Cookies(req, res);
    cookies.set("access_token");

    res.status(200).json({ message: "Log out successfully" });
  });

  // res.status(200).json({ name: 'Get all API path' })
}
