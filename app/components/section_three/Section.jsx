"use client";
import { useRef, useState } from "react";
import style from "./style.module.css";
import Cat from "../section_three/Cat";
import { rightArrow2 } from "../smalls/fontAwesome";

export default function Section() {
  const el1 = useRef();
  const [toRight, settoRight] = useState(1);
  const [calc, setcalc] = useState(0);

  let rightArr = () => {
    el1.current.scrollTo({
      top: 0,
      left: 162 * toRight,
      behavior: "smooth",
    });
    settoRight(toRight + 1);
    setcalc(toRight * 162);
  };

  let leftArr = () => {
    el1.current.scrollTo({
      top: 0,
      left: calc - 162,
      behavior: "smooth",
    });
    settoRight(1);
    setcalc(calc - 162);
  };
  return (
    <>
      <div className={style.section}>
        <div className={style.cont}>
          <h2>shop by category</h2>
          <div ref={el1} className={style.cats}>
            <div onClick={leftArr} className={style.leftArrow}>
              <p>{rightArrow2}</p>
            </div>
            <Cat title={"women"} img={"/womens.jpg"} />
            <Cat title={"kids"} img={"/kids.jpg"} />
            <Cat title={"sketchers"} img={"/sketchers.jpg"} />
            <Cat title={"sports"} img={"/sports.jpg"} />
            {<Cat title={"sunglass"} img={"/sunglass.webp"} />}
            <Cat title={"watch"} img={"/watch.png"} />
            <Cat title={"bags"} img={"/bags.jpg"} />
            <Cat title={"men"} img={"/mens.jpg"} />
            <div onClick={rightArr} className={style.rightArrow}>
              <p>{rightArrow2}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
