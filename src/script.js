const particles = [];
const mouse = new Mouse();

for (let count_x = 46; count_x --;)
    for (let count_y = 24; count_y --;)
        particles.push(new Particle(count_x * 30 + (+(count_y % 2) * 15), count_y * 30));

function update() {
    
    particles.forEach(part=> {

        part.moving(mouse);

    });

}
function render() {
    for (let i in particles) particles[i].draw();
}