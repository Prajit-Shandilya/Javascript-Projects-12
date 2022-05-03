class Paper {
    constructor(x, y, diameter) {
        var options = {

            restitution: 0.3,
            friction: 1.5,
            density: 1.2
        }
        this.body = Matter.Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        World.add(world, this.body);
        this.image = loadImage("paper.png");
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y);
    }
}