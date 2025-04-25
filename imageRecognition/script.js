camera = document.getElementById("camera");
result = document.getElementById("result");
Webcam.attach( 'camera' );

  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        result.innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);// the teacheable machine model url

// When the model is loaded
function modelLoaded() {
    console.log('Model Loaded!');
}

function check(){
    img = document.getElementById('selfie_image');
    classifier.classify(img, gotResult);
}


// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.log(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    result_object_name = document.getElementById("result_object_name");
    result_object_accuracy = document.getElementById("result_object_accuracy");
    result_object_name.innerText = results[0].label;
    result_object_accuracy.innerText = results[0].confidence.toFixed(3);
  }
}
