const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge, base1, base2, joinPoint, joinLink;
var ball, ball2, ball3, ball4, ball5, ball6, ball7, ball8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  bridge = new Bridge(20,{x:350,y:250})
  joinPoint = new Base(1050,250,1,1)
  Matter.Composite.add(bridge.body,joinPoint);
  joinLink = new link(bridge,joinPoint);
  base1= new Base(200,250,400,100)
  base2= new Base(1500,250,900,100)

  var ball_options = {
    restitution: 0.8,
    frictionair:0.001,
    friction:1,
  }
  
  
  ball = Bodies.circle(580,100,30,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(800,100,30,ball_options);
  World.add(world,ball2);
  ball3 = Bodies.circle(900,100,30,ball_options);
  World.add(world,ball3);
  ball4 = Bodies.circle(850,100,30,ball_options);
  World.add(world,ball4);
  ball5 = Bodies.circle(750,100,30,ball_options);
  World.add(world,ball5);
  ball6 = Bodies.circle(500,100,30,ball_options);
  World.add(world,ball6);
  ball7 = Bodies.circle(700,100,30,ball_options);
  World.add(world,ball7);
  ball8 = Bodies.circle(760,100,30,ball_options);
  World.add(world,ball8);
  frameRate(80);
  
  
  ellipseMode(RADIUS);

}

function draw() {
  background(51);
  bridge.display();
  ellipse(ball2.position.x,ball2.position.y,30);
  ellipse(ball.position.x,ball.position.y,30);
  ellipse(ball3.position.x,ball3.position.y,30);
  ellipse(ball4.position.x,ball4.position.y,30);
  ellipse(ball5.position.x,ball5.position.y,30);
  ellipse(ball6.position.x,ball6.position.y,30);
  ellipse(ball7.position.x,ball7.position.y,30);
  ellipse(ball8.position.x,ball8.position.y,30);

base1.show();
base2.show();
  Engine.update(engine);
 }


