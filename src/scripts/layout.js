import Vector2D from "./vector2D";
import Vector0D from "./vector0D";

// =============================
// VAR WITH MAIN METADATA
// =============================
let grid = {
  indexes: [],
  columnsLength: null,
  rowsLength: null,
};

// =============================
// STATE OF LAYOUT
// =============================
const column_size = 65;
const row_size = 50;

let columnsLength = null;
let rowsLength = null;

let initialX = null;
let initialY = null;

// =============================
// GET POSITION BY MATRIZ INDEX
// =============================
const getPosition = (index) => {
  const row = Math.floor(index / columnsLength);
  const column = index - row * columnsLength;

  const y1 = initialY + row * row_size;
  const y2 = y1 + row_size;

  const x1 = initialX + column * column_size;
  const x2 = x1 + column_size;

  return Vector2D.createByCoord(Vector0D(x1, y1), Vector0D(x2, y2));
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

// =============================
// RETURN UPDATED GRID STATE
// =============================
const getGrid = () => grid;

// =============================
// FUNCTION TO INIT LAYOUT LOGIC
// =============================
const init = () => {
  initialX = (innerWidth % column_size) / 2;
  columnsLength = Math.floor(innerWidth / column_size);

  initialY = (innerHeight % row_size) / 2;
  rowsLength = Math.floor(innerHeight / row_size);

  grid = {
    indexes: [0, columnsLength * rowsLength],
    columnsLength,
    rowsLength,
  };
};

// ======================
// TO GET X AND Y LIMIT
// ======================
const limitX = () => [initialX, initialX + columnsLength * column_size];
const limitY = () => [initialY, initialY + rowsLength * row_size];

// ======================
// TO GET MAIN POSITIONS
// ======================
const centerColumn = () => Math.floor(columnsLength / 2);
const centerRow = () => Math.floor(rowsLength / 2) * columnsLength;
const bottomRow = () => Math.floor(rowsLength - 1) * columnsLength;

const centerCenter = () => centerRow() + centerColumn();

const bottomLeft = () => bottomRow();
const bottomRight = () => bottomRow() + (columnsLength - 1);

const topLeft = () => 0;
const topRight = () => columnsLength - 1;

const bottomCenter = () => bottomRow() + centerColumn();
const topCenter = () => centerColumn();

export default Object.freeze({
  init,
  getGrid,

  getPosition,
  getNextPositionFrom,
  getPrevPositionFrom,

  centerColumn,
  centerRow,
  centerCenter,
  bottomRight,
  bottomLeft,
  topRight,
  topLeft,
  bottomCenter,
  topCenter,

  limitX,
  limitY,
});
