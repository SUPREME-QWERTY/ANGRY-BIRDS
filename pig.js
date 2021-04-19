class pig{

    constructor(x,y){
  
    var pig_op = {restitution:0.5}
  
  
   this.body = Bodies.rectangle(x,y,50,50,pig_op);
   this.width = 50;
   this.height = 50;
   World.add(world,this.body);
   
  
    }
  
   display(){
  
    var pos = this.body.position;
  
    var ang = this.body.angle;
  
   push();
  
   rectMode(CENTER);
  
   strokeWeight(4)
  
   stroke("green")
  
   fill("white");
  
   translate(pos.x,pos.y)
  
   rotate(ang);
  
   rect(0,0,this.width,this.height);
  
   pop();
  
   }
  
  }