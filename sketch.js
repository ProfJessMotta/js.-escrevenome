function setup() {
    createCanvas(500, 400);
    background("orange");
  }
  
  function draw() {
    fill("purple");
    stroke("blue");
   
    //console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
      triangle(mouseX,mouseY,mouseX + 45, mouseY + 45,mouseX+45,mouseY + 15
      );
    }
  }
  