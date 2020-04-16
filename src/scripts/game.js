import _ from "lodash";

import ctx, { clear } from "./canvas";

import Keyboard from "./keyboard";

import Mob from "./mob";
import Layout from "./layout";
import Vector2D from "./vector2D";
import State from "./state";
import Player from "./player";
import Move from "./move";

import Alignment from "./alignment";
import move from "./move";

let grid = null;

const render = () => {
  const { player } = State.get();

  Player.draw(player.position.x[0], player.position.y[0]);
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

  State.set({
    player: {
      isShooting: false,
      position: playerPosition,
      centerPosition: Alignment.align(
        playerPosition,
        Position.createBySize(5, 5)
      ),
    },
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
