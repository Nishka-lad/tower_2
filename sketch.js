const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;

function preload() {
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(100, 395, 1700, 20);
  stand1 = new Ground(390, 300, 250, 10);
  stand2 = new Ground(750, 250, 250, 10);

  //level 1.1
  block1 = new Block(300, 275, 30, 40);
  block2 = new Block(330, 275, 30, 40);
  block3 = new Block(360, 275, 30, 40);
  block4 = new Block(390, 275, 30, 40);
  block5 = new Block(420, 275, 30, 40);
  block6 = new Block(450, 275, 30, 40);
  block7 = new Block(480, 275, 30, 40);
  //level 1.2
  block8 = new Block(330, 265, 30, 40);
  block9 = new Block(360, 265, 30, 40);
  block10 = new Block(390, 265, 30, 40);
  block11 = new Block(420, 265, 30, 40);
  block12 = new Block(450, 265, 30, 40);
  //level 1.3
  block13 = new Block(360, 255, 30, 40);
  block14 = new Block(390, 255, 30, 40);
  block15 = new Block(420, 255, 30, 40);
  //level 1.4
  block16 = new Block(390, 235, 30, 40);

  //level 2.1
  block17 = new Block(660, 200, 30, 30);
  block18 = new Block(690, 200, 30, 30);
  block19 = new Block(720, 200, 30, 30);
  block20 = new Block(750, 200, 30, 30);
  block21 = new Block(780, 200, 30, 30);
  block22 = new Block(810, 200, 30, 30);
  block23 = new Block(840, 200, 30, 30);
  //level 2.2
  block24 = new Block(690, 210, 30, 30);
  block25 = new Block(720, 210, 30, 30);
  block26 = new Block(750, 210, 30, 30);
  block27 = new Block(780, 210, 30, 30);
  block28 = new Block(810, 210, 30, 30);
  //level 2.3
  block29 = new Block(720, 220, 30, 30);
  block30 = new Block(750, 220, 30, 30);
  block31 = new Block(780, 220, 30, 30);
  //level 2.4
  block32 = new Block(750, 230, 30, 30);

  //ball holder with slings
  ball = Bodies.circle(50, 200, 20);
  World.add(world, ball);

  slingShot = new Slingshot(this.ball, {
    x: 100,
    y: 200
  });

}

function draw() {
  background("#0B0017");
  textSize(20);
  fill("gray");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 100, 30);
  fill("gray")
  text("Press space to reset", 700, 370);

  ground.display();
  stand1.display();
  stand2.display();

  //level 1.1 display
  fill("DarkTurquoise");
  block7.display();

  fill("DarkTurquoise");
  block6.display();

  fill("DarkTurquoise");
  block5.display();

  fill("DarkTurquoise");
  block4.display();

  fill("DarkTurquoise");
  block3.display();

  fill("DarkTurquoise");
  block2.display();

  fill("DarkTurquoise");
  block1.display();

  //level 1.2 display
  fill("MediumTurquoise");
  block12.display();

  fill("MediumTurquoise");
  block11.display();

  fill("MediumTurquoise");
  block10.display();

  fill("MediumTurquoise");
  block9.display();

  fill("MediumTurquoise");
  block8.display();

  //level 1.3 display
  fill("Turquoise");
  block15.display();

  fill("Turquoise");
  block14.display();

  fill("Turquoise");
  block13.display();

  //level 1.4 display
  fill("PaleTurquoise");
  block16.display();

  //level 2.1 display
  fill("#FF495F");
  block17.display();

  fill("#FF495F");
  block18.display();

  fill("#FF495F");
  block19.display();

  fill("#FF495F");
  block20.display();

  fill("#FF495F");
  block21.display();

  fill("#FF495F");
  block22.display();

  fill("#FF495F");
  block23.display();

  //level 2.2 display
  fill("#FF4B4B");
  block24.display();

  fill("#FF4B4B");
  block25.display();

  fill("#FF4B4B");
  block26.display();

  fill("#FF4B4B");
  block27.display();

  fill("#FF4B4B");
  block28.display();

  //level 2.3 display
  fill("#FF5F49");
  block29.display();

  fill("#FF5F49");
  block30.display();

  fill("#FF5F49");
  block31.display();

  //level 2.4 display
  fill("#FF7145");
  block32.display();

  imageMode(CENTER)
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);
  slingShot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(this.ball, {
    x: mouseX,
    y: mouseY
  });
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    // i have changed sling'S'hot and name of body you created is ball not polygon
    slingShot.attach(this.ball);
  }
}