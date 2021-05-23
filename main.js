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
    }
    }
    function draw() {
        background('#DC143C');
    }