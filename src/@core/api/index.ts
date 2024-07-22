import axios from "axios";
import { getObject } from "../utils/storege";
import * as https from "https";
import { apiConstants } from "./apiAddress";

const AccessToken = "@conductor:token";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10 * 1000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Security-Policy": "upgrade-insecure-requests",
    "x-auth-profile": apiConstants.profile,
    "x-auth-realm": apiConstants.realm
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

api.interceptors.request.use(async (config) => {
  const token = getObject(AccessToken);
  if (token) {
    config.headers!.authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
