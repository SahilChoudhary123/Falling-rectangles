const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;
var box1;
var land;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box = new Box(225, 100, 50, 100);
    box1 = new Box(200,300,50,50);
    land = new ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box.display();
    land.display();
}