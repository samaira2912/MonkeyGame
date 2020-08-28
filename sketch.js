var bananaImage;
var obstacleImage, obstacle_group,obstacle;
var backdrop,backgroundImage;
var score;
var player,monkey_running;
var ground;
var food,foodGroup;

function preload(){
  backgroundImage=loadImage("junglee.png");
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 
}
function setup() {
  createCanvas(400, 400);
  
  obstacle_group = new Group();
  foodGroup = new Group();
  
  backdrop = createSprite(200,200,200,200); 
  backdrop.addImage("jungle",backgroundImage);
  backdrop.velocityX = -3;
  

  ground = createSprite(200,300,400,10);
  ground.visible = false;
  ground.x = ground.width/2;
  
  player = createSprite(100,340,0,0);
  player.addAnimation("monkey",monkey_running);
  player.scale = 0.15;
  food = createSprite(200,200);
  food.addImage("foood",bananaImage);
  food.scale = 0.05;
  foodGroup.add(food);
  
  
  obstacle = createSprite(200,370,200,200);
  obstacle.addImage("stone",obstacleImage);
  obstacle.scale = 0.10;
}

function draw() {
  background(220);
  
  switch(score){
    case 10: player.scale=0.12;
      break;
    case 20: player.scale=0.14;
      break;
    case 30: player.scale=0.16;
      break;
    case 40: player.scale=0.18;
      break;
    }
  
    if(ground.x > 400){
   ground.x = ground.width/2;

  }
  if(obstacle_group.isTouching(player)){
     
    player.scale=0.2;

  }
  
      drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
}