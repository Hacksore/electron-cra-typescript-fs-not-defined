import React, { useEffect } from "react";
import ReactDOM from "react-dom";

// test electron store
import ElectronStore from "electron-store";

const store = new ElectronStore();
const App = () => {
  useEffect(() => {
    store.set("from-electron", "hi");
  });

  return <h2>Hello world!</h2>;
};

console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
