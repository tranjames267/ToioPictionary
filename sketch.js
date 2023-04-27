var onMat = false;

let button;
let i = 0;

function setup() {
  createCanvas(500, 500);
  background(235);
  
  // let col = color(220, 245, 250);
  button = createButton('Prompt');
  button.position(420, 460);
  button.size(70, 30);
  // button.style('background-color', col);
  
  button.mousePressed(pickWord);
}

function pickWord() {
  
  let words = [];
  words = [
    "Apple",
    "Star",
    "House",
    "Plane",
    "Hand",
    "Baseball",
    "Shoe",
    "Computer",
    "Chair",
    "Lightbulb",
  ]
  
  rectMode(CENTER);
  noStroke();
  fill(0, 174, 202);
  rect(255,10,500,120); 
  
  let word = random(words); // select random word
  textAlign(CENTER); 
  textSize(30);
  fill('white');
  text(word, 250, 45);
  console.log(i);
  i++;
  
  if (i%2 == 0) {
    createCanvas(500, 500);
    background(235); 
    rectMode(CENTER);
    noStroke();
    fill(0, 174, 202);
    rect(255,10,500,120);
  }
}

const connectedCubeArray = [];

function draw() {
  const cubeP = connectedCubeArray[0]; // First cube paired is the follower
  const cubeQ = connectedCubeArray[1];

  // Keep on chasing the other Cube
  const moveType = P5tCube.moveTypeId.withoutBack;
  const spd = 20;
  
  cubeQ?.moveToCube(cubeP, spd, moveType);
  
  
  if(onMat === true){
    noStroke();
    fill('black');   
    ellipse(cubeP.x, cubeP.y, 10, 10);      
  }
  
  const type = "buttonpress";
  cubeP?.addEventListener(type, () => {
    
    cubeQ?.playMelody([
      
      { note: 0x3c, duration: 0x10 },
      { note: 0x40, duration: 0x10 },
      { note: 0x43, duration: 0x10 },
      { note: 0x48, duration: 0x10 },
    ]);
  });
   
}

function keyPressed() {
  P5tCube.connectNewP5tCube().then((cube) => {
    connectedCubeArray.push(cube);
    cube.turnLightOn("white");
    onMat = true; 
  });
}


//Reference
// cubeP?.moveToCube(cubeQ, spd, moveType);
// cubeP?.moveTo( { x: mouseX, y: mouseY }, spd, moveType );
// console.log(cubeQ);

// cubeP?.moveTo( { x: 100, y: 100 }, spd, moveType );
// cubeP?.turnLightOn( 'red' );
// cubeP?.turnLightOn( 'yellow' );
// cubeP?.turnLightOn( 'green' );
// cubeP?.turnLightOn( 'blue' );
// cubeP?.turnLightOn( 'violet' );
// cubeP?.turnLightOff(); 
    
// C D E F G A B C
//     cubeP?.playMelody([
      
//       { note: 0x3c, duration: 0x1e },
//       { note: 0x3e, duration: 0x1e },
//       { note: 0x40, duration: 0x1e },
//       { note: 0x41, duration: 0x1e },
//       { note: 0x43, duration: 0x1e },
//       { note: 0x45, duration: 0x1e },
//       { note: 0x47, duration: 0x1e },
//       { note: 0x48, duration: 0x1e },
//     ]);


