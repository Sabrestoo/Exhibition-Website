let banner = document.querySelector('#kunstler-artist-name');
const articles = document.querySelectorAll('.pos-check');
const dropdown = document.querySelector('.dropdown-content');

window.addEventListener('scroll', isInView);


function isInView() {
    articles.forEach(article => {
        let artPos = article.getBoundingClientRect();
        let screenWidth = document.body.clientWidth;
      
        if (screenWidth > 860 && artPos.top < (document.body.clientHeight - 375) && artPos.top > -100) {
            
            banner.innerText = 'FOTOGRAF*INNEN';
            banner.innerText = article.firstElementChild.innerText;
          
        }
    });
        
}
    

// function offset(el) {
//     var rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return {
//         top: rect.top + scrollTop,
//         left: rect.left + scrollLeft
//     }
// }