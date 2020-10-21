const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1100,550,50,50);
    box2 = new Box(950,550,50,50);
    box3 = new Box(1100,480,50,50);
    box4 = new Box(950,480,50,50);
    box5 = new Box(1025,410,50, 50);

    pig1 = new Pig(1025, 550);
    pig2 = new Pig(1025, 480);

    log1 = new Log(1025, 500, 250, PI/2);
    log2 = new Log(1025, 430, 250, PI/2);
    log3 = new Log(980, 380, 150, PI/7);
    log4 = new Log(1070, 380, 150, -PI/7);

    bird = new Bird(0, 0)

    ground = new Ground(600,height,1300,20)
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();

    ground.display();
}