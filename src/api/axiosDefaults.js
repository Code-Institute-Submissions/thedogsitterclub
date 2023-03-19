import axios from "axios";

axios.defaults.baseURL = 'https://the-dogsitter-club-api.herokuapp.com/'
// axios.defaults.baseURL = 'https://8000-axelzwaans-thedogsitter-pw742wiyuf9.ws-eu90.gitpod.io/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();