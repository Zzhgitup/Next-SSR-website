import { AppProps } from "next/app";
import { Provider } from "react-redux";
import React from "react";
//全局样式
import "@/styles/globals.scss";
import "normalize.css";
import Layout from "@/components/layout";
import wrapper from "@/store";
const App = ({ Component, ...rest }: AppProps) => {
  const { props, store } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
};
export default App;
