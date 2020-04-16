// ==========================================
// NEEDED FILE TO NORMALIZE POSITIONS FORMAT
// ==========================================

const createByCoord = (x1, y1, x2, y2) => ({
  x: [x1, x2],
  y: [y1, y2],
});

const createBySize = (width, height) => ({
  width,
  height,
});

const sizeOf = (position) => {
  const { x, y } = position;

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
