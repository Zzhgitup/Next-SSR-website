export interface SearchData {
  id: number;
  defaultKey: string;
  configKey: any[];
}
export interface Iswiper {
  banners: Banner[];
  categorys: Category[];
  recommends: Recommend[];
  digitalData: DigitalData;
}

export interface Banner {
  id: number;
  productId: number;
  picId: number;
  backendPicId: number;
  addTime: number;
  position: number;
  type: number;
  url: string;
  bannerExtJson: any;
  isSetTime: number;
  beginTime: number;
  endTime: any;
  picStr: string;
  backendPicStr: string;
}

export interface Category {
  cid: number;
  picStr: string;
  title: string;
  tabIndex: number;
  targetUrl: string;
  count: number;
  desc: string;
  type: number;
}

export interface Recommend {
  id: number;
  picStr: string;
  title: string;
}

export interface DigitalData {
  digitalIcon: string;
  name: string;
  desc: string;
  buyNow: string;
  picStr: string;
  picStr2: string;
  picStr1: string;
}
