import _ from "lodash";

import ctx, { clear } from "./canvas";

import Keyboard from "./keyboard";

import Mob from "./mob";
import Layout from "./layout";
import Position from "./position";
import State from "./state";
import Player from "./player";
import Move from "./move";

import Alignment from "./alignment";
import move from "./move";

let grid = null;

const render = () => {};

const init = () => {
  Layout.init();
  State.init();

  grid = Layout.getGrid();
  let userPos = null;

  const containerPosition = Layout.getPosition(Layout.bottomCenter());
  const { x, y } = Alignment.align(
    containerPosition,
    Position.createBySize(Player.width, Player.height)
  );
  userPos = Position.createByCoord(
    x[0],
    y[0],
    x[0] + Player.width,
    y[0] + Player.height
  );
  Player.draw(x[0], y[0]);

  const mob = Mob.mobs.PURPLE;
  for (let a = 0; a < grid.indexes[1] / 2; a++) {
    const pos = Layout.getPosition(a);
    const { x, y } = Alignment.align(
      pos,
      Position.createBySize(mob.width, mob.height)
    );
    Mob.draw(mob, x[0], y[0]);
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
