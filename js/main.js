//  Mobile nav menu and bars

const hamMenu = document.getElementById('bars');
hamMenu.addEventListener('click', changeHamburger);

function changeHamburger() { 
  hamMenu.classList.toggle('change');
}

const links = document.getElementById("nav-bar");
//const logo = document.querySelector('#logo');

const navBar = document.getElementById('nav-wrapper');


// Mobile view left-col and nav-bar visibility
 hamMenu.addEventListener('click', navToggle);

 function navToggle() {  
  if (links.style.display === "block") 
  {
    links.style.display = "none";
  } 
  else
  {
    links.style.display = "block";
  }  
}

 window.addEventListener('resize', navStyleChangeOnResize);

 
function navStyleChangeOnResize(){
  if (window.innerWidth > 768 && links.style.display === "none"){
    links.style.display = "flex";
  }
  if (window.innerWidth < 768) 
    {
      links.style.display = "none";
    }
}


 links.addEventListener('click', closeNavChangeBurger);

 function closeNavChangeBurger() {
   if(window.innerWidth < 679){
  links.style.display = 'none';
  changeHamburger();
   }
}

logo.addEventListener('click', closeNav);

function closeNav() {
  if(window.innerWidth < 679){
  hamMenu.classList.remove('change');
  links.style.display = 'none';
  }
}
