import Keyboard from "./keyboard";

import Mob from "./mob";
import Layout from "./layout";
import Position from "./position";
import State from "./state";
import Player from "./player";

import Alignment from "./alignment";

let grid = null;

const init = () => {
  grid = Layout.init();

  const mob = Mob.mobs.GREEN;

  const containerPosition = Layout.getPosition(Layout.centerCenter());
  const { x, y } = Alignment.align(
    containerPosition,
    Position.createBySize(mob.width, mob.height)
  );
  Player.draw(x[0], y[0]);

  // for (let i = 0; i < 44; i++) {
  //   const mob = Mob.mobs.GREEN;

  //   const containerPosition = Layout.getPosition(i);
  //   console.log(containerPosition);
  //   const { x, y } = Alignment.align(
  //     containerPosition,
  //     Position.createBySize(mob.width, mob.height)
  //   );
  //   Mob.draw(mob, x[0], y[0]);
  // }

  // console.log(Layout.getNextPositionFrom(0));
};

export default Object.freeze({
  init,
});
