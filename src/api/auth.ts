import { SignUpFieldsType } from "../types/SignUpFields";
import { request } from "./fetch/request";

const baseURL = "http://localhost:5001";

interface Login {
  username: string;
  password: string;
}

export const authApi = {
  auth: async () => await request(baseURL + "/auth"),
  login: async (body: Login) =>
    await request(baseURL + "/login", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  signUp: async (body: SignUpFieldsType) =>
    await request(baseURL + "/sign-up", {
      method: "POST",
      body: JSON.stringify(body),
    }).then((res) => res.json()),
};
