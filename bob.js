class Bob
{
    constructor(x, y, r) 
    {
        var options = {
            isStatic: true,
            restitution:0,
            friction:0.5,
            density:1.2
        }
        
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }
      display()
      {
        var pos = this.body.position;
        ellipseMode(CENTER);
        //strokeWeight(3);
        fill(255,0,255);
        ellipse(pos.x, pos.y, this.r, this.r);
      }
}