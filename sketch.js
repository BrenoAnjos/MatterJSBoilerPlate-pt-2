
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane
var particula1, particula2, particula3, particula4, particula5
var particula6, particula7, particula8, particula9, particula10
var rotator1, rotator2, rotator3;
var block1, block2
var angle1 = 60
var angle2 = 60
var angle3 = 60


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options = {
		isStatic: true
	}
	plane = Bodies.rectangle(600, height, 1200, 20, plane_options)
	World.add(world, plane);
	block1 = Bodies.rectangle(100, 400, 150, 20, plane_options);
	World.add(world, block1)
	block2 = Bodies.rectangle(400, 400, 150, 20, plane_options);
	World.add(world, block2)

	var particle_options = {
		restitution: 0.4,
		friction: 0.2
	}
	particula1 = Bodies.circle(240, 10, 10, particle_options)
	World.add(world, particula1);
	particula2 = Bodies.circle(240, 10, 10, particle_options)
	World.add(world, particula2);
	particula3 = Bodies.circle(245, 10, 10, particle_options)
	World.add(world, particula3);
	particula4 = Bodies.circle(245, 10, 10, particle_options)
	World.add(world, particula4);
	particula5 = Bodies.circle(240, 10, 10, particle_options)
	World.add(world, particula5);
	particula6 = Bodies.circle(245, 10, 10, particle_options)
	World.add(world, particula6);
	particula7 = Bodies.circle(240, 10, 10, particle_options)
	World.add(world, particula7);
	particula8 = Bodies.circle(245, 10, 10, particle_options)
	World.add(world, particula8);
	particula9 = Bodies.circle(245, 10, 10, particle_options)
	World.add(world, particula9);
	particula10 = Bodies.circle(245, 10, 10, particle_options)
	World.add(world, particula10);

	var rotator_options = {
		isStatic: true
	}
	rotator1 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator1)
	rotator2 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator2)
	rotator3 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
	World.add(world, rotator3)

	Engine.run(engine);
	fill("brown");

}

function draw() {

	rectMode(CENTER);
	background("lightgreen");
	Engine.update(engine);


	rect(plane.position.x, plane.position.y, 1200, 20);
	rect(block1.position.x, block1.position.y, 150, 20);
	rect(block2.position.x, block2.position.y, 150, 20);

	ellipse(particula1.position.x, particula1.position.y, 10)
	ellipse(particula2.position.x, particula2.position.y, 10)
	ellipse(particula3.position.x, particula3.position.y, 10)
	ellipse(particula4.position.x, particula4.position.y, 10)
	ellipse(particula5.position.x, particula5.position.y, 10)
	ellipse(particula6.position.x, particula6.position.y, 10)
	ellipse(particula7.position.x, particula7.position.y, 10)
	ellipse(particula8.position.x, particula8.position.y, 10)
	ellipse(particula9.position.x, particula9.position.y, 10)
	ellipse(particula10.position.x, particula10.position.y, 10)

	Matter.Body.rotate(rotator1, angle1);
	push()
	translate(rotator1.position.x, rotator1.position.y)
	rotate(angle1)
	rect(0, 0, 150, 20);
	pop()
	angle1 += 2.7;

	Matter.Body.rotate(rotator2, angle2);
	push()
	translate(rotator2.position.x, rotator2.position.y)
	rotate(angle2)
	rect(0, 0, 150, 20);
	pop()
	angle2 += 5.8;

	Matter.Body.rotate(rotator3, angle3);
	push()
	translate(rotator3.position.x, rotator3.position.y)
	rotate(angle3)
	rect(0, 0, 150, 20);
	pop()
	angle3 += 9.9;


}



