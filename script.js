var minClick1 = document.querySelector("#p1")
var minClick2 = document.querySelector("#p2")
var minClick3 = document.querySelector("#p3")
var minClick4 = document.querySelector("#p4")
var mainPizza = document.querySelector("#MainImg")
var text = document.querySelector("#pizza-name-2")
var indi = document.querySelector("#indi-sign")


minClick1.addEventListener("click",function(){
    mainPizza.style.left = "74vw";
    text.style.bottom = "0vh"
    minClick1.style.rotate = "0deg"
    minClick1.style.scale = "1.2"
    minClick2.style.scale = "1"
    minClick3.style.scale = "1"
    minClick4.style.scale = "1"
    indi.style.left = "63px"
    setTimeout(function(){
        minClick1.style.rotate = "0deg"  
    }, 1000);
})
minClick2.addEventListener("click",function(){
    mainPizza.style.left = "25vw";
    text.style.bottom = "15vh"
    minClick2.style.rotate = "0deg"
    minClick2.style.scale = "1.2"
    minClick1.style.scale = "1"
    minClick3.style.scale = "1"
    minClick4.style.scale = "1"
    indi.style.left = "175px"
    setTimeout(function(){
        minClick2.style.rotate = "0deg"  
    }, 1000);
})
minClick3.addEventListener("click",function(){
    mainPizza.style.left = "-25vw";
    text.style.bottom = "30vh"
    minClick3.style.rotate = "0deg"
    minClick3.style.scale = "1.2"
    minClick1.style.scale = "1"
    minClick2.style.scale = "1"
    minClick4.style.scale = "1"
    indi.style.left = "290px"
    setTimeout(function(){
        minClick3.style.rotate = "0deg"  
    }, 1000);
})
minClick4.addEventListener("click",function(){
    mainPizza.style.left = "-74vw";
    text.style.bottom = "45vh"
    minClick4.style.rotate = "0deg"
    minClick4.style.scale = "1.2"
    minClick2.style.scale = "1"
    minClick3.style.scale = "1"
    minClick1.style.scale = "1"
    indi.style.left = "405px"
    setTimeout(function(){
        minClick4.style.rotate = "0deg"  
    }, 1000);
})