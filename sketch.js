var bg,bg2,bg3,bg3Img,form,system,code,security;
var ladoo,ladooImg;
var bheem,bheemImg;
var invisibleGround;
var ladooMountain,ladooMountainImg;
var score = 0;
var key,keyImg;
var gs=0

function preload() {
 
  
  bg = loadImage("bheem.png");
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
  keyImg = loadImage("key.png");
  bg3Img = loadImage("bg3.jpg");
  ladooImg = loadImage("ladoo.png");
  bheemImg = loadImage("bheem2.png");
  ladooMountainImg = loadImage("ladooMountain.png");

}

function setup() {
  createCanvas(1200,800);
  security = new Security();
  system = new System();
  bheem = createSprite(600,600,10,10);
  bheem.addImage(bheemImg);
  bheem.scale = 0.5;
  bheem.visible = false;

  ladooMountain = createSprite(1167,757,10,10);
  ladooMountain.addImage(ladooMountainImg);
  ladooMountain.scale = 0.5;
  ladooMountain.visible = false;

  invisibleGround = createSprite(0,610,10,1200);
  invisibleGround.color = "red";
  invisibleGround.visible = true;

}

function draw() {
  if(gs === 0) {

  
  background(bg);
  clues();
  security.display();
  textSize(30);
  fill("red");
  text("Score: " + score, 300, 50);
  
  
  
  if(score===3 && gs === 0) {
    //clear()
    background(bg2);
    key = createSprite(750,510,50,50);
    key.addImage(keyImg);
    key.scale = 0.3
    fill("black");
    textSize(35);
    text("TREASURE LADOO UNLOCKED",550, 470);

    
    
       if(mousePressedOver(key)){
          playlevel2();
          gs = 1
        }
  }

  drawSprites()
 }
}

function playlevel2(){
  clear();
  background(bg3Img);
  text("BHEEM KI SHAKTI",400,100)
  ladooMountain.visible = true;
  bheem.visible = true;
  key.destroy();
  ladoos();

  if(keyDown(UP_ARROW)){
    bheem.velocityY = -10;
  }

  if(keyDown(LEFT_ARROW)){
    bheem.x = bheem.x - 5;
  }

  if(keyDown(RIGHT_ARROW)){
    bheem.x = bheem.x + 5;
  }

  bheem.velocityY = bheem.velocityY + 0.5;
  bheem.collide(invisibleGround);
  ladooGroup = new Group();
  
  for (var i = 0; i < ladooGroup.length; i++) {
    
		if(ladooGroup.get(i).isTouching(ladoo)){
      //coinSound.play();
			ladooGroup.get(i).remove()
			score =score+100;
		}
	}
}

function ladoos(){
 
	if (frameCount % 100 === 0) {
		ladoo = createSprite(Math.round(random(50,width-100)), -50, 20 , 20);
		ladoo.addImage(ladooImg);
		ladoo.scale=0.1;
		ladoo.velocityY = 3;
		ladoo.lifetime = 150;
		ladooGroup.add(ladoo);  
  }
}