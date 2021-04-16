var tomImg1,tomImg2,tomImg3,tom;
var jerryImg1,jerryImg2,jerryImg3,jerry;
var gardenImg;

function preload() {
    //load the images here
 tomImg1=loadAnimation("cat1.png");
 tomImg2=loadAnimation("cat2.png","cat3.png");
 tomImg3=loadAnimation("cat4.png");
 jerryImg1=loadAnimation("mouse1.png");
 jerryImg2=loadAnimation("mouse2.png","mouse3.png")
 jerryImg3=loadAnimation("mouse4.png");
 gardenImg=loadImage("garden.png");
    
}

function setup(){
 createCanvas(1000,800);
 //create tom and jerry sprites here
 tom=createSprite(800,600);
 tom.addAnimation("tom_standing",tomImg3);
 tom.addAnimation("tom_sitting",tomImg1);
 tom.addAnimation("tom_walking",tomImg2);
 tom.addAnimation("tom_sitting",tomImg1);
 
 tom.scale=0.2;
 

 jerry=createSprite(150,650);
 jerry.addAnimation("jerry_search",jerryImg3);
 jerry.addAnimation("jerry_gift",jerryImg1);
 jerry.addAnimation("jerry_teasing",jerryImg2);
 jerry.addAnimation("jerry_gift",jerryImg1);
 
 jerry.scale=0.1;
    
  //  jerry.changeAnimation("jerry_gift",jerryImg1);
  //  tom.changeAnimation("tom_sitting",tomImg1);
    

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
   
  //keyPressed();
   
    if(
      tom.x - jerry.x < jerry.width/2 + tom.width/2 
     && jerry.x - tom.x < jerry.width/2 + tom.width/2
      ){
        tom.velocityX=0;
        tom.changeAnimation("tom_standing",tomImg3);
        jerry.changeAnimation("jerry_search",jerryImg3);
    }
 
 
 drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode===LEFT_ARROW){
     tom.changeAnimation("tom_walking",tomImg2);
     tom.velocityX=-2; 
     jerry.changeAnimation("jerry_teasing",jerryImg2);
    }
    

}
