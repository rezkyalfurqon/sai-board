import axios from "axios";

export function HTTP(baseURL, headers) {
  return axios.create({
    baseURL,
    headers,
  });
}
