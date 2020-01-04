
let lightbox = document.querySelector('.lightbox');
let previous = document.querySelector('.prev');
let next = document.querySelector('.next');
let close = document.querySelector('.close');

//nk.addEventListener('click', openLightBox); 
close.addEventListener('click',closeLightBox);

previous.addEventListener('click', function() { 
    showNext(-1)}, false);
next.addEventListener('click', function() {
    showNext(1)});

   let imageIndex = 1;
   showImages(imageIndex);


function closeLightBox() {
   //lightbox.style.display = 'none';
   window.location.replace('../index.html#LK');

}

//Controls
function showNext(n) {
    showImages(imageIndex += n);
}

function showCurrent(n) {
    showImages(imageIndex = n);
}

function showImages(n) {   
   let i;
   let images = document.querySelectorAll('.images');   
   if (n > images.length) {
       imageIndex = 1;
   }
   if (n < 1) {
       imageIndex = images.length;
   }
   for (i = 0; i < images.length; i++) {
       images[i].style.display = 'none';
   }
   images[imageIndex-1].style.display = "block";   
   }

   