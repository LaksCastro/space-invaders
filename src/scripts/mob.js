import ctx from "./canvas";

const MAX_MOB_WIDTH = 12;

const mobs = {
  PURPLE: {
    pixels: 8,
    width: 40,
    height: 40,
    color: "#7855F5",
  },
  GREEN: {
    pixels: 11,
    width: 55,
    height: 40,
    color: "#05FD7D",
  },
  RED: {
    pixels: 12,
    width: 60,
    height: 40,
    color: "#FE4E60",
  },
};

const draw = (mob = mobs.PURPLE, initialX = 0, initialY = 0) => {
  const { color } = mob;

  ctx.beginPath();

  ctx.fillStyle = color;

  ctx.rect(0, 0, 40, 50);

  ctx.fill();
};

export default Object.freeze({
  draw,
  mobs,
});
