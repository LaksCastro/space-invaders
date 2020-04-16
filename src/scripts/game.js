import _ from "lodash";

import utils from "./utils";

import ctx, { clear } from "./canvas";

import Keyboard from "./keyboard";

import Vector2D from "./vector2D";
import Vector0D from "./vector0D";

import Mob from "./mob";
import Player from "./player";

import Alignment from "./alignment";

import Layout from "./layout";

import State from "./state";

import Move from "./move";

const { random } = utils;

let grid = null;

let id = 0;

const render = () => {
  const { player, enemies } = State.get();

  Player.draw(Vector0D(player.position.x[0], player.position.y[0]));

  enemies.forEach((enemy) => {
    Mob.draw(enemy.mob, Vector0D(enemy.position.x[0], enemy.position.y[0]));
  });
};

const init = () => {
  Layout.init();
  grid = Layout.getGrid();

  let playerPosition = null;

  const containerPosition = Layout.getPosition(Layout.bottomCenter());

  playerPosition = Alignment.align(
    containerPosition,
    Vector2D.createBySize(Player.width, Player.height)
  );

  let centerRow = Math.floor(grid.rowsLength / 2);
  let centerColumn = Layout.centerColumn() + 2;

  const mobs = Object.keys(Mob.mobs).map((key) => key);

  const enemies = _.flattenDeep(
    Array.from({ length: centerRow + 1 }).map(() => {
      const rowsLength = centerRow;
      const rowIndex = rowsLength * grid.columnsLength;

      console.log(rowIndex);
      const positions = [];

      for (let i = 0; i < centerColumn; i++) {
        const pos = Layout.getPosition(rowIndex + i);
        const mob = Mob.mobs[mobs[random(0, mobs.length - 1)]];
        const enemyPos = Alignment.align(
          pos,
          Vector2D.createBySize(mob.width, mob.height)
        );
        console.log(pos);
        positions.push({
          mob,
          id,
          position: enemyPos,
          centerPosition: Alignment.align(
            enemyPos,
            Vector2D.createBySize(15, 15)
          ),
        });
        id++;
      }

      centerRow--;

      return positions;
    })
  );

  State.set({
    player: {
      isShooting: false,
      position: playerPosition,
      centerPosition: Alignment.align(
        playerPosition,
        Vector2D.createBySize(5, 5)
      ),
    },
    enemies,
  });

  render();

  // const mob = Mob.mobs.PURPLE;
  // for (let a = 0; a < grid.indexes[1] / 2; a++) {
  //   const pos = Layout.getPosition(a);
  //   const { x, y } = Alignment.align(
  //     pos,
  //     Position.createBySize(mob.width, mob.height)
  //   );
  //   Mob.draw(mob, x[0], y[0]);
  // }
  for (let i = 0; i < grid.indexes[1]; i++) {
    ctx.beginPath();

    ctx.strokeStyle = "#f1f1f1";

    const { x, y } = Layout.getPosition(i);
    ctx.moveTo(x[0], y[0]);

    ctx.lineTo(x[0], y[0]);
    ctx.lineTo(x[1], y[0]);

    ctx.moveTo(x[0], y[1]);

    ctx.lineTo(x[0], y[1]);
    ctx.lineTo(x[1], y[1]);

    ctx.moveTo(x[0], y[0]);

    ctx.lineTo(x[0], y[0]);
    ctx.lineTo(x[0], y[1]);

    ctx.moveTo(x[0], y[1]);

    ctx.lineTo(x[1], y[0]);
    ctx.lineTo(x[1], y[1]);

    ctx.stroke();
  }

  Keyboard.init({
    left: _.throttle(
      () =>
        requestAnimationFrame(() => {
          userPos = Move.to({
            direction: "left",
            velocity: 1,
            currentPosition: userPos,
          });
          clear();
          const mob = Mob.mobs.PURPLE;
          for (let a = 0; a < grid.indexes[1] / 2; a++) {
            const pos = Layout.getPosition(a);
            const { x, y } = Alignment.align(
              pos,
              Position.createBySize(mob.width, mob.height)
            );
            Mob.draw(mob, x[0], y[0]);
          }
          const { x, y } = Alignment.align(
            userPos,
            Position.createBySize(Player.width, Player.height)
          );
          Player.draw(x[0], y[0]);
        }),
      20
    ),
    right: _.throttle(
      () =>
        requestAnimationFrame(() => {
          userPos = Move.to({
            direction: "right",
            velocity: 1,
            currentPosition: userPos,
          });
          clear();
          const mob = Mob.mobs.PURPLE;
          for (let a = 0; a < grid.indexes[1] / 2; a++) {
            const pos = Layout.getPosition(a);
            const { x, y } = Alignment.align(
              pos,
              Position.createBySize(mob.width, mob.height)
            );
            Mob.draw(mob, x[0], y[0]);
          }
          for (let i = 0; i < grid.indexes[1]; i++) {
            ctx.beginPath();

            ctx.strokeStyle = "#f1f1f1";

            const { x, y } = Layout.getPosition(i);
            ctx.lineTo(x[0], y[0]);
            ctx.lineTo(x[1], y[0]);

            ctx.moveTo(x[0], y[1]);

            ctx.lineTo(x[0], y[1]);
            ctx.lineTo(x[1], y[1]);

            ctx.stroke();
          }
          const { x, y } = Alignment.align(
            userPos,
            Position.createBySize(Player.width, Player.height)
          );
          Player.draw(x[0], y[0]);
        }),
      20
    ),

    up: () => {},
  });
};

export default Object.freeze({
  init,
});
