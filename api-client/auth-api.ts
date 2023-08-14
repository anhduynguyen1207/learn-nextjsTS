import { LoginPayLoad } from "@/models";
import axiosClient from "./axios-client";

export const autApi = {
  login(payload: LoginPayLoad) {
    return axiosClient.post("/login", payload);
  },

  logout() {
    return axiosClient.post("/logout");
  },
  getProfile() {
    return axiosClient.get("/profile");
  },
};
