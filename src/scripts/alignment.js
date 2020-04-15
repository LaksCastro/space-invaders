import Position from "./position";

const container = {};

const content = {};

// const getContainerSize = (conta)

const align = (containerPosition, contentSize) => {
  const { x, y } = containerPosition;
  const [x1, x2] = x;
  const [y1, y2] = y;

  const { width, height } = contentSize;

  const containerWidth = x2 - x1;
  const containerHeight = y1 - y2;

  const contentX1 = containerWidth - width / 2;
  const contentX2 = contentX1 + width;

  const contentY1 = containerHeight - height / 2;
  const contentY2 = contentY1 + height;

  return Position.create(contentX1, contentY1, contentX2, contentY2);
};

export default Object.freeze({
  align,
});
