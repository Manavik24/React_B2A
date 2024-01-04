import React from "react";
import styles from "./Heading.module.css";
export function Heading(props) {
  return (
    <>
      <p className={styles["title-class"]}>I am the page title</p>
      <div style={{ backgroundColor: "pink", color: "red" }}>
        I am a heading
      </div>
      {props.foodItems.map((item) => (
        <li key={item} type="A">
          {item}
        </li>
      ))}
    </>
  );
}
