let font;
let points=[];
let angle=0;
let r=10;

function preload(){
//   font=loadFont("Jersey25-Regular.ttf");
font=loadFont("Anta-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);

  points=font.textToPoints("Jason",50,300,120,{ sampleFactor:  0.8 });
  print(points);
}

function draw() {
  background(220);
  textFont(font);
  textSize(80);
  fill('red')
//   text('I am Normal', 10, 100);

  



  for(let i=0; i<points.length;i++){
    ellipse(points[i].x+r*cos(angle+i*2),points[i].y+r*sin(angle+i*2),5,5);
  }

  angle+=10;


}

