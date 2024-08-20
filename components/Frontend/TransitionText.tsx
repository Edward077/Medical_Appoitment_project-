"use client";

import { TEXTS } from "@/constants";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

export default function TransitionText() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="text-2xl">
      <TextTransition
        className="text-blue-500 font-semibold"
        direction="down"
        springConfig={presets.wobbly}
      >
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
}
