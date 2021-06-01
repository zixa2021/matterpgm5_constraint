const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var boxl1,boxl2;
var boxg1,boxg2;
var ground;
var bg;
var rope;
var flag = true;
function preload(){
    bg = loadImage("img/bg.jpg")
}
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    
    //light blue
    boxl1 = new Box1(600,350,100,30,"lightblue");
    boxl2 = new Box1(400,350,100,30,"lightblue");
    boxl3 = new Box1(580,300,100,100,"lightblue");
    boxl4 = new Box1(215,250,100,100,"lightblue");
    boxl5 = new Box1(215,200,40,30,"lightblue");
    boxl6 = new Box1(400,100,400,10,"lightblue");

    //grey
    boxg1 = new Box2(200,300,100,30,"grey");
    boxg2 = new Box2(400,300,100,100,"grey");
    boxg3 = new Box2(220,150,40,30,"grey");
    boxg4 = new Box2(400,150,40,30,"grey");
    boxg5 = new Box2(580,150,40,30,"grey");
    boxg6 = new Box2(400,100,40,30,"grey");
    boxg7 = new Box2(580,100,40,30,"grey");

    //box8 = new Box2(50,100,40,30,"grey");

    //ball
    ball1 = new Ball(400,50,30,30,"green");
    ball2 = new Ball(360,350,30,30,"green");
    ball3 = new Ball(450,350,30,30,"green");

    hit = new Hit(50,50,40,40,"red");

    ground = new Ground(400,380,800,20);
    
    var options={
            bodyA:hit.body,
            pointB:{x:100,y:100},
            stiffness: 0.04,
            length: 10
    }
        rope = Constraint.create(options);
        World.add(world, rope);
}

function draw(){
 
    background(bg);
    Engine.update(engine);
    boxl1.display();
    boxl2.display();
    boxl3.display();
    boxl4.display();
    boxl5.display();
    boxl6.display();

    boxg1.display();
    boxg2.display();
    boxg3.display();
    boxg4.display();
    boxg5.display();
    boxg6.display();
    boxg7.display();
    //box8.display();

    ball1.display();
    ball2.display();
    ball3.display();

    ground.display();

    hit.display();
    if(rope.bodyA){
    strokeWeight(4);
    line(100,100,hit.body.position.x,hit.body.position.y)}
}

function mouseDragged(){
    Matter.Body.setPosition(hit.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.bodyA = null;
}









