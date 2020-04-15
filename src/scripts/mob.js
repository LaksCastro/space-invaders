import ctx from "./canvas";

const MAX_MOB_WIDTH = 12;

const mobs = {
  PURPLE: {
    x: 10,
    y: 0,
    width: 8,
    color: "#7855F5",
  },
  GREEN: {
    x: 2.5,
    y: 0,
    width: 11,
    color: "#05FD7D",
  },
  RED: {
    x: 0,
    y: 0,
    width: 12,
    color: "#FE4E60",
  },
};

let x, y;

const draw = () => {
  ctx.beginPath();

  ctx.fillStyle = "red";

  ctx.rect(0, 0, 40, 50);

  ctx.fill();
};

export default {
  draw,
  mobs,
};
