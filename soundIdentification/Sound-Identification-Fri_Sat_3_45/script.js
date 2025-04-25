let startBtn = document.querySelector(".start_btn")
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json', modelReady);


function modelReady() {
    console.log("model is readyy")
}

function startClassifier() {
    classifier.classify(gotResults)
}

function gotResults(err, res) {
    if(err) {
        console.error(err);
    } else {
        console.log(res)
        // Random number generating
        let randomNumber_r = Math.trunc(Math.random() * 255) + 1
        let randomNumber_g = Math.trunc(Math.random() * 255) + 1
        let randomNumber_b = Math.trunc(Math.random() * 255) + 1


        // DOM manipulation
        let result_label = document.getElementById("result_level")
        let result_confidence = document.getElementById("result_confidence")

        result_label.innerText = `I can hear - ${res[0].label}`
        result_confidence.innerText = `Accuracy - ${Math.trunc(res[0].confidence * 100).toFixed(2)}%`

        result_label.style.color = `rgb(${randomNumber_r}, ${randomNumber_g}, ${randomNumber_b})`
        result_confidence.style.color = `rgb(${randomNumber_r}, ${randomNumber_g}, ${randomNumber_b})`

        // Accessing the characters
        let img1 = document.getElementById("alien1")
        let img2 = document.getElementById("alien2")
        let img3 = document.getElementById("alien3")
        let img4 = document.getElementById("alien4")

        if(res[0].label == "Clap") {
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if(res[0].label == "Snapping") {
            img2.src = "aliens-02.gif"
            img1.src = "aliens-01.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if(res[0].label == "Bell") {
            img3.src = "aliens-03.gif"
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img4.src = "aliens-04.png"
        }
        else {
            img4.src = "aliens-04.gif"
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
        }
    }



}

startBtn.addEventListener("click", () => {
    startClassifier()
})
