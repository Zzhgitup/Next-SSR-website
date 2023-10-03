import { AppProps } from "next/app";
import React from "react";
//全局样式
import "@/styles/globals.scss";
import "normalize.css";
import Layout from "@/components/layout";
const App = ({ Component, ...rest }: AppProps) => {
  return (
    <Layout>
      <Component {...rest.pageProps} />
    </Layout>
  );
};
export default App;
