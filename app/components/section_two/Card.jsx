import React from "react";
import style from "./style.module.css";
import { rightArrow2 } from "../smalls/fontAwesome";

export default function Card({ title, desc, img }) {
  return (
    <>
      <div className={style.card}>
        <div className={style.cardCont}>
          <div className={style.text}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href="#">
              <p>get the collection</p>
              <p>{rightArrow2}</p>
            </a>
          </div>
          <img src={img} alt="Error" />
        </div>
      </div>
    </>
  );
}
