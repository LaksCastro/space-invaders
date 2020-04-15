let onArrowLeft, onArrowRight, onArrowUp;

const keys_codes = {
  ARROW_UP: ["ArrowUp", "Space", "KeyW", "Numpad8"],
  ARROW_LEFT: ["ArrowLeft", "KeyA", "Numpad4"],
  ARROW_RIGHT: ["ArrowRight", "Numpad6", "KeyD"],
};

const listener = ({ code }) => {
  if (keys_codes.ARROW_UP.includes(code)) return onArrowUp();
  if (keys_codes.ARROW_LEFT.includes(code)) return onArrowLeft();
  if (keys_codes.ARROW_RIGHT.includes(code)) return onArrowRight();
};

const addListers = () => document.addEventListener("keydown", listener);

const init = (listeners) => {
  const { left, right, up } = listeners;

  onArrowLeft = left;
  onArrowRight = right;
  onArrowUp = up;

  addListers();
};

const destroy = () => document.removeEventListener("keydown", listener);

export { init, destroy };

export default (listeners) => {};
