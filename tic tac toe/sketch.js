let playerturn = 1
let cell1 = 0
let cell2 = 0
let cell3 = 0
let cell4 = 0
let cell5 = 0
let cell6 = 0
let cell7 = 0
let cell8 = 0
let cell9 = 0
let playerwin = 0

function setup() 
{
  createCanvas(400, 500);
}

function draw() 
{
  background(70, 200, 50);
  fill (0)
  strokeWeight (0)
  textSize (30)
  stroke (0)
  strokeWeight (3)
  line (125, 0, 125, 400)
  line (275, 0, 275, 400)
  line (0, 125, 400, 125)
  line (0, 275, 400, 275)


  

  if (cell1 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (10, 10, 110, 110)
    line (110, 10, 10, 110)
  }
  
  if (cell1 == 2)
  {
    stroke ("red")
    strokeWeight (10)
    fill (70, 200, 50)
    circle (60, 60, 100)
  }

  if (cell2 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (150, 10, 250, 110)
    line (250, 10, 150, 110)
  }
    
  if (cell2 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (200, 60, 100)
  }

  if (cell3 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (290, 10, 390, 110)
    line (390, 10, 290, 110)
  }
      
  if (cell3 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (340, 60, 100)
  }

  if (cell4 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (10, 140, 110, 250)
    line (10, 250, 110, 140)
  }

  if (cell4 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (60, 200, 100)
  }
  
  if (cell5 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (150, 140, 250, 250)
    line (150, 250, 250, 140)
  }
  
  if (cell5 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (200, 200, 100)
  }

  if (cell6 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (290, 140, 390, 250)
    line (290, 250, 390, 140)
  }
  
  if (cell6 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (340, 200, 100)
  }

  if (cell7 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (20, 290, 100, 380)
    line (20, 380, 100, 290)
  }
  
  if (cell7 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (60, 345, 100)
  }
    
  if (cell8 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (245, 290, 155, 380)
    line (245, 380, 155, 290)
  }
    
  if (cell8 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (200, 345, 100)
  }
  
  if (cell9 == 1)
  {
    fill (255)
    strokeWeight (10)
    stroke("blue")
    line (380, 290, 300, 380)
    line (380, 380, 300, 290)
  }
    
  if (cell9 == 2)
  {
    stroke ("red")
    fill (70, 200, 50)
    strokeWeight (10)
    circle (340, 345, 100)
  }

  if (playerwin == 1)
  {
    fill ("blue")
    strokeWeight (2)
    textSize (30)
    stroke ("lightblue")
    text ("Player 1 wins!", 100, 480)
  }
  else 
  {
    fill (0)
    strokeWeight (0)
    textSize (30)
    stroke (0)
    text ("turn: player " + playerturn, 100, 480)
  }
}

function mouseClicked ()
{
  //cell 1
  console.log (cell2)
  if (mouseX > 0 && mouseX < 123 && mouseY > 0 && mouseY < 123 && cell1 == 0)
  {
    cell1 = playerturn
    changePlayer();
  }
  //cell 2
  if (mouseX > 125 && mouseX < 275 && mouseY > 0 && mouseY < 123 && cell2 == 0)
  {
    cell2 = playerturn
    changePlayer();
  }
    
  //cell 3
  if (mouseX > 275 && mouseX < 400 && mouseY > 0 && mouseY < 123 && cell3 == 0)
  {
    cell3 = playerturn
    changePlayer();
  }

  //cell 4
  if (mouseX > 0 && mouseX < 123 && mouseY > 123 && mouseY < 275 && cell4 == 0)
  {
    cell4 = playerturn
    changePlayer();
  }

  //cell 5
  if (mouseX > 123 && mouseX < 275 && mouseY > 123 && mouseY < 275 && cell5 == 0)
  {
    cell5 = playerturn
    changePlayer();
  }
  //cell 6
  if (mouseX > 275 && mouseX < 400 && mouseY > 123 && mouseY < 275 && cell6 == 0)
  {
    cell6 = playerturn
    changePlayer();
  }
  //cell 7
  if (mouseX > 0 && mouseX < 123 && mouseY > 275 && mouseY < 400 && cell7 == 0)
  {
    cell7 = playerturn
    changePlayer();
  }
  
  //cell 8
  if (mouseX > 123 && mouseX < 275 && mouseY > 275 && mouseY < 400 && cell8 == 0)
  {
    cell8 = playerturn
    changePlayer();
  }

  //cell 9
  if (mouseX > 275 && mouseX < 400 && mouseY > 275 && mouseY < 400 && cell9 == 0)
  {
    cell9 = playerturn
    changePlayer();
  }

  if (cell1 == 1 && cell2 == 1 && cell3 == 1)
  {
    playerwin = 1 
  }
}

function changePlayer()
{
  playerturn = playerturn + 1
  if (playerturn > 2)
  {
    playerturn = 1
  }
}