import { getSearchSuggest, getSwiper } from "@/service/home";
import { Iswiper, SearchData } from "@/service/type";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
export const fetchGethomeinfo = createAsyncThunk("homeinfo", async () => {
  const res = await getSearchSuggest();
  return res.data.data;
});
export const fetchGetBanner = createAsyncThunk("homeBanner", async () => {
  const res = await getSwiper();
  console.log(res.data.data);
  return res.data.data;
});
interface IinitState {
  counter: number;
  navbar: SearchData;
  Banner: Iswiper;
}
const homeSlice = createSlice({
  name: "home",
  initialState: {
    counter: 10,
    navbar: {},
    Banner: {},
  } as IinitState,
  reducers: {
    incrment(state, { payload }) {
      state.counter += payload;
    },
  },
  extraReducers(builder) {
    //HYDEATE 操作
    builder
      .addCase(HYDRATE, (state, active: any) => {
        return {
          ...state,
          ...active.payload.home,
        };
      })
      .addCase(fetchGethomeinfo.fulfilled, (state, { payload }) => {
        state.navbar = payload;
      })
      .addCase(fetchGetBanner.fulfilled, (state, { payload }) => {
        state.Banner = payload;
      });
  },
});
export const { incrment } = homeSlice.actions;
export default homeSlice.reducer;
