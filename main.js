function preload()
{}
function setup()
{
    Canvas = createCanvas(400,400);
    Canvas.position(200,350);
    Video = createCapture(VIDEO);
    Video.hide();
    Ml5 = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wgTi8Nmaf/model.json",ModelL);
}
function ModelL()
{
    console.log("Model Loaded");
}
function draw()
{
    image(Video,0,0,400,400);
    Ml5.classify(Video,result);  
}
function result(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("member").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}