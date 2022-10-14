import axios from "axios";
import apiProvider from "../providers/apiProvider";

export const api = axios.create({
  baseURL: apiProvider.baseUrl,
});
