import React from "react";
import Grid from "./components/Grid";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Emoji "Sticker" Chart</h1>
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)"
        }}
      >
        <div />
        <p>Mon</p>
        <p>Tues</p>
        <p>Wed</p>
        <p>Thur</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>
      <Grid />
    </div>
  );
}
