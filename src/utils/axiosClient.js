import axios from "axios";

let mainUrl = "https://json-api.uz/api/project/myProduct";

export const axiosClient = axios.create({
  baseURL: mainUrl,
});
