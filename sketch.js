
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, roof1, roof2, roof3, roof4, roof5;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 150, 350, 30);

	roof1 = new Roof(300, 150, 1, 1);
	roof2 = new Roof(350, 150, 1, 1);
	roof3 = new Roof(400, 150, 1, 1);
	roof4 = new Roof(450, 150, 1, 1);
	roof5 = new Roof(500, 150, 1, 1);

	roof1.visible = false;
	roof2.visible = false;
	roof3.visible = false;
	roof4.visible = false;
	roof5.visible = false;

	bob1 = new Bob(300, 400, 50);
	bob2 = new Bob(350, 400, 50);
	bob3 = new Bob(400, 400, 50);
	bob4 = new Bob(450, 400, 50);
	bob5 = new Bob(500, 400, 50);

	rope1 = new Rope(bob1.body,roof1.body,-50*2, 0);
	rope2 = new Rope(bob2.body,roof2.body,-50*2, 0);
	rope3 = new Rope(bob3.body,roof3.body,-50*2, 0);
	rope4 = new Rope(bob4.body,roof4.body,-50*2, 0);
	rope5 = new Rope(bob5.body,roof5.body,-50*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
  roof1.display(); 
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  roof.display();  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}



