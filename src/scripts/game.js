import Keyboard from "./keyboard";

import Mob from "./mob";

import State from "./state";

const { mobs, test } = Mob;

const init = () => {
  console.log("iniciou");
  test(mobs.PURPLE, 0, 10);
  test(mobs.GREEN, 60, 10);
  test(mobs.RED, 120, 10);
};

export default {
  init,
};
