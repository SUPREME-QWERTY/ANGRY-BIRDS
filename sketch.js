const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2,box3,box4;
var ground1;
var pig1,pig2;
var log1,log2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    log1 = new log(810,260,300,PI/2);
    log2 = new log(810,180,300,PI/2);

    pig1 = new pig(800,330);
    pig2 = new pig(800,250);

    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    box3 = new box(700,245,70,70);
    box4 = new box(920,245,70,70);


    ground1 = new ground(200,height,1800,20);
    console.log(ground1);
    

}

function draw(){
    background("black");
    Engine.update(engine);
    // log1.display();
    // log2.display(); 
    pig1.display();
    pig2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground1.display();

}