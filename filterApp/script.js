let video;
let poseNet;
let eyeX = 0;
let eyeY = 0;

function modelload() {
    console.log("model ready")
}

function preload() {
    filter=loadImage('https://i.postimg.cc/Jn8cq1CN/Image20250128191922.png');
}

function setup() {
    let canvas=createCanvas(600, 400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelload);
    poseNet.on('pose',gotResult);
}

function gotResult(poses) {
    if(poses.length > 0) {
        eyeX = poses[0].pose.keypoints[1].position.x-150;
        eyeY = poses[0].pose.keypoints[1].position.y-100;
    }
}

function draw() {
    image (video, 0, 0)
    image (filter, eyeX, eyeY, 250, 180)
}

function snap() {
    save ('myfilter.png')
}
