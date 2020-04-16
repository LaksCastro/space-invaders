import Position from "./position";

const align = (container, contentSize) => {
  const { x, y } = container;

  const [containerX1] = x;
  const [containerY1] = y;

  const { width: containerW, height: containerH } = Position.sizeOf(container);

  const { width: contentW, height: contentH } = contentSize;

  const contentX1 = containerX1 + (containerW - contentW) / 2;
  const contentX2 = contentX1 + contentW;

  const contentY1 = containerY1 + (containerH - contentH) / 2;
  const contentY2 = contentY1 + contentH;

  return Position.createByCoord(contentX1, contentY1, contentX2, contentY2);
};

export default Object.freeze({
  align,
});
