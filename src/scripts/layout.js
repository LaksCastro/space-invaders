import Position from "./position";

let grid = {
  indexes: [],
  columnsLength: null,
  rowsLength: null,
};

const column_size = 64;
const row_size = 60;

let columnsLength = null;
let rowsLength = null;

let initialX = null;
let initialY = null;

const getPosition = (index) => {
  const row = Math.floor(index / columnsLength);
  const column = index - row * columnsLength;

  const y1 = initialY + row * row_size;
  const y2 = y1 + row_size;

  const x1 = initialX + column * column_size;
  const x2 = x1 + column_size;

  return Position.createByCoord(x1, y1, x2, y2);
};

const getNextPositionFrom = (index) => {
  const nextIndex = index + 1;

  if (nextIndex > grid.indexes[1]) return null;

  return getPosition(nextIndex);
};

const getPrevPositionFrom = (index) => {
  const nextIndex = index - 1;

  if (nextIndex < grid.indexes[0]) return null;

  return getPosition(nextIndex);
};

const init = () => {
  initialX = (innerWidth % column_size) / 2;
  columnsLength = Math.floor(innerWidth / column_size);

  initialY = (innerHeight % row_size) / 2;
  rowsLength = Math.floor(innerHeight / row_size);

  grid = {
    indexes: [0, columnsLength * rowsLength - 1],
    columnsLength,
    rowsLength,
  };

  return grid;
};

export default Object.freeze({
  init,

  getPosition,
  getNextPositionFrom,
  getPrevPositionFrom,
});
