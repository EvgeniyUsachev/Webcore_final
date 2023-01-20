'use strict'



const phoneBtn = document.querySelectorAll('.menu-button--phone'),
      modalWindowCall = document.getElementById('overlay-call'),
      closeBtn = document.querySelectorAll('.menu-button--crossed'),
      messageBtn = document.querySelectorAll('.menu-button--message'),
      main = document.getElementById ('main'),
      modalWindowMsg = document.getElementById('overlay-message'),
      body = document.getElementById('body');

      //for call-modal

        phoneBtn.forEach(item => {
            item.addEventListener("click", function () {
                modalWindowCall.classList.add('overlay--open');
                body.classList.add('body--fixed');
                // modalWindowMsg.style.display = 'none';
            });
        });

        closeBtn.forEach(item => {
            item.addEventListener("click", function () {
                modalWindowCall.classList.remove('overlay--open');
                modalWindowMsg.classList.remove('overlay--open');
                body.classList.remove('body--fixed');
                // modalWindowMsg.style.display = 'block';
            });
        });

        modalWindowCall.addEventListener("click", function (e) {
            if (e.target == modalWindowCall ) {
                modalWindowCall.classList.remove('overlay--open');
                body.classList.remove('body--fixed');
                // modalWindowMsg.style.display = 'block';
            }
        });

        //for message-modal

        messageBtn.forEach(item => {
            item.addEventListener("click", function () {
                modalWindowMsg.classList.add('overlay--open');
                body.classList.add('body--fixed');
            });
        });

        modalWindowMsg.addEventListener("click", function (e) {
            if (e.target == modalWindowMsg ) {
                modalWindowMsg.classList.remove('overlay--open');
                body.classList.remove('body--fixed');
            }
        });


        
     
      
    

