import { Carousel } from "antd";
import React, { memo, useEffect } from "react";
import { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import { Banner } from "@/service/type";
import Image from "next/image";
interface Props {
  children?: ReactNode;
  banner: Banner[];
}
const TopSwipper: FC<Props> = memo((props) => {
  const { banner } = props;
  const onChange = (currenindex: number) => {
    console.log(currenindex);
  };
  return (
    <div className={styles["top-swiper"]}>
      <div className={classNames("wrapper", styles.content)}>
        <Carousel afterChange={onChange}>
          {/*  {banner.map((item) => {
            return (
              <div key={item.id}>
                <Image src={item.picStr} alt="123" />
              </div>
            );
          })} */}
        </Carousel>
      </div>
    </div>
  );
});
export default TopSwipper;
TopSwipper.displayName = "TopSwipper"; //方便调试用。报错会显示信息
