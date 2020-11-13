var movingrect,fixedrect;


function setup() {
  createCanvas(1200,800);
movingrect=createSprite(200, 200, 50, 80);
fixedrect=createSprite(400,200,80,30);
movingrect.shapeColor="green"
fixedrect.shapeColor="green"
movingrect.velocityY=6
fixedrect.velocityY=-6
}

function draw() {
  background(0);  
movingrect.x=World.mouseX
movingrect.y=World.mouseY


  


  

  

  

bounceOff(movingrect,fixedrect);
if (isTouching(movingrect,fixedrect)){
  movingrect.shapeColor="red"
  fixedrect.shapeColor="red"

}
else{
movingrect.shapeColor="green"
fixedrect.shapeColor="green"
} 



  drawSprites();
}





