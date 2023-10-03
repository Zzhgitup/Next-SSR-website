import Hyrequest, { IResult } from "./index";
import { Iswiper, SearchData } from "./type";
export function getSearchSuggest() {
  return Hyrequest.get<IResult<SearchData>>("/searchSuggest/get");
}
//获取轮播图分类
export function getSwiper() {
  return Hyrequest.get<IResult<Iswiper>>("/home/info");
}
