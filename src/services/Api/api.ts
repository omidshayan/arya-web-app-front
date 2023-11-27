import http from "../httpService";

export const getApi = async ( path:string, params:{} = {}) => {
  // console.log("getApi  : ", path, params);
  return await http.GET(`${path}`, { params });
};

export const postApi = async (path: string, body: {}) => {
  // console.log("postApi  : ", path, body);
  return await http.POST(`${path}`, body);
};

export const putApi = async (path: string, body: string)  => {
  // console.log("putApi  : ", path, body);
  return await http.PUT(`${path}`, body);
};

export const deleteApi = async (path: string, body: any)  => {
  // console.log("deleteApi  : ", path, body);
  return await http.DELETE(`${path}`, body);
};

export const patchApi = async (path: string, body: string)  => {
  // console.log("patchApi  : ", path, body);
  return await http.PATCH(`${path}`, body);
};