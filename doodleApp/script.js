let doodleNet;
let canvas;


function setup() {
    canvas = createCanvas(500, 500);
    canvas.center()
    background(255);
    doodleNet = ml5.imageClassifier("DoodleNet", modelLoaded);
}

function modelLoaded() {
    console.log("Ready to cook!")
}

function draw() {
    stroke(document.getElementById("colorSelector").value)
    strokeWeight(document.getElementById("strokeSelector").value)


    if(mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}


function clearCanvas() {
    background(255);
    document.getElementById("result").innerHTML = "Prediction...";
}

function predictDoodle() {
    doodleNet.classify(canvas, gotResult);
}

function gotResult(res) {
    document.getElementById("result").innerHTML = "Prediction: " + res[0].label + "<br>Confidence: " + (res[0].confidence * 100).toFixed(2) + "%";
}
