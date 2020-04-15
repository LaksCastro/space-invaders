import ctx from "./canvas";

const mobs = {
  PURPLE: {
    x: 10,
    y: 0,
    size: 8,
    color: "#7855F5",
    pixels: [
      [false, false, false, true, true, false, false, false],
      [false, false, true, true, true, true, false, false],
      [false, true, true, true, true, true, true, false],
      [true, true, false, true, true, false, true, true],
      [true, true, true, true, true, true, true, true],
      [false, true, false, true, true, false, true, false],
      [true, false, false, false, false, false, false, true],
      [false, true, false, false, false, false, true, false],
    ],
  },
  GREEN: {
    x: 2.5,
    y: 0,
    size: 11,
    color: "#05FD7D",
    pixels: [
      [
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
      ],
      [false, false, true, true, true, true, true, true, true, false, false],
      [false, true, true, false, true, true, true, false, true, true, false],
      [true, true, true, true, true, true, true, true, true, true, true],
      [true, false, true, true, true, true, true, true, true, false, true],
      [true, false, true, false, false, false, false, false, true, false, true],
      [false, false, false, true, true, false, true, true, false, false, false],
    ],
  },
  RED: {
    x: 0,
    y: 0,
    size: 12,
    color: "#FE4E60",
    pixels: [
      [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],

      [
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
      ],

      [true, true, true, true, true, true, true, true, true, true, true, true],

      [
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
      ],

      [true, true, true, true, true, true, true, true, true, true, true, true],

      [
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
      ],

      [
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
      ],

      [
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
      ],
    ],
  },
};

let x, y;

const test = (mob = mobs.RED, baseX = 0, baseY = 0) => {
  const { x: initialX, y: initialY, size, pixels, color } = mob;

  y = initialY;

  ctx.beginPath();
  ctx.fillStyle = color;

  const getInitialY = () => initialY + baseY;
  const getInitialX = () => initialX + baseX;

  x = getInitialX();
  y = getInitialY();

  for (let b = 0; b < 8; b++) {
    for (let a = 0; a < size; a++) {
      const pixel = pixels[b][a];

      if (!pixel) {
        x += 5;
        continue;
      }

      ctx.rect(x, y, 5, 5);
      x += 5;
    }
    x = getInitialX();
    y += 5;
  }

  ctx.fill();
};

export default {
  test,
  mobs,
};
