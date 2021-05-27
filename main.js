NoseX=0;
NoseY=0;
Difference=0;
LeftWristX=0;
RightWristX=0;

function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(550,500);
    canvas.position(650,100);
    
    posenet= ml5.poseNet(video,ModelLoaded);
    posenet.on('pose',gotPoses);
    }
    function ModelLoaded(){
     console.log("Posenet is Loaded");
    }
    
    function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        NoseX= results[0].pose.nose.x;
    NoseY= results[0].pose.nose.y;
    LeftWristX=results[0].pose.leftWrist.x;
    RightWristX=results[0].pose.rightWrist.x;
    Difference=LeftWristX-RightWristX;
    }
    }
    function draw() {
        background('#DC143C');
        fill('#FFC0CB');
        stroke(	'#FFC0CB');
        textSize(Difference);
        text("Tuhin",50,400);
    }