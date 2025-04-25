let camera = document.getElementById("camera")
let result = document.getElementById("result")
let speechRecognition = window.webkitSpeechRecognition;
let startBtn = document.getElementById("startBtn")
let recognition = new speechRecognition();


startBtn.addEventListener("click", () => {
    let textBox = document.getElementById("textBox")
    textBox.innerHTML = ""
    recognition.start()
})

recognition.onresult = function (event) {
    console.log(event)
    let content = event.results[0][0].transcript
    content = content.toLowerCase()
    content = content.replaceAll(".", "")
    console.log(content)


    if(content == "my selfie please" || content == "take a snapshot") {
        console.log("Taking your selfie in 5 sec...")
        speak()
    }
}


function speak() {
    let synth = window.speechSynthesis
    let say = "Taking your selfie in 5 sec..."
    let utterThis = new SpeechSynthesisUtterance(say)
    synth.speak(utterThis)
    Webcam.attach(camera)
    setTimeout(() => {
        take_selfie()
        save()
    }, 5000);
}


Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
})


function take_selfie() {
    Webcam.snap(function(data_uri){
        result.innerHTML='<img id="image" src="'+data_uri+'" />';
    })
}

function save() {
    let imgUrl = document.getElementById("image").src;
    let link = document.getElementById("link")
    link.href = imgUrl
    link.click()
}
