import Layout from "./layout";

let player = null;

let playerShoot = null;

let enemies = null;

let enemiesShoot = null;

const get = () => ({
  player,
  playerShoot,
  enemies,
  enemiesShoot,
});

const set = (newState = {}) => {
  const state = Object.assign({}, get(), newState);

  const {
    player: newPlayerState,
    playerShoot: newPlayerShootState,
    enemies: newEnemiesState,
    enemiesShoot: newEnemiesShootState,
  } = state;

  player = newPlayerState;
  playerShoot = newPlayerShootState;
  enemies = newEnemiesState;
  enemiesShoot = newEnemiesShootState;
};

// const init = () => {

//   centerRow = Math.floor(grid.rowsLength / 2);
//   centerColumn = Layout.centerColumn();

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
  set,
  get,

  player,
  playerShoot,
  enemies,
  enemiesShoot,
});
