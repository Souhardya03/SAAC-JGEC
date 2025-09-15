import React from "react";
import Particles from "react-particles";
import "./Starfield.css";

export default function Starfield() {
  return (
    <div className="starfield-container" aria-hidden>
      <Particles
        id="starfield"
        className="starfield-canvas"
        options={{
          fullScreen: false,
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 120, density: { enable: true, area: 900 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.5 },
            size: { value: { min: 0.5, max: 2 } },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              outModes: { default: "out" }
            },
            shape: { type: "circle" },
            links: { enable: false }
          },
          detectRetina: true
        }}
      />
    </div>
  );
}
