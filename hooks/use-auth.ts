import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";
import { autApi } from "@/api/index";
export function useAuth(options?: Partial<PublicConfiguration>) {
  const MS_PER_HOUR = 60 * 60 * 1000;
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    revalidateOnFocus: false,
    dedupingInterval: MS_PER_HOUR,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login() {
    await autApi.login({
      username: "test1",
      password: "123123",
    });
    await mutate();
  }

  async function logout() {
    await autApi.logout();
    mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
