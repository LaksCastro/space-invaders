import ctx from "./canvas";

import mobs_paths from "../data/mob";

import Position from "./position";

const MOB_PIXEL_SIZE = 5;

const mobs = {
  PURPLE: {
    pixels: 8,
    width: 40,
    height: 40,
    color: "#7855F5",
    draw: (ctx, initialX, initialY) => {
      // Draw Mob Body
      ctx.beginPath();
      ctx.fillStyle = "#7855F5";

      const steps = mobs_paths.MOB_PURPLE_PATHS;

      for (let a = 0; a < steps.length; a += 2) {
        const x = steps[a];
        const y = steps[a + 1];
        ctx.lineTo(initialX + x, initialY + y);
      }
      ctx.closePath();
      ctx.fill();

      // Draw Mob Eyes
      ctx.beginPath();
      ctx.fillStyle = "#020402";
      ctx.rect(initialX + 10, initialY + 15, 5, 5);
      ctx.rect(initialX + 25, initialY + 15, 5, 5);
      ctx.closePath();
      ctx.fill();
    },
  },
  GREEN: {
    pixels: 11,
    width: 55,
    height: 40,
    color: "#05FD7D",
    draw: (ctx, initialX, initialY) => {
      // Draw Mob Body
      ctx.beginPath();
      ctx.fillStyle = "#05FD7D";

      const steps = mobs_paths.MOB_GREEN_PATHS;

      for (let a = 0; a < steps.length; a += 2) {
        const x = steps[a];
        const y = steps[a + 1];
        ctx.lineTo(initialX + x, initialY + y);
      }
      ctx.closePath();
      ctx.fill();

      // Draw Mob Eyes
      ctx.beginPath();
      ctx.fillStyle = "#020402";
      ctx.rect(initialX + 15, initialY + 20, 5, 5);
      ctx.rect(initialX + 35, initialY + 20, 5, 5);
      ctx.closePath();
      ctx.fill();
    },
  },
  RED: {
    pixels: 12,
    width: 60,
    height: 40,
    color: "#FE4E60",
    draw: (ctx, initialX, initialY) => {
      // Draw Mob Body
      ctx.beginPath();
      ctx.fillStyle = "#FE4E60";

      const steps = mobs_paths.MOB_RED_PATHS;

      for (let a = 0; a < steps.length; a += 2) {
        const x = steps[a];
        const y = steps[a + 1];
        ctx.lineTo(initialX + x, initialY + y);
      }
      ctx.closePath();
      ctx.fill();

      // Draw Mob Eyes
      ctx.beginPath();
      ctx.fillStyle = "#020402";
      ctx.rect(initialX + 15, initialY + 15, 10, 5);
      ctx.rect(initialX + 35, initialY + 15, 10, 5);
      ctx.closePath();
      ctx.fill();
    },
  },
};

const draw = (mob = mobs.PURPLE, initialX = 0, initialY = 0) => {
  const { draw } = mob;

  draw(ctx, initialX, initialY);
};

export default Object.freeze({
  draw,
  mobs,
});
