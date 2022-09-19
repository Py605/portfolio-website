// for Navbar..
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



// ---Project Section---
let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}

// --- Contact form----

function validateForm(){

    //reseting the whole form...
    document.querySelector(".input-form").reset();

    // showing the success message..
    document.querySelector(".success-message").innerHTML += "<p id='success'></p><i class='fa-solid fa-xmark'></i>";

    document.querySelector('#success').innerText= "Your message was sent successfully. Thanks!😊";


    var close_btn = document.querySelector('.fa-xmark');
    // now, removing whole success-message's content while clicking on close-button...
    close_btn.addEventListener('click',function(){
        var elem = document.getElementById("success");
        elem.remove();
        var elem2 = document.querySelector(".fa-xmark");
        elem2.remove();
    });
}
