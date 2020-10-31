
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperB;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	//Create the Bodies Here.
  paperB = new Paper(100,100,20);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperB.display();
  drawSprites();
 
}



