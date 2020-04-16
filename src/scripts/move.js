import Position from "./position";

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

const to = (
  userConfig = {
    currentPosition: Position.createByCoord(0, 0, 0, 0),
    direction: directions.RIGHT,
    velocity: 2,
  }
) => {
  const { limitX, limitY } = Layout;

  const [startX, endX] = limitX();
  const [startY, endY] = limitY();

  const { velocity: vel, direction, currentPosition } = userConfig;

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

  return Position.createByCoord(newX1, newY1, newX2, newY2);
};

export default Object.freeze({
  to,
  directions,
});
