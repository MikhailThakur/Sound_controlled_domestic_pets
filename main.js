function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Rb5ngGHaU/model.json",{probabilityThreshold:0.7},modelready);

}
function modelready(){
    classifier.classify(gotresult);
}
var dog=0;
var cat=0;
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML="detected voice is of-"+results[0].label;
        img=document.getElementById("alien1");
        if(results[0].label=="barking"){
            img.src="dog.gif"
        }
        else if(results[0].label=="meowing")
        {img.src="cat-mute.gif"}
    }
}