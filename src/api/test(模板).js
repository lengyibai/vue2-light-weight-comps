import { getReq, postReq } from "./network/request.js";

//#####··········GET相关··········#####//
//####········天气········####//
export const weather = (params, other) => {
  return getReq("/weather_mini", params, other);
};

//#####··········POST相关··········#####//
//####········上传········####//
export const upload = (data, other) => {
  return postReq("/posts", data, other);
};
