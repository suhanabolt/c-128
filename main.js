song1=""
song2=""
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0
scoreRightWrist=0
scoreLeftWrist=0

function preload() 
{
    song1= loadSound("LejaRe.mp3")
    song2 = loadSound("Saanson.mp3")
}
function setup() {
    canvas=createCanvas(550,435)
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}
function modelLoaded(){
    console.log("poseNet Is Initialized")
}
function draw()
{
image(video,0,0,550,435)
}
function gotPoses(results) 
{
    if (results.length > 0)
     {
        console.log(results)
        scoreRighttWrist = results[0].pose.keypoints[10].score
        scoreLeftWrist = results[0].pose.keypoints[9].score
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist)

        leftWristX=results[0].pose.leftWrist.x
        leftWristY=results[0].pose.leftWrist.y
        console.log("leftWristX= "+leftWristX+"leftWristY="+leftWristY)
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("rightWristX= "+rightWristX+"rightWristY="+rightWristY)
    }
}