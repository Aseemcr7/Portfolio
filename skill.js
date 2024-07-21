function showvalue(event){
    
    console.log(event.target)
}

//contact js
function toogle(){
    var tooglebar=document.querySelector(".toogle-bar")
    var disstyl=window.getComputedStyle(tooglebar).display
     if(disstyl== "none"){
        tooglebar.style.display="inline-block"
     }
     else{
        tooglebar.style.display="none"
     }
}
function show(){
   var popUp=document.querySelector(".popup")
   var popOverlay=document.querySelector(".popoverlay")
        popUp.style.display="block"
        popOverlay.style.display="inline-block"
}

function hide(){
   var popUp=document.querySelector(".popup")
   var popOverlay=document.querySelector(".popoverlay")
        popUp.style.display="none"
        popOverlay.style.display="none"
}