const
    cvs = document.querySelector("canvas"),
    ctx = cvs.getContext("2d");
cvs.width = innerWidth;
cvs.height = innerHeight;

loop();
function loop() {
    requestAnimationFrame(loop);

    if (typeof update === "function")
        update();
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    if (typeof render === "function")
        render();
}