import ctx from "./canvas";

import mobs_paths from "../data/mob";

const MOB_PIXEL_SIZE = 5;

const mobs = {
  PURPLE: {
    pixels: 8,
    width: 40,
    height: 40,
    draw: (initialX, initialY) => {
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
      ctx.rect(initialX + 10, initialY + 15, MOB_PIXEL_SIZE, MOB_PIXEL_SIZE);
      ctx.rect(initialX + 25, initialY + 15, MOB_PIXEL_SIZE, MOB_PIXEL_SIZE);
      ctx.closePath();
      ctx.fill();
    },
  },
  GREEN: {
    pixels: 11,
    width: 55,
    height: 40,
    draw: (initialX, initialY) => {
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
      ctx.rect(initialX + 15, initialY + 20, MOB_PIXEL_SIZE, MOB_PIXEL_SIZE);
      ctx.rect(initialX + 35, initialY + 20, MOB_PIXEL_SIZE, MOB_PIXEL_SIZE);
      ctx.closePath();
      ctx.fill();
    },
  },
  RED: {
    pixels: 12,
    width: 60,
    height: 40,
    draw: (initialX, initialY) => {
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
      ctx.rect(initialX + 15, initialY + 15, 10, MOB_PIXEL_SIZE);
      ctx.rect(initialX + 35, initialY + 15, 10, MOB_PIXEL_SIZE);
      ctx.closePath();
      ctx.fill();
    },
  },
};

const draw = (mob = mobs.PURPLE, point) => {
  const { x, y } = point;

  const { draw } = mob;

  draw(x, y);
};

export default Object.freeze({
  draw,
  mobs,
});
