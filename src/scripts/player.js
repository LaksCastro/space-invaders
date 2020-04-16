import paths from "../data/player";
import ctx from "./canvas";

// ================
// PLAYER METADATA
// ================
const pixels = 6;
const width = 65;
const height = pixels * 5;

// ================
// TO DRAW PLAYER
// ================
const draw = (initialX = 0, initialY = 0) => {
  // Draw Player
  ctx.beginPath();
  ctx.fillStyle = "#fff";

  const steps = paths.PLAYER_PATHS;

  for (let a = 0; a < steps.length; a += 2) {
    const x = steps[a];
    const y = steps[a + 1];
    ctx.lineTo(initialX + x, initialY + y);
  }

  ctx.closePath();
  ctx.fill();
};

export default Object.freeze({
  draw,
  width,
  height,
});
