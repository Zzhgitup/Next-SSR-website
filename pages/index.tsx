import TopSwipper from "@/components/top-swipper";
import wrapper from "@/store";
import { fetchGetBanner, fetchGethomeinfo } from "@/store/module/home";
import { GetServerSideProps } from "next";
import Head from "next/head";
import styles from "./index.module.scss";
import { FC } from "react";
import { Iswiper } from "@/service/type";

const Home: FC<Iswiper> = (props) => {
  const { banners } = props;
  return (
    <>
      <Head>
        <title>网易云音乐首页</title>
      </Head>
      <div className={styles.home}>
        <TopSwipper banner={banners} />
      </div>
    </>
  );
};
export default Home;
/* export const getServerSideProps: GetServerSideProps = async (
  content: GetServerSidePropsContext
) => {
  const { data } = await getSearchSuggest();
  console.log(data);
  return {
    props: {},
  };
}; */
//SSR写法
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(function (store) {
    return async () => {
      //获取热门搜索
      await store.dispatch(fetchGethomeinfo());
      //获取首页信息
      await store.dispatch(fetchGetBanner());
      const homeinfo = store.getState().home;
      return {
        props: {
          banner: homeinfo.Banner.banners,
          categorys: homeinfo.Banner.categorys,
          digitalData: homeinfo.Banner.digitalData,
          recommends: homeinfo.Banner.recommends,
        },
      };
    };
  });
