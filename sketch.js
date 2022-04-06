


//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body 

let engine
let world
let bodies
var ball, ground, ball2

function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
  engine= Engine.create()
    world=engine.world
  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball2_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world

ground = Bodies.rectangle(200,390,400,20,ground_options)
 World.add(world,ground)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(100,10,20,ball2_options);
  World.add(world,ball2);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  //write a rectangle function to display ground.
 
  rect(ground.position.x, ground.position.y,400,20)


  
  
}

