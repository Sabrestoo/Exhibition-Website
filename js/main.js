 let img_1 = document.querySelector('#img-1');
 let img_2 = document.getElementById('img-2');
 let img_3 = document.getElementById('img-3');
 let img_4 = document.getElementById('img-4');
 
 const lightbox = document.getElementById('lightbox');
 let previous = document.querySelector('.prev');
 let next = document.querySelector('.next');
 let close = document.querySelector('.close');


 img_1.addEventListener('click', openLightBox);
 img_1.addEventListener('click', function() {
    showCurrent(1)}, false);

 img_2.addEventListener('click', openLightBox);
 img_2.addEventListener('click', function() {
    showCurrent(2)}, false);

 img_3.addEventListener('click', openLightBox);
 img_3.addEventListener('click', function() {
    showCurrent(3)}, false);

 img_4.addEventListener('click', openLightBox);
 img_4.addEventListener('click', function() {
    showCurrent(4)}, false);
 
 close.addEventListener('click', closeLightBox);

 previous.addEventListener('click', function() { 
     showNext(-1)}, false);

 next.addEventListener('click', function() {
     showNext(1)});

    let imageIndex = 1;
    showImages(imageIndex);

 // Show/hide lightbox
 function openLightBox() {
    lightbox.style.display = 'block';
 }

 function closeLightBox() {
    lightbox.style.display = 'none';
 }

 //Controls
 function showNext(n) {
     showImages(imageIndex += n);
 }

 function showCurrent(n) {
     showImages(imageIndex = n);
 }

 function showImages(n) {
    console.log(n);
    let i;
    let images = document.getElementsByClassName('images');
    //let dots = document.getElementsByClassName('dots');
   
    if (n > images.length) {
        imageIndex = 1;
    }
    if (n < 1) {
        imageIndex = images.length;
    }
    for (i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
    // for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" active", ""); }
    images[imageIndex-1].style.display = "block";
      //dots[imageIndex-1].className += " active";
      
    }
    
 
 