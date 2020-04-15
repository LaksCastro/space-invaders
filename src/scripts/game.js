import Keyboard from "./keyboard";

import Mob from "./mob";
import Layout from "./layout";
import State from "./state";

const { mobs, draw } = Mob;

const init = () => {
  console.log("iniciou");
  Layout.init();

  const grid = Layout.getGrid();

  console.log(Layout.getPosition(0));
};

export default {
  init,
};
