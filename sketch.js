const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground, plinko, particle;
var plinkoArray = [];
var particleArray = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(240,800,width,20);
  ground1 = new Ground(240,650,20,300);
  ground2 = new Ground(160,650,20,300);
  ground3 = new Ground(320,650,20,300);
  ground4 = new Ground(400,650,20,300);
  ground5 = new Ground(80,650,20,300);
  ground7 = new Ground(480,650,20,300);
  ground6 = new Ground(0,650,20,300);
  // plinko = new Plinko(100,100,20);

  for(var j = 20;j<width;j=j+50){
    plinkoArray.push(new Plinko(j,50,10));
  }
  for(var j = 7;j<width;j=j+50){
    plinkoArray.push(new Plinko(j,100,10));
  }
  for(var j = 20;j<width;j=j+50){
    plinkoArray.push(new Plinko(j,150,10));
  }
  for(var j = 50;j<width;j=j+50){
    plinkoArray.push(new Plinko(j,200,10));
  }
  
}

function draw() {
  background(0,0,0);  
  Engine.update(engine)
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  for( var j = 0; j<plinkoArray.length; j++){
    plinkoArray[j].display();
  }
    if(frameCount%60===0){
    particleArray.push(new Particle(240,20,10));
 
  }

  for(var k = 0; k<particleArray.length; k++){
      particleArray[k].display();
  }
  // plinko.display();

}
