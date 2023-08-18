import React from "react";
import style from "./style.module.css";
import { rightArrow } from "../smalls/fontAwesome";

export default function Section() {
  return (
    <>
      <div className={style.section}>
        <div className={style.cont}>
          <div className={style.rightS}>
            <div className={style.img}>
              <img
                src="https://i.pinimg.com/originals/d3/6d/ee/d36dee339470a97c29a46df64716269e.png"
                alt=""
              />
            </div>
          </div>
          <div className={style.leftS}>
            <h2>
              you must be here all time <br /> for <span>you are the best</span>
            </h2>
            <div className={style.button}>
              <button>
                <p>see more</p>
                <p>{rightArrow}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
