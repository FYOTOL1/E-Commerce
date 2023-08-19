import React from "react";
import style from "./style.module.css";

export default function Section() {
  let fs = require("fs");
  console.log(fs);
  return (
    <>
      <div className={style.section}>
        <div className={style.cont}>
          <h2>
            up to <span>60% off</span> holiday bit
          </h2>
        </div>
      </div>
    </>
  );
}
