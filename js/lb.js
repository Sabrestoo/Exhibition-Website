const lb = document.querySelector('.lb');
let lb_open = document.querySelector('.lightbox-img-content');
let lb_img = document.querySelector('#img-1');
const close_lb = document.querySelector('.closer');
let lb_content = document.querySelector('.lb-content #img-1');

lb_open.addEventListener('click', openLb);

function openLb(e) {
    if (window.innerWidth > 860 && e.target.src != 'undefined') {        
        lb.style.display = 'block';
        lb_img.src = e.target.src;  
    }
}

lb_content.addEventListener('click', closeLb);

function closeLb(){
    lb.style.display = 'none';
}

