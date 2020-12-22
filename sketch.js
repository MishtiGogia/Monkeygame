var monkey,monkey_running;
var ground;
var banana,bananaGroup,bananaImage;
var obstacle,obstacleGroup,obstacleImage;
var survivalTime=0;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  bananaGroup= new Group();
  obstacleGroup=new Group();
}



function setup() {
 createCanvas(600,600); 

  monkey= createSprite(250,250,50,50);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.10;
  
  ground= createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  console.log(ground.x);
  
}


function draw() {
 background("white");
  
 if(keyDown("space")){
   monkey.velocityY=-11;
 } 
 
  monkey.velocityY=monkey.velocityY+0.8;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  spawnBanana();
  spawnObstacle();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
}

function spawnBanana(){
 if(frameCount%80===0){
   banana= createSprite(600,200,20,20);
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale=0.125;
   banana.velocityX=-3;
   banana.lifetime=250;
   bananaGroup.add(banana);
 } 
  
  
}

function spawnObstacle(){
 if(frameCount%300===0){
   obstacle= createSprite(600,400,20,20);
   obstacle.y=Math.round(random(300,330));
   obstacle.addImage(obstaceImage);
   obstacle.scale=0.125;
   obstacle.velocityX=-3;
   obstacle.lifetime=250;
   obstacleGroup.add(obstacle);
 } 
}



