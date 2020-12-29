const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    restitution : 1.5
  }
 object = Bodies.circle (200,150,20,options);
 World.add (world,object)
 var G_options = {
  isStatic : true
}

ground = Bodies.rectangle(200,400,400,50,G_options);
World.add (world,ground)



}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode (CENTER)
  ellipseMode (RADIUS)
  rect(ground.position.x,ground.position.y,400,50)
  ellipse(object.position.x,object.position.y,20)

}