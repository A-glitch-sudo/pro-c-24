
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer
var ground
var stone
var iron
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   hammer = new Hammer(801,120,100,50);
   ground = new Ground(600,400,1200,20);
   stone = new Stone(200,300);
   iron = new Iron(40,50)

Engine.	run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  ground.display();
  stone.display();
  iron.display();
  drawSprites();
 
}



