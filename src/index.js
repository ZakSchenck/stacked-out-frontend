import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleJob from "./components/SingleJob/SingleJob";
import AddListing from "./components/AddListing/AddListing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/listing/:jobid" element={<SingleJob />}></Route>
        <Route path="/add-listing" element={<AddListing />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
