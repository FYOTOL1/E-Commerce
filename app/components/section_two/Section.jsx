import React from "react";
import style from "./style.module.css";
import Card from "./Card";

export default function Section() {
  return (
    <div className={style.section}>
      <div className={style.cont}>
        <div className={style.cards}>
          <Card title="30% off" desc="mens collection" img="/man1.jpg" />
          <Card
            title="50% off"
            desc="women collection"
            img="https://i.pinimg.com/564x/45/63/9e/45639eaff71ce80e881fd8dc5c31fd73.jpg"
          />
          <Card title="70% off" desc="kid collection" img="/kid1.jpg" />
        </div>
      </div>
    </div>
  );
}
