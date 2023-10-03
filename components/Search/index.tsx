import React, {
  KeyboardEvent,
  KeyboardEventHandler,
  memo,
  useEffect,
  useState,
} from "react";
import { FC, ReactNode } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import { useAppSelect } from "@/store";
interface Props {
  children?: ReactNode;
}
const Search: FC<Props> = memo((props) => {
  const { Searchinner } = useAppSelect((state) => {
    return {
      Searchinner: state.home.navbar,
    };
  });
  useEffect(() => {
    console.log(Searchinner);
  }, []);
  const [isShow, setShow] = useState(false);
  const handlershow = (flag: boolean) => {
    setShow(flag);
  };
  const handlerKeyDown = (Event: KeyboardEvent) => {
    if (Event.key === "Enter") {
      let value: string = (Event.target as HTMLInputElement).value;
      console.log("按下回车键", value);
    }
  };
  return (
    <div className={styles.search}>
      <div className={styles["search-bg"]}>
        <input
          onFocus={() => handlershow(true)}
          onBlur={() => handlershow(false)}
          onKeyDown={handlerKeyDown}
          className={styles.input}
          type="text"
          placeholder={Searchinner.defaultKey}
        />
      </div>
      <div
        className={classNames(
          styles["search-panel"],
          isShow ? styles.show : styles.hide
        )}
      >
        <div className={styles.shadow}></div>
        <h2>热门搜索</h2>
        <ul>
          {Searchinner.configKey &&
            Searchinner.configKey.map((item, index) => {
              return <li key={item[index + 1]}>{item[index + 1]}</li>;
            })}
        </ul>
      </div>
    </div>
  );
});
export default Search;
Search.displayName = "Search"; //方便调试用。报错会显示信息
