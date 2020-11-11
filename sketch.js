
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload(){
  boyImg = loadImage("boy.png");
  treeImg = loadImage("tree.png");
}

function setup() {
	createCanvas(1300, 530);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(20,400,20,100);
  stone = new Stone();
  sling = new Sling(stone.body, {x:365, y:350});
  mango1 = new Mango(1000,150,40,PI/2);
  mango2 = new Mango(1100,138,40,PI/2);
  mango3 = new Mango(1055,200,40,PI/2);
  mango4 = new Mango(1130,30,40,PI/2);
  mango5 = new Mango(1190,160,40,PI/2);
  mango6 = new Mango(1045,55,40,PI/2);
	Engine.run(engine);
}


function draw() {
 background("lightblue");

  Engine.update(engine);
  imageMode(CENTER);
  image(boyImg, 400, 400, 120, 220);

  push();
  translate(600, 200);
  image(treeImg, 500, 20, 350, 500);
  pop();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();
  stone.display();
  sling.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:365, y:350}) 
	  sling.attach(stone.body);
	}
  }
function mouseReleased(){
	sling.fly();
} 



  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r){
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
