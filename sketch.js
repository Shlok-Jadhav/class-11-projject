var path_image,path
var boy_img
function preload(){
  path_image = loadImage("path.png");
boy_img = loadAnimation("Runner-1.png","Runner-2.png");



}

function setup(){
  createCanvas(400,400);
  path = createSprite(200,200);
  path.addImage(path_image);
  path.velocityY = 4;
  boy = createSprite(180,340,30,30);
  boy.addAnimation("jack",boy_img);
  boy.scale = 0.1
  leftbound = createSprite(0,0,50,800);
  leftbound.visible = false
  rightbound = createSprite(380,0,50,800);
  rightbound.visible = false

}


function draw() {
  background(0);
  boy.x = mouseX
  boy.collide(leftbound)
  boy.collide(rightbound)

  if(path.y > 400){
    path.y = height/2
  }
drawSprites()
}
