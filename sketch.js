function preload(){

}

function setup() {
  createCanvas(windowWidth, windowHeight);
   angleMode(DEGREES);


}

function draw() {

  /*push();


    var x = 0;
    var y = 0;
    var r = 0;
    var s = 0;

    noFill();
    strokeWeight(1);
    stroke("red");

    translate(frameCount*4*random(), y);
    for (var y = 0; y < windowHeight; y += 20 ) {
          var s = random() * 2;
          var x = random() * 2;
          var r = random() * 4;

          line(x,y,r,s)
    }

    pop();*/

    push();

      var x = 0;
      var y = 0;
      var r = 0;
      var s = 0;

      noFill();
      strokeWeight(1);
      stroke("red");

      translate(frameCount*4, 0);
      for (var y = 0; y < windowHeight; y += 2 ) {
            var s = random() * 4;
            var x = 0;
            var r = random() * 4;

            line(x,y,r,s)
      }

      pop();


}
