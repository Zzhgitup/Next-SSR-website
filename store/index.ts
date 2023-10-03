import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./module/home";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
export type IAppDispatch = typeof store.dispatch;
export type IAppState = ReturnType<typeof store.getState>;
const makeStore = () => store;
//通过函数创建Store
const wrapper = createWrapper(makeStore);
export const useAppSelect: TypedUseSelectorHook<IAppState> = useSelector;
export const usedispatch: () => IAppDispatch = useDispatch;
export default wrapper;
