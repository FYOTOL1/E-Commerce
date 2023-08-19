import React from "react";
import style from "./style.module.css";
import Card from "./Card";

export default function Section() {
  return (
    <>
      <div className={style.section}>
        <div className={style.cont}>
          <h2>best sellers</h2>
          <div className={style.cardsCont}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}
