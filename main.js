noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;


function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
    fill('#29e32c');
    stroke('#29e32c');
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log('poseNet is initialized');
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + " nose y = " + noseY );
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wristx = " + leftWristX + "right wristx = " + rightWristX + "diferences" + difference)
    }
}