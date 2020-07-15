import React, { useState } from "react";
import { router } from "umi";
import { useRootExports } from "umi";
import styles from "./HomePage.less";

const HomePage = () => {
  const [count, setCountShow] = useState(0);
  const rootExports = useRootExports() || {};
  const { getCount = () => {}, setCount = () => {} } = rootExports || {};
  return (
    <div className={styles.root}>
      <section>
        <p>This is APP1...</p>
      </section>
      <section>
        <p>关于跳转</p>
        <a onClick={() => router.push("/home")}>
          back to home by using router.push
        </a>
        <br />
        <a onClick={() => (window.location.pathname = "/home")}>
          back to home by changing pathname
        </a>
        <br />
        <a onClick={() => rootExports.rootRouter.push("/home")}>
          back to home by using rootRouter.push
        </a>
      </section>
      <br />
      <section>
        <p>关于父子应用通信</p>
        <p>count is: {count}</p>
        <p>
          <a
            onClick={() => {
              setCount(count + 1);
              setCountShow(getCount());
            }}
          >
            add Count
          </a>
        </p>
      </section>
    </div>
  );
};

export default HomePage;
