import ctx from "./canvas";

import Position from "./position";

const MOB_PIXEL_SIZE = 5;

const createMobLayout = ({ initialX, initialY, columnsLength, rowsLength }) => {
  const grid = {
    indexes: [0, columnsLength * rowsLength - 1],
    columnsLength,
    rowsLength,
  };
  const operations = {
    getPosition: (index) => {
      const row = Math.floor(index / columnsLength);
      const column = index - row * columnsLength;

      const y1 = initialY + row * MOB_PIXEL_SIZE;
      const y2 = y1 + MOB_PIXEL_SIZE;

      const x1 = initialX + column * MOB_PIXEL_SIZE;
      const x2 = x1 + MOB_PIXEL_SIZE;

      return Position.createByCoord(x1, y1, x2, y2);
    },
    getNextPositionFrom: (index) => getPosition(index + 1),
    getPrevPositionFrom: (index) => getPosition(index - 1),
  };
  return {
    grid,
    operations,
  };
};

const mobs = {
  PURPLE: {
    pixels: 8,
    width: 40,
    height: 40,
    color: "#7855F5",
    draw: (ctx, initialX, initialY) => {
      const layout = createMobLayout(initialX, initialY, 8, 8);
    },
  },
  GREEN: {
    pixels: 11,
    width: 55,
    height: 40,
    color: "#05FD7D",
    draw: (ctx, initialX, initialY) => {
      const layout = createMobLayout(initialX, initialY, 11, 8);
    },
  },
  RED: {
    pixels: 12,
    width: 60,
    height: 40,
    color: "#FE4E60",
    draw: (ctx, initialX, initialY) => {
      const layout = createMobLayout(initialX, initialY, 12, 8);
    },
  },
};

const draw = (mob = mobs.PURPLE, initialX = 0, initialY = 0) => {
  const { color, draw } = mob;

  ctx.beginPath();

  ctx.fillStyle = color;

  draw(ctx, initialX, initialY);

  ctx.fill();
};

export default Object.freeze({
  draw,
  mobs,
});
