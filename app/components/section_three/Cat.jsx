import React from "react";
import style from "./style.module.css";

export default function Cat({ img, title }) {
  return (
    <>
      <div className={style.card}>
        <div className={style.img}>
          <img src={img} alt={title} />
        </div>
        <p>{title}</p>
      </div>
    </>
  );
}
