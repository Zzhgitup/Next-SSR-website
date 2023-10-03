import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    counter: 10,
  },
  reducers: {
    incrment(state, { payload }) {
      state.counter += payload;
    },
  },
  extraReducers(builder) {
    //HYDEATE 操作
    builder.addCase(HYDRATE, (state, active: any) => {
      return {
        ...state,
        ...active.payload.home,
      };
    });
  },
});
export const { incrment } = homeSlice.actions;
export default homeSlice.reducer;
