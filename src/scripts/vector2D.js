// ==================
// VECTOR 2D: A RECT
// ==================

const createByCoord = ({ x: x1, y: y1 }, { x: x2, y: y2 }) => ({
  x: [x1, x2],
  y: [y1, y2],
});

const createBySize = (width, height) => ({
  width,
  height,
});

const sizeOf = (vector2D) => {
  const { x, y } = vector2D;

  const [x1, x2] = x;
  const [y1, y2] = y;

  const width = x2 - x1;
  const height = y2 - y1;

  return createBySize(width, height);
};

export default Object.freeze({
  createByCoord,
  createBySize,
  sizeOf,
});
