class box{

  constructor(x,y,width,height){

  var box_op = {restitution:0.5}


 this.body = Bodies.rectangle(x,y,width,height);
 this.width = width;
 this.height = height;
 World.add(world,this.body);
 

  }

 display(){

  var pos = this.body.position;

  var ang = this.body.angle;

 push();

 rectMode(CENTER);

 strokeWeight(4)

 stroke("green")

 fill("red");

 translate(pos.x,pos.y)

 rotate(ang);

 rect(0,0,this.width,this.height);

 pop();

 }

}