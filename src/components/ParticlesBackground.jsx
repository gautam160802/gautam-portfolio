import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 50 },
          color: { value: "#60a5fa" },
          links: {
            enable: true,
            distance: 120,
            color: "#93c5fd",
            opacity: 0.5,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
          opacity: { value: 0.5 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" } },
          modes: { grab: { distance: 150, links: { opacity: 0.6 } } },
        },
      }}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
}
