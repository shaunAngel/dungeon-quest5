var bgImg,bg
var prince, princeImg, princess, princessImg
var ground
var platformImg, platform2Img,platform3Img,platform4Img
var platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, platform9;
var platform10, platform11;
var edges;
var zombie3Img,zombie3,zombie4Img,zombie4;
var vampire1Img,vamp1,vampire5Img,vamp5,vampireGroup;
var restartImg,gameoverImg,gameover,restart,winImg,win
var PLAY = 1;
var END  = 0
var gameState = PLAY;


function preload(){
bgImg= loadImage("image.png");
princeImg = loadImage("prince/prince.png");
platform1Img = loadImage("plat1.png");
platform2Img = loadImage("plat2.png");
platform3Img = loadImage("plat3.png");
platform4Img = loadImage("plat4.png");
princessImg = loadImage("princess/princess3.png")
zombie3Img = loadImage("zombies/zombie3.png");
zombie4Img = loadImage("zombies/zombie4.png");
vampire1Img = loadImage("vampires/vamp1.png");
vampire5Img = loadImage("vampires/vamp5.png"); 
restartImg = loadImage("restartimg.jpg");
gameoverImg  = loadImage("gamedone.jpg");
winImg = loadImage("won.jpg");
}

function setup(){
canvas = createCanvas(1500,350)

bg= createSprite(1209,170,10,10);
bg.addImage(bgImg)
bg.scale = 2.5
//bg.velocityX = -1 

prince = createSprite(100,300,50,50);
prince.addImage(princeImg);
prince.scale = 0.2

princess = createSprite(1400,250,10,10);
princess.addImage(princessImg);
//princess.scale = 

zombie3 = createSprite(650,210,10,10);
zombie3.addImage(zombie3Img)
zombie3.scale = 0.6

zombie4 = createSprite(500,250,10,10);
zombie4.addImage(zombie4Img);
zombie4.scale = 0.7


ground = createSprite(500,340,2800,20);
ground.visible = false;

platform1 = createSprite(280,250,10,10);
platform1.addImage(platform1Img)
platform1.scale = 0.6

platform2 = createSprite(480,130,10,10);
platform2.addImage(platform2Img)
platform2.scale = 0.6

platform3 = createSprite(680,290,10,10);
platform3.addImage(platform3Img)
platform3.scale = 0.6

platform5 = createSprite(990,290,10,10);
platform5.addImage(platform1Img)
platform5.scale = 0.6

platform6 = createSprite(770,130,10,10);
platform6.addImage(platform3Img)
platform6.scale = 0.6

platform7 = createSprite(1206,160,10,10);
platform7.addImage(platform4Img)
platform7.scale = 0.6

platform8 = createSprite(1600,110,10,10);
platform8.addImage(platform1Img)
platform8.scale = 0.6

platform9 = createSprite(1909,200,10,10);
platform9.addImage(platform2Img)
platform9.scale = 0.6

platform10= createSprite(2200,200,10,10);
platform10.addImage(platform3Img)
platform10.scale = 0.6

platform11 = createSprite(2506,280,10,10);
platform11.addImage(platform4Img)
platform11.scale = 0.6

vampireGroup = new Group();

gameover = createSprite(400,180,40,20);
gameover.addImage(gameoverImg)
gameover.scale = 2
gameover.visible = false;

restart = createSprite(900,180,40,20);
restart.addImage(restartImg)
restart.scale = 2
restart.visible = false;

win  = createSprite(800,300,10,10);
win.addImage(winImg)
win.visible = false;
win.scale = 2
}
function draw(){

  edges = createEdgeSprites(); 

  background("white");
//if(bg.x<0){
  //bg = bg.width/2}
//Camera(50,50,mouseX)

if( gameState === PLAY){
  prince.collide(ground)
  prince.collide(platform1)
  prince.collide(platform2)
  prince.collide(platform3)
  prince.collide(platform5)
  prince.collide(platform6)
  prince.collide(platform7)
  prince.collide(platform8)
  prince.collide(platform9)
  prince.collide(platform10)
  prince.collide(platform11)
  prince.collide(edges)
  prince.collide(vampireGroup)
  prince.collide(zombie3)
  prince.collide(zombie4)

  
  if(keyDown("space")){
    prince.y = prince.y - 15;
    }
    prince.y = prince.y+5
  if(keyDown("left")){
    prince.x = prince.x - 9;
  }
  if(keyDown("right")){
    prince.x = prince.x + 9;
  }
  if(prince.isTouching(princess)){
    win.visible = true;
  }
  if(frameCount%150 ===0){

    vampires();
    }
     if(prince.isTouching(zombie3) || prince.isTouching(zombie4) || prince.isTouching(vampireGroup)){
gameState = END;

         }
           //camera.position.x = prince.x 
        }
        if(gameState === END){
          gameover.visible = true;
          restart.visible = true;
        }
        if(mousePressedOver(restartImg)) {
          reset();
        }
        
  drawSprites();
}

function vampires(){
  
var vampire = createSprite(Math.round(random(1000,1200)),200,10,10)
 // vampire.debug = true;
  vampire.setCollider("circle",0,0,50)
var rand = Math.round(random(1,2))
switch(rand){
  case 1:vampire.addImage(vampire1Img);
  break;
  case 2: vampire.addImage(vampire5Img);
  break;
   
}
vampireGroup.add(vampire)
}
  

