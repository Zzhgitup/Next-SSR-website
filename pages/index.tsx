import { useAppSelect, usedispatch } from "@/store";
import { incrment } from "@/store/module/home";
import Head from "next/head";

export default function Home() {
  const dispatch = usedispatch();
  const { conuter } = useAppSelect((state) => {
    return {
      conuter: state.home.counter,
    };
  });
  const add = () => {
    dispatch(incrment(10));
  };
  return (
    <>
      <Head>
        <title>网易云音乐首页</title>
      </Head>
      <span>首页</span>
      <button onClick={add}>add</button>
      <h1>{conuter}</h1>
    </>
  );
}
