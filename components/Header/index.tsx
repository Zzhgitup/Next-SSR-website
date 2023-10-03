import React, { memo } from "react";
import { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import Link from "next/link";
import Search from "../Search";
interface Props {
  children?: ReactNode;
}
const He: FC<Props> = memo(() => {
  return (
    <div className={styles.navbar}>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles["content-left"]}>
          <Link href="/" className={styles.logo} />
          <h1 className={styles.title}>云音乐商城- 音乐购有趣</h1>
        </div>
        <div className={styles["content-right"]}>
          <div className={styles["right-search"]}>
            <Search />
          </div>
          <div className={styles["right-cart"]}>
            <Link href="/" className={styles.cart}>
              <span className={styles.count}>0</span>
            </Link>
          </div>
          <div className={styles["right-login"]}>登录</div>
        </div>
      </div>
    </div>
  );
});
export default He;
He.displayName = "He"; //方便调试用。报错会显示信息
