let userName,loverName="";

document.querySelector(".nameInput").addEventListener("onChange",function(e){
console.log(e);
});

document.querySelector(".generate").addEventListener("click",function(){
    console.log("clicked");

    let generatedValue = Math.floor(Math.random()*101);

    document.querySelector(".generatedValue").innerHTML = generatedValue+"%";
    document.querySelector(".generatedValue").innerHTML = generatedValue+"%";
    console.log(generatedValue);
})