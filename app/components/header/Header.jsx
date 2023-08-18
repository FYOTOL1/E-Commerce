"use client";
import { React, useState } from "react";
import style from "./style.module.css";
import { dropArrow } from "../smalls/fontAwesome";

export default function Header() {
  const [query, setquery] = useState(window.innerWidth);
  const [click, setclick] = useState(false);
  console.log(click);

  let ev = () => {
    click == false ? setclick(true) : setclick(false);
    console.log(click);
  };
  return (
    <>
      <div className={style.header}>
        <div className={style.container}>
          <div className={style.logo}>
            <h2>logo</h2>
          </div>

          {query <= 767 ? (
            <div className={style.dropList}>
              <div onClick={() => ev()} className={style.mineo}>
                <h2>list</h2>
                <p>{dropArrow}</p>
              </div>
              <div className={click ? style.screen : style.screenRev}>
                <div className={style.col}>
                  <ul>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                    <li>link</li>
                  </ul>
                </div>
                <div className={style.col}></div>
                <div className={style.col}></div>
                <div className={style.col}></div>
              </div>
            </div>
          ) : (
            <div className={style.list}>
              <ul>
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
              </ul>
            </div>
          )}
          <div className={style.button}>
            <button>contact us</button>
          </div>
        </div>
      </div>
    </>
  );
}