let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("my-img");
  let dots = document.getElementsByClassName("dot");
  let item = document.getElementsByClassName("item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < item.length; i++) {
    item[i].className = item[i].className.replace(" actived", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  item[slideIndex-1].className += " actived";
  setTimeout(showSlides, 10000); 
}
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

function show() {
    var popUp = document.querySelector('.popup');
    var popOverlay = document.querySelector('.popoverlay');
    popUp.style.display = 'block';
    popOverlay.style.display = 'block';
}

function hide() {
    var popUp = document.querySelector('.popup');
    var popOverlay = document.querySelector('.popoverlay');
    popUp.style.display = 'none';
    popOverlay.style.display = 'none';
}

function detail(button) {
  var item = button.closest('.item');
  var detail = item.querySelector('.detail');
  var introduce = item.querySelector('.introduce');
  detail.style.display = 'flex';
  introduce.style.display = 'none';
}

function intro(button) {
  var item = button.closest('.item');
  var detail = item.querySelector('.detail');
  var introduce = item.querySelector('.introduce');
  detail.style.display = 'none';
  introduce.style.display = 'flex';
}