import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import DashBoard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import MyWallets from "./Pages/MyWallets";
import Invoices from "./Pages/Invoices";
import Transactions from "./Pages/Transactions";
import NewInvoice from "./Pages/NewInvoice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<App />}>
          <Route element={<DashBoard />} index/>
          <Route path="transactions" element={<Transactions />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="invoices/new-invoice" element={<NewInvoice />} />
          <Route path="mywallets" element={<MyWallets />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
