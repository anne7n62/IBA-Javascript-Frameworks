const ctx = document.getElementsByTagName("canvas")[0].getContext("2d");
setInterval(() => {
  ctx.fillStyle = Math.random() < 0.5 ? "red" : "green"
  ctx.fillRect(Math.random() * 100, Math.random() * 100, 1, 1);
}, 1);