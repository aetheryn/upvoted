import { useEffect } from "react";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  useEffect(() => console.log(props.loaderstyle));
  return (
    <div className={`${styles.spinner} ${styles[props.loaderstyle]}`}></div>
  );
};

export default LoadingSpinner;
