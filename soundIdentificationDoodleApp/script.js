let canvas;
let speech = window.webkitSpeechRecognition;
let recognition = new speech();
let text = document.getElementById("text");


function start() {
    text.innerHTML = "System is listening..., Please say which shape you would like";
    recognition.start();
}

function setup() {
    canvas = createCanvas(900, 350);
    canvas.background("#fadbd8");
    let newCanvasX = (windowWidth - width) / 2;
    let newCanvasY = (windowHeight - height) / 2;
    canvas.position(newCanvasX, newCanvasY);
}


recognition.onresult = function(event) {
    console.log(event)
    let shape = event.results[0][0].transcript.toLowerCase().replaceAll(".", " ", ",", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", ";", ":", "'", '"', "<", ">", "/", "?");
    if(shape == "circle") {
        text.innerHTML = `${shape} is drawn`;
        drawCircle();
    }

    if(shape == "triangle") {
        text.innerHTML = `${shape} is drawn`;
        drawTriangle();
    }

    else {
        text.innerHTML = `${shape} is not available`;
        speechSynthesis.speak(new SpeechSynthesisUtterance(`${shape} is not available`));
    }
}

function drawCircle() {
    stroke("darkblue");
    strokeWeight(5);
    fill("lightblue")
    ellipse(400, 100, 150)
}

function drawTriangle() {
    stroke("darkblue");
    strokeWeight(5);
    fill("lightblue")
    triangle(200, 300, 350, 200, 450, 350);
}


function clearCanvas() {
    canvas.clear()
    canvas.background("#fadbd8");
    text.innerHTML = "";
}
