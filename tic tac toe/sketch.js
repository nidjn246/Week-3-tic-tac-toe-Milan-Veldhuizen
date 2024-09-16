let playerturn = 1
let lefttop1 = 0
let lefttop2 = 0
let righttop1 = 0
let righttop2 = 0
let middletop1 = 0
let middletop2 = 0
let leftmiddle1 = 0
let leftmiddle2 = 0
let rightmiddle1 = 0
let rightmiddle2 = 0
let middle1 = 0
let middle2 = 0
function setup() {
  createCanvas(400, 500);

}

function draw() {
  background(220);
  //het raster
  text ("turn: player " + playerturn, 100, 480)
  strokeWeight (3)
  line (125, 0, 125, 400)
  line (275, 0, 275, 400)
  line (0, 125, 400, 125)
  line (0, 275, 400, 275)
  //if lefttop1 is 1 make a square at 10, 10, 10
  if (lefttop1 == 1)
    square (10, 10 ,10)
  //if lefttop2 is 1 make a circle at 10, 10, 10
  if (lefttop2 == 1)
    circle ( 10, 10, 10)

  if (righttop1 == 1)
    square (350, 10 ,10)
  if (righttop2 == 1)
    circle ( 350, 10, 10)

  if (middletop1 == 1)
    square (200, 10 ,10)

  if (middletop2 == 1)
    circle ( 200, 10, 10)

  if (leftmiddle1 == 1)
    square (10, 200, 10)

  if (leftmiddle2 == 1)
    circle (10, 200, 10)
  
}

function mouseClicked ()
{
  if (mouseClicked && mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400)
  {
    playerturn = playerturn + 1
  }

  if (playerturn == 3)
  {
    playerturn = 1
  }
//console.log (mouseX) 
  if (playerturn == 2 && mouseX > 0 && mouseX < 123 && mouseY > 0 && mouseY < 123 && lefttop2 == 0)
  {
    lefttop1 = 1
  }
  
  if (playerturn == 1 && mouseX > 0 && mouseX < 123 && mouseY > 0 && mouseY < 123 && lefttop1 == 0)
  { 
    lefttop2 = 1
  }

  if (playerturn == 2 && mouseX > 275 && mouseX < 400 && mouseY > 0 && mouseY < 123 && righttop2 == 0)
  {
    righttop1 = 1
  }
  
  if (playerturn == 1 && mouseX > 275 && mouseX < 400 && mouseY > 0 && mouseY < 123 && righttop1 == 0)
  { 
      righttop2 = 1
  }

  if (playerturn == 2 && mouseX > 125 && mouseX < 275 && mouseY > 0 && mouseY < 123 && middletop2 == 0)
  {
    middletop1 = 1
  }

  if (playerturn == 1 && mouseX > 125 && mouseX < 275 && mouseY > 0 && mouseY < 123 && middletop1 == 0)
  { 
    middletop2 = 1
  }

  if (playerturn == 2 && mouseX > 0 && mouseX < 123 && mouseY > 125 && mouseY < 275 && leftmiddle2 == 0)
  {
    leftmiddle1 = 1
  }

  if (playerturn == 1 && mouseX > 0 && mouseX < 123 && mouseY > 125 && mouseY < 275 && leftmiddle1 == 0)
  { 
    leftmiddle2 = 1
  }
}