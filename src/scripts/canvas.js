// ==========================================
// CENTRALIZE CANVAS CONTEXT IN A UNIC FILE
// ==========================================
const canvas = document.getElementById("canvas-game");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

const clear = () => ctx.clearRect(0, 0, innerWidth, innerHeight);

export { clear };

export default ctx;
