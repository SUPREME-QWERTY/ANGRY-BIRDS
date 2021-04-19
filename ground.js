class ground{

    constructor(x,y,width,height){

  var ground_op = {isStatic:1}
  
   this.body = Bodies.rectangle(x,y,width,height,ground_op);
   this.width = width;
   this.height = height;
   World.add(world,this.body);
   
  
    }
  
   display(){

   fill("brown");
  
   rectMode(CENTER);
  
   rect(this.body.position.x,this.body.position.y,this.width,this.height);
  
   }
  
  }