import Axios from "@/utils/http";

export const getUsers = (params: any) =>
  Axios({
    url: "/users",
    method: "get",
    params
  });

export const getUserInfo = (data: any) =>
  Axios({
    url: "/users/info",
    method: "post",
    data
  });

export const getUserByName = (username: string) =>
  Axios({
    url: `/users/${username}`,
    method: "get"
  });

export const updateUser = (username: string, data: any) =>
  Axios({
    url: `/users/${username}`,
    method: "put",
    data
  });

export const deleteUser = (username: string) =>
  Axios({
    url: `/users/${username}`,
    method: "delete"
  });

export const login = (data: any) =>
  Axios({
    url: "/api/user/login",
    method: "post",
    data
  });

export const logout = () =>
  Axios({
    url: "/users/logout",
    method: "post"
  });

export const register = (data: any) =>
  Axios({
    url: "/users/register",
    method: "post",
    data
  });
