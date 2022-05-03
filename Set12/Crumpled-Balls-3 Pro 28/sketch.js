const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paper, ground;
var dustbin, pLauncher;


function setup() {
    createCanvas(2000, 700);


    engine = Engine.create();
    world = engine.world;

    paper = new Paper(100, 690, 25);

    dustbin = new Bin(1600, 505, 10, 10);

    ground = new Ground(1000, 680, 2000, 20);

    pLauncher = new Launcher(paper.body, { x: 300, y: 100 });

    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(200);
    //text(mouseX + ";" + mouseY, 200, 200);
    ground.display();
    paper.display();
    dustbin.display();
    pLauncher.display();
    drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(paper.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    pLauncher.fly();
}