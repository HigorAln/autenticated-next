import axios from "axios";
import { parseCookies } from "nookies";

export function axiosApiClient(ctx?: any) {
  const { "NextAuth.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "htpp://localhost:3333",
  });

  api.interceptors.request.use((config) => {
    console.log(config);

    return config;
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
