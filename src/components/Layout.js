import React from "react";

function Layout({ children }) {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <h1>Todo List</h1>
      {children}
    </div>
  );
}

export default Layout;
