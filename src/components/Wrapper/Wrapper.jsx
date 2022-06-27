import React from "react";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={`container ${styles.root}`}>{children}</div>;
};

export default Wrapper;
