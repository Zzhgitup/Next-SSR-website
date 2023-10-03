import React, { memo } from "react";
import { FC, ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
const Footer: FC<Props> = memo(() => {
  return <div>Footer</div>;
});
export default Footer;
Footer.displayName = "Footer"; //方便调试用。报错会显示信息
