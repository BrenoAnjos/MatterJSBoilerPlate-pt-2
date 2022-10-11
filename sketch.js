
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane
var particula1,particula2,particula3,particula4,particula5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
var plane_options = {
	isStatic: true
}
plane = Bodies.rectangle(600,height,1200,20,plane_options)
World.add(world,plane);
block1 = Bodies.rectangle(100,400,150,20,plane_options);
World.add(world,block1)
block2 = Bodies.rectangle(400,400,150,20,plane_options);
World.add(world,block2)

var particle_options = {
	restitution:0.4,
	friction:0.2
}
particula1 = Bodies.circle(220,10,10,particle_options)
World.add(world,particula1);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);


  rect(plane.position.x,plane.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);

  ellipse(particula1.position.x,particula1.position.y,10)

  drawSprites();
 
}



