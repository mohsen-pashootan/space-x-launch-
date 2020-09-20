import React, { useRef } from "react";
import styles from "./layout.module.css";

export default function Layout({ children, onPast, onLuanch }) {
  const getSearch = useRef();

  function handleSearch(text: string) {
    console.log(text);
  }

  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>SpaceX's launches list</h1>
        <input
          className={styles["input"]}
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          ref={getSearch}
        />
        <span>
          <button className={styles["btn-past"]} onClick={onPast}>
            PastLaunches
          </button>
          <button className={styles["btn-upcome"]} onClick={onLuanch}>
            UpcomingLaunches
          </button>
        </span>
      </div>
      <div>{children}</div>
    </>
  );
}