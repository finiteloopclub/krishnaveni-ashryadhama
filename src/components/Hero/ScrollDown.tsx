import { ChevronDown } from "lucide-react";
import React from "react";
import styles from "./styles.module.css";

function ScrollDown() {
  return (
    <span
      className={`absolute left-[50%] bottom-[5%] ${styles.bounce}`}
    >
      <a href="#section05">
        <ChevronDown size={64} />
      </a>
    </span>
  );
}

export default ScrollDown;
