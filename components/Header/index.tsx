import React, { memo } from "react";
import { FC, ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
const Header: FC<Props> = memo(() => {
  return <div>Header</div>;
});
export default Header;
Header.displayName = "Header"; //方便调试用。报错会显示信息
