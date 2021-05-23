var fixedRect,movingRect,ob1,ob2


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 90);
  movingRect = createSprite(500, 200, 90, 50);
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"

  ob1 = createSprite(500, 100, 50, 90);
  ob2 = createSprite(200, 340, 50, 90);
  ob1.shapeColor = "blue"
  ob2.shapeColor = "blue"
  
}

function draw() {
  background(146,46,7);  
  ob2.x = World.mouseX
  ob2.y = World.mouseY
   
 
 
  if (isTouching(ob2,movingRect))  {

    ob2.shapeColor = "red"
    movingRect.shapeColor = "red"

  } else {

    ob2.shapeColor = "green"
    movingRect.shapeColor = "green" 
  }
       drawSprites();
}


