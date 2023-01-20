import '../scss/style.scss';
import './types.js';
import './modal.js';
// import '..scss/base/normalize.css';


// import '../scss/base/normalize.css';
// import modal.js from './src/js/modal.js';

console.log('Works!')

'use strict';
window.addEventListener('DOMContentLoaded', () => {
const showDescr = document.getElementsByClassName("show-more__button--descr");
const showMoreDescr = document.getElementById("showMoreDescr"); 
const showMoreArrow = document.querySelectorAll(".show-more__arrow"); 
let brands = document.querySelectorAll(".brands__item--hidden-768");

let i;




for (i = 0; i < showDescr.length; i++) {
  showDescr[i].addEventListener("click", function() {
    this.classList.toggle("active");
    showMoreArrow[0].classList.toggle("show-more__arrow--up");
    let content = this.nextElementSibling;

    if (showMoreDescr.innerHTML === "Читать далее") {
      showMoreDescr.innerHTML = "Скрыть";
    } else {
      showMoreDescr.innerHTML = "Читать далее";
    }
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function open(array) {
  if (window.innerWidth > 1015) {
    array[0].classList.remove("brands__item--hidden-768"); 
    array[1].classList.remove("brands__item--hidden-768"); 
    return array;
  }
}
const showBrands = document.getElementsByClassName("show-more__button--brands");
const showBrandsText = document.getElementById('showBrandsText');

for (i = 0; i < showBrands.length; i++) {
  showBrands[i].addEventListener("click", function() {
    this.classList.toggle("active");
    showMoreArrow[1].classList.toggle("show-more__arrow--up");
   
    if (showBrandsText.innerHTML === "Показать все") {
      showBrandsText.innerHTML = "Скрыть";
    } else {  
      showBrandsText.innerHTML = "Показать все";
    }
   
    if (window.innerWidth > 1015)  {
      if (brands[2].style.display  === "flex", 
      brands[3].style.display  === "flex" ,
      brands[4].style.display  === "flex") {
        brands[2].style.display  = "none", 
        brands[3].style.display  = "none",
        brands[4].style.display  = "none";
      } else {
        brands[2].style.display = "flex", 
        brands[3].style.display = "flex",
        brands[4].style.display = "flex";
      }  
      
    } else {
      brands.forEach(item => {
        if (item.style.display === "flex") {
          item.style.display = "none";
        } else {
          item.style.display = "flex";
        }
      });
    }
    
    

  });
}




const menu = document.querySelector('.burger-menu'),
      burgerBtn = document.querySelectorAll('.burger'),
      burgerBtnOpen = document.getElementById('burgerOpen'),
      burgerBtnClose = document.getElementById('burgerClose'),
      background = document.querySelector('.burger-overlay'),
      body = document.getElementById ('body'),
      main = document.getElementById ('main');

      burgerBtnClose.addEventListener('click', () => {
        body.classList.remove('body--fixed');
      });

      burgerBtnOpen.addEventListener('click', () => {
        body.classList.add('body--fixed');
      });



      burgerBtn.forEach(item => {
        item.addEventListener('click', () => {
          menu.classList.toggle('burger-menu--active');
          background.classList.toggle('burger-overlay--active');
          
        });
       
      });
      
      

      background.addEventListener("click", function (e) {
        if (e.target == background ) {
          background.classList.remove('burger-overlay--active');
          menu.classList.remove('burger-menu--active');
          body.classList.remove('body--fixed');
        }   
      });
        
      

      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        spaceBetween: 16,
        breakpoints: {
          768: {
            enabled: false,
            width: 224, 
            spaceBetween: 24,
          },
        },
        width: 240, 
        
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      
      
      });

      

     

});
