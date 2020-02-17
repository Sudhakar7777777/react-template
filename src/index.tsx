import React from "react";
import ReactDOM from "react-dom";

import "./global";
import styles from "./app.module";

import superman from "./images/super";

const App = () => (
  <>
    <img src={superman} alt="Super Man" />
    <p className={styles.red}>Hello, World from SBK!</p>
  </>
);

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById("root"));
