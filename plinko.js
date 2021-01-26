class Plinko{
    constructor(x,y,r){
        var options = {
            restitution:1,
            friction:0,
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r, options);
        World.add(world, this.body);
        
    }
    display(){
        push()
        var pos = this.body.position;
        translate(pos.x, pos.y);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0, this.r, this.r);
        pop()
    }
  }