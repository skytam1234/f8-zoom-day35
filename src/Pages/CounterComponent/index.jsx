import React from "react";
import styles from "./counter.module.scss";
function Counter() {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Counter App</h1>
          <div className={styles.preview}>
            <h2
              className={styles.previewNumber}
              style={{
                color: value > 0 ? "green" : value < 0 ? "red" : "gray",
              }}
            >
              {value}
            </h2>
          </div>
          <div className={styles.control}>
            <div className={styles.controlContent}>
              <div
                className={styles.increaseBtn}
                onClick={() => {
                  setValue(value + 1);
                }}
              >
                Tăng
              </div>
              <div
                className={styles.resetBtn}
                onClick={() => {
                  setValue(0);
                }}
              >
                Bắt đầu
              </div>
              <div
                className={styles.decreaseBtn}
                onClick={() => {
                  setValue(value - 1);
                }}
              >
                Giảm
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Counter;
