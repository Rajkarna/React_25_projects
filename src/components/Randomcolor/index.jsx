import React, { useState, useEffect } from "react";
import "./styles.css";

const RandomColor = () => {
  const [typeofcolor, setTypeOf] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  const handleRandomrgbColor = () => {
    const red = randomColorUtility(256);
    const green = randomColorUtility(256);
    const blue = randomColorUtility(256);

    const rgb_color = `rgb(${red}, ${green}, ${blue})`;
    setColor(rgb_color);
  };

  useEffect(() => {
    if (typeofcolor === "rgb") handleRandomrgbColor();
    else handleRandomHexColor();
  }, [typeofcolor]);

  const handleRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let res = "#";
    for (let i = 0; i < 6; i++) {
      res += hex[randomColorUtility(hex.length)];
    }

    setColor(res);
  };

  return (
    <div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <button
          onClick={() => {
            setTypeOf("rgb");
          }}
        >
          RGB color
        </button>
        <button onClick={() => setTypeOf("hex")}>Hex color</button>
        <button
          onClick={
            typeofcolor === "hex"
              ? () => handleRandomHexColor()
              : () => handleRandomrgbColor()
          }
        >
          Random color
        </button>
      </div>
      <div
        style={{
          backgroundColor: color,
        }}
      >
        <div>{typeofcolor}</div>
        <h3>{color}</h3>
      </div>
    </div>
  );
};

export default RandomColor;
