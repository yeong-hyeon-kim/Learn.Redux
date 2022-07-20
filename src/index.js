import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "./exercise";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
// 리덕스 개발자 도구
import { composeWithDevTools } from "redux-devtools-extension";

// 스토어 생성
const store = createStore(rootReducer, composeWithDevTools);
// 스토어 상태 확인
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
