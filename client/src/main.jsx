import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#CD1818",
          colorBorder: "#CD1818",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);
