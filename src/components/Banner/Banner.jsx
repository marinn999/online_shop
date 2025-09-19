import React from "react";
import s from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={s.banner}>
      <div className={s.content}>
        <h1 className={s.text}>Start your fashion journey here!</h1>
        <button className={s.btn}>Start shopping</button>
      </div>
    </div>
  );
}
