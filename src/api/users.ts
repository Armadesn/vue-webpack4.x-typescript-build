import Axios from "@/utils/http";

export const getUserInfo = (data: any) =>
  Axios({
    url: "/api/user/info",
    method: "post",
    data
  });

export const login = (data: any) =>
  Axios({
    url: "/api/user/login",
    method: "post",
    data
  });


export const logout = () =>
  Axios({
    url: "/api/user/logout",
    method: "post"
  });


