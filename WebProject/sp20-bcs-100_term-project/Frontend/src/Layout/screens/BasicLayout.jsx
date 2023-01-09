import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BasicLayout({ children }) {
  return (
    <div className="App bg-gradient-to-b from-slate-900 via-neutral-900 to-slate-800">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
