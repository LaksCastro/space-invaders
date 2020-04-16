import ctx from "./canvas";

import object_paths from "../data/object";

const OBJECT_PIXEL_SIZE = 5;

const objects = {
  PLAYER_FIRE: {
    draw: (initialX, initialY) => {
      // Draw Mob Body
      ctx.beginPath();
      ctx.fillStyle = "#fff";

      const steps = object_paths.PLAYER_FIRE_PATH;

      for (let a = 0; a < steps.length; a += 2) {
        const x = steps[a];
        const y = steps[a + 1];

        ctx.rect(
          initialX + x,
          initialY + y,
          OBJECT_PIXEL_SIZE,
          OBJECT_PIXEL_SIZE
        );
      }
      ctx.closePath();
      ctx.fill();
    },
  },
  ENEMY_FIRE: {
    draw: (initialX, initialY) => {
      // Draw Object
      ctx.beginPath();
      ctx.fillStyle = "#05FD7D";

      const steps = object_paths.ENEMY_FIRE_PATH;

      for (let a = 0; a < steps.length; a += 2) {
        const x = steps[a];
        const y = steps[a + 1];

        ctx.rect(
          initialX + x,
          initialY + y,
          OBJECT_PIXEL_SIZE,
          OBJECT_PIXEL_SIZE
        );
      }
      ctx.closePath();
      ctx.fill();
    },
  },
};

const draw = (object, point) => {
  const { x, y } = point;

  const { draw } = object;

  draw(x, y);
};

export default Object.freeze({
  draw,
  mobs,
});
