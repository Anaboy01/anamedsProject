"use client";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 


export default function ProviderWrapper({ children }) {
  return (
    <Provider store={store}>
      <ToastContainer toastStyle={{ backgroundColor: "#2a9fcd5a", color: "#f3e7e7" }} />
      {children}
    </Provider>
  );
}
