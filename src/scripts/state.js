import Layout from "./layout";

let player = null;

let playerShoot = null;

let centerRow = null;
let centerColumn = null;

let rows = null;

let enemies = null;

let enemiesShoot = null;

const getState = () => ({
  player,
  playerShoot,
  enemies,
  enemiesShoot,
});

const setState = (newState) => {
  const {
    player: newPlayerState = player,
    playerShoot: newPlayerShootState = playerShoot,
    enemies: newEnemiesState = enemies,
    enemiesShoot: newEnemiesShootState = enemiesShoot,
  } = newState;

  player = newPlayerState;
  playerShoot = newPlayerShootState;
  enemies = newEnemiesState;
  enemiesShoot = newEnemiesShootState;
};

// const init = () => {
//   const grid = Layout.getGrid();

//   player = {
//     position: Layout.getPosition(Layout.bottomCenter()),
//     isShooting: false,
//     centerPosition: {},
//   };

//   playerShoot = {
//     position: null,
//   };

//   centerRow = Math.floor(grid.rowsLength / 2);
//   centerColumn = Layout.centerColumn();

//   console.log(centerRow);
//   rows = Array.from({ length: centerRow + 1 }).map(() => {
//     const row = centerRow;
//     centerRow--;
//     return row;
//   });
//   console.log(rows);
//   enemies = [
//     {
//       id: "8r9023485",
//       position: {},
//       centerPosition: {},
//     },
//   ];

//   enemiesShoot = {
//     position: null,
//   };
// };

export default Object.freeze({
  setState,
  getState,

  player,
  playerShoot,
  enemies,
  enemiesShoot,
});
