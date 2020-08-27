var firstPTag = document.querySelector("body p");
firstPTag.style.color = "gold";

var allH1Tags = document.querySelectorAll("body h1");
for(var index = 0; index < allH1Tags.length; index++){
    allH1Tags[index].style.color = "blue";


}

var header = document.getElementById("header");
header.style.fontSize = "100px";
header.style.color = "green"; 


var textContent = document.getElementsByClassName("textContent");
for(var index=0; index < textContent.length; index++){
textContent[index].style.color = "red";
}

var thirddiv = document.getElementById("thirddiv");
thirddiv.innerHTML += "<p> hope to see u soon </p>";

var h2 = document.getElementsByTagName("h2");
for(var index=0; index < h2.length; index++){
    h2[index].style.color = "gold";
}

let d=document.getElementById("thirddiv");
let d_nested = document.getElementById("header");
let throwawayNode = d.removeChild(d_nested);




function addTextNode(text){
    var newtext = document.createTextNode(text);
}


var sponge = document.getElementById("mystyle");


sponge.classList.add("mystyle")





