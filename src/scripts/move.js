import Vector2D from "./vector2D";

import Layout from "./layout";

const directions = {
  LEFT: "left",
  RIGHT: "right",
  TOP: "top",
  BOTTOM: "bottom",
};

let velocity = null;

const operations = {
  left: (x, y) => [x - velocity, y],
  top: (x, y) => [x, y - velocity],
  right: (x, y) => [x + velocity, y],
  bottom: (x, y) => [x, y + velocity],
};

const defaultConfig = {
  currentPosition: Vector2D.createByCoord(Vector0D(0, 0), Vector0D(0, 0)),
  direction: directions.RIGHT,
  velocity: 2,
};
const to = (userConfig = {}) => {
  const { limitX, limitY } = Layout;

  const [startX, endX] = limitX();
  const [startY, endY] = limitY();

  const { direction, velocity: vel, currentPosition } = Object.assign(
    {},
    defaultConfig,
    userConfig
  );

  velocity = vel;

  const { x, y } = currentPosition;

  console.log(currentPosition);
  const [x1, x2] = x;
  const [y1, y2] = y;

  const [newX1, newY1] = operations[direction](x1, y1);
  const [newX2, newY2] = operations[direction](x2, y2);

  velocity = null;

  if (newX1 < startX) return currentPosition;
  if (newX2 > endX) return currentPosition;
  if (newY1 < startY) return currentPosition;
  if (newY2 > endY) return currentPosition;

  return Vector2D.createByCoord(Vector0D(newX1, newY1), Vector0D(newX2, newY2));
};

export default Object.freeze({
  to,
  directions,
});
