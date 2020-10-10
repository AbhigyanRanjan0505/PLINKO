class Pars {
    constructor(x, y, radius) {
        var options = {
            isStatic:true,
            'restitution': 10.0,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        fill("#FFFFFF");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}