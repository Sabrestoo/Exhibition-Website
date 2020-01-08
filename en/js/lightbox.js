 const L = document.querySelector('#LK');
 let lightbox = document.getElementById('LK-lightbox');
 let previous = document.querySelector('.prev');
 let next = document.querySelector('.next');
 let close = document.querySelector('.close');
 
 LK.addEventListener('click', function() { openLightBox(lightbox); }); 
 close.addEventListener('click', function() { closeLightBox(lightbox); });
 previous.addEventListener('click', function() { 
     showNext(-1)}, false);
 next.addEventListener('click', function() {
     showNext(1)});

    var imageIndex = 1;
    showImages(imageIndex);

 // Show/hide lightbox
 function openLightBox(name) {
    name.style.display = 'block';
 }

 function closeLightBox(name) {
    name.style.display = 'none';
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
    let images = document.querySelectorAll('#lk-images');  
    console.log(images); 
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

    