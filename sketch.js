
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ball2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var options={

    restitution:1
  }
 
  ball=Bodies.circle(200,200,30,options);
   World.add(world,ball);

   con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });
World.add(world,con);
 
ball2=Bodies.circle(200,300,50,options);
World.add(world,ball2)

var con2 = Matter.Constraint.create({
  bodyA:ball,
  pointA:{x:0,y:0},
  bodyB:ball2,
  pointB:{x:0,y:0},
  length:100,
  stiffness:0.5
});
World.add(world,con2)
}


function draw() {
background(0);
Engine.update(engine);
ellipse(ball.position.x,ball.position.y,30);
ellipse(ball2.position.x,ball2.position.y,50);

push();
strokeWeight(4);
stroke(255);
line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y);
pop();   


}

function keyPressed(){
if (keyCode == RIGHT_ARROW){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

}