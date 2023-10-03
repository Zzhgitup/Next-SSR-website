import React, { memo } from "react";
import { FC, ReactNode } from "react";
import Footer from "../footer";
import Header from "../Header";
interface Props {
  children?: ReactNode;
}
const Layout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
});
export default Layout;
Layout.displayName = "Layout"; //方便调试用。报错会显示信息
