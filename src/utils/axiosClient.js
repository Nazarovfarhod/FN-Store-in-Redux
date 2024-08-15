import axios from "axios";

let mainUrl = "https://json-api.uz/api/project/Fn-Store";


export const axiosClient = axios.create({
  baseURL: mainUrl,
});
