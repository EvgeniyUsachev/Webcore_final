'use strict';
window.addEventListener('DOMContentLoaded', () => {
const showTypesButton = document.getElementsByClassName("show-more__button--types");
const showAllTypesText = document.getElementById("showTypesText"); 
const showMoreArrow = document.querySelectorAll(".show-more__arrow"); 
let types = document.querySelectorAll(".types__item--hidden-768");



let i;

for (i = 0; i < showTypesButton.length; i++) {
    showTypesButton[i].addEventListener("click", function() {
      showMoreArrow[2].classList.toggle("show-more__arrow--up");
     
      if (showAllTypesText.innerHTML === "Показать все") {
        showAllTypesText.innerHTML = "Скрыть";
      } else {  
        showAllTypesText.innerHTML = "Показать все";
      }
     
      if (window.innerWidth > 1015)  {
        if (types[2].style.display  === "flex", 
        types[3].style.display  === "flex" ,
        types[4].style.display  === "flex",
        types[1].style.display  === "flex",
        types[5].style.display  === "flex") {
          types[2].style.display  = "none", 
          types[3].style.display  = "none",
          types[4].style.display  = "none",
          types[1].style.display  = "none",
          types[5].style.display  = "none";
        } else {
          types[2].style.display = "flex", 
          types[3].style.display = "flex",
          types[4].style.display = "flex",
          types[1].style.display  = "flex",
          types[5].style.display  = "flex";
        }  
        
      } else {
        types.forEach(item => {
          if (item.style.display === "flex") {
            item.style.display = "none";
          } else {
            item.style.display = "flex";
          }
        });
      }
      
      
  
    });
  }
 
  


});

function sum (a, b) {
  return a + b;
}

console.log(sum(5,2));