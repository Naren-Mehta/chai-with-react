import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 className="header" data-testid="header-1">{title}</h1>
      {/* <h2 title="Header2">Hello</h2> */}
    </>
  );
}
