import Keyboard from "./keyboard";

import Mob from "./mob";
import Layout from "./layout";
import State from "./state";

const init = () => {
  console.log("iniciou");

  const grid = Layout.init();

  console.log(grid);
  console.log(Layout.getPosition(22));
  // console.log(Layout.getNextPositionFrom(0));
};

export default Object.freeze({
  init,
});
