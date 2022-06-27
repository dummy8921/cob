


Webcam.set(
    {
width:349,
height:348,
image_format:"jpeg",
jpeg_quality:90
   }
);
camera=document.getElementById("camera");
Webcam.attach("#camera");
function capture()
{
Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_uri+'"/>';
});
}
console.log('ml5version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/74iKTyjHQ/model.json', modelLoaded);
function modelLoaded()
{console.log("model is loaded");}
function on()

{
    glob=document.getElementById("capturedimage");
    classifier.classify(glob,gotresult);

}
function gotresult(error,results)
{if (error){
    console.error(error);
}else{
console.log(results);
document.getElementById("Accuracy").innerHTML=results[0].confidence;
document.getElementById("Object").innerHTML=results[0].label;
}
}














