let userName,loverName="";




document.querySelector(".generate").addEventListener("click",function(){
     userName = document.querySelectorAll(".nameInput")[0].value;
     loverName = document.querySelectorAll(".nameInput")[1].value;

    let generatedValue = Math.floor(Math.random()*101);

    document.querySelector("#display").innerHTML = `${userName} and ${loverName}, your love score is:`;
    document.querySelector(".generatedValue").innerHTML = generatedValue+"%";
    console.log(generatedValue);
})