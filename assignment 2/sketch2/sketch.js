// BASED ON: 
// ml5.js: Pose Estimation with PoseNet
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/Courses/ml5-beginners-guide/7.1-posenet.html
// https://youtu.be/OIo-DIOkNVg

let capture;
let poseNet;
let pose;

function setup() {
    createCanvas(640, 480);

    //video properties
    capture = createCapture(VIDEO);
    capture.hide();
    poseNet = ml5.poseNet(capture, modelLoaded);
    poseNet.on('pose', gotPoses)

}

function gotPoses(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton
    }
}

function modelLoaded() {
    console.log('colours ready')
}


function draw() {
    translate(capture.width, 0);
    scale(-1, 1)
    image(capture, 0, 0);

    if (pose) {

        //nose location
        noStroke();
        fill(255);
        ellipse(pose.nose.x, pose.nose.y, 50)

        //if nose is on the left side 
        if (pose.nose.x > width * 0.75) {
            background(255, 0, 0);

            noStroke();
        }

        //if nose is at the top 
        else if (pose.nose.y < height * 0.25) {
            background(0, 255, 0);

            noStroke();
        }
        //if nose is at the bottom 
        else if (pose.nose.y > height * 0.75) {
            background(0, 0, 255);
            //     
            noStroke();
        }

        //if nose is on the right side 
        if (pose.nose.x < width * 0.25) {
            background(0);

            noStroke();
        }

        //circle properties 
        let diameter = 40;


    }
}
