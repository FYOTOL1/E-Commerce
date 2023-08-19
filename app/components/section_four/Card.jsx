import React from "react";
import style from "./style.module.css";

export default function Card() {
  return (
    <>
      <div className={style.card}>
        <div className={style.cardCont}>
          <div className={style.img}>
            <img src="/fashin.avif" alt="Error" />
          </div>
          <h3>Men hody</h3>
          <h4>for man and maybe for women and kids</h4>
          <p>$133</p>
        </div>
      </div>
    </>
  );
}
