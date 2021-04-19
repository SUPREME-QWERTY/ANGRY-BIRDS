class log{

    constructor(x,y,height,angle){

    var log_op = {restitution:0.5,friction:0.3,density:0.4}
  
   this.body = Bodies.rectangle(x,y,15,height,log_op);
   this.width = 15;
   Matter.Body.setAngle(this.body,this.body.angle);
   this.height = height;
   World.add(world,this.body);
   
  
    }
  
   display(){
  
    var pos = this.body.position;
  
    var ang = this.body.angle;
  
   push();
  
   translate(pos.x,pos.y)
  
   rotate(ang);

   rectMode(CENTER);

   strokeWeight(1)

   stroke("yellow");

   fill("red");
  
   rect(0,0,this.width,this.height);
  
   pop();
  
   }
  
  }