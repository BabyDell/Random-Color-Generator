"use client";
import { useState } from "react";

function RandomColorGenerator() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("");

  const buttons = [
    {
      text: "Create Hex Color",
      onclick: () => CreateHexColor(),
    },
    {
      text: "Create RGB Color",
      onclick: () => CreateRGBColor(),
    },
  ];

  function CreateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

    let hexCode = "#";

    while (hexCode.length < 7) {
      hexCode += hex[Math.floor(Math.random() * 15)];
    }

    console.log(hexCode);
    setTypeOfColor("Hex");
    setColor(hexCode);
  }

  function CreateRGBColor() {
    const rgb = [];

    for (let i = 0; i < 3; i++) {
      rgb.push(Math.floor(Math.random() * 257));
    }

    console.log(rgb);
    setTypeOfColor("RGB");
    setColor(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
  }

  return (
    <div
      style={{
        background: color,
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="absolute inset-x-0 bottom-60">
        <div className="flex justify-center gap-8">
          {buttons.map((button, index) => {
            return (
              <button
                onClick={button.onclick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-72 h-20 text-xl"
              >
                {button.text}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center text-white text-6xl t-5 flex-col gap-8 pt-20">
        <h1>{typeOfColor === "RGB" ? "RGB Color" : "Hex Color"}</h1>  
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColorGenerator;
