let font;

function preload(){
  font=loadFont("Jersey_25/Jersey25-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  textFont(font);
  textSize(80);
  fill('red')
  text('I am Normal', 10, 100);


}

