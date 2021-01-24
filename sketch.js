const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var polygon_imgd;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){

//polygon = loadImage("polygon.png");

}
function setup(){

    engine = Engine.create();
    world = engine.world;

    createCanvas(900,400);

    ground = new Ground();

    stand1 = new Stand(380,300,270,10);
    stand2 = new Stand(700,200,200,10);

    //tower 1

    //level 1
    block1 = new Block(300, 275, 30, 40);
    block2 = new Block(330, 275, 30, 40);
    block3 = new Block(360, 275, 30, 40);
    block4 = new Block(390, 275, 30, 40);
    block5 = new Block(420, 275, 30, 40);
    block6 = new Block(450, 275, 30, 40);
    block7 = new Block(480, 275, 30, 40);

    //level 2
    block8 = new Block(330, 235, 30, 40);
    block9 = new Block(360, 235, 30, 40);
    block10 = new Block(390, 235, 30, 40);
    block11 = new Block(420, 235, 30, 40);
    block12 = new Block(450, 235, 30, 40);

    //level 3
    block13 = new Block(360, 195, 30, 40);
    block14 = new Block(390, 195, 30, 40);
    block15 = new Block(420, 195, 30, 40);

    //top(level 4)
    block16 = new Block(390, 155, 30, 40);

    //tower 2

    //level 1
    block01 = new Block(640, 175, 30, 40);
    block02 = new Block(670, 175, 30, 40);
    block03 = new Block(700, 175, 30, 40);
    block04 = new Block(730, 175, 30, 40);
    block05 = new Block(760, 175, 30, 40);

    //level 2
    block06 = new Block(670, 135, 30, 40);
    block07 = new Block(700, 135, 30, 40);
    block08 = new Block(730, 135, 30, 40);

    //top(level 3)
    block09 = new Block(700, 95, 30, 40);


    // ball = Bodies.circle(50, 200, 20);
    // World.add(world, ball);
    
    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingShot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw(){

    background("#382C2C");

    Engine.update(engine);

    ground.display();
    strokeWeight(2);
    stroke(15);

    stand1.display();
    stand2.display();

    //tower 1

    //level 1
    fill("#3FE0D0");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    //level 2
    fill("#FFC0CB");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    //level 3
    fill("#3FE0D0");
    block13.display();
    block14.display();
    block15.display();

    //top(level 4)
    fill("#808080");
    block16.display();

    //tower 2

    //level 1
    fill("#87CEEA");
    block01.display();
    block02.display();
    block03.display();
    block04.display();
    block05.display();

    //level 2
    fill("#3FE0D0");
    block06.display();
    block07.display();
    block08.display();

    //top(level 3)
    fill("#FFC0CB");
    block09.display();

    //polygon.display();

    //imageMode(CENTER)
    //image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

    ellipse(polygon.position.x,polygon.position.y,20);
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingShot.fly();
  }