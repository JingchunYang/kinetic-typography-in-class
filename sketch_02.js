let font;
let points=[];

function preload(){
  // font=loadFont("Jersey25-Regular.ttf");
  font=loadFont("Anta-Regular.ttf");
  
}

function setup() {
  createCanvas(400, 400);
    points=font.textToPoints("PCC",50,300,100,{ sampleFactor:  0.5 });
    print(points);

}

function draw() {
  background(220);
  textFont(font);
  textSize(50);
  fill('red')
//   text('I am Normal', 10, 100);

  for(let i=0; i<points.length;i++){
    ellipse(points[i].x,points[i].y,5,5)
  }


}

