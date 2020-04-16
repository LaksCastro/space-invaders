// ==========================================
// CENTRALIZE CANVAS CONTEXT IN A UNIC FILE
// ==========================================
const canvas = document.getElementById("canvas-game");

canvas.width = innerWidth;
canvas.height = innerHeight;

const ctx = canvas.getContext("2d");

export default ctx;
