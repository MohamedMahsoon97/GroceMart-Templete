//------- start search-model -------//
const mySearchBtn =  document.getElementById("search-btn");
const mySearchModel =  document.getElementById("search-model");

mySearchBtn.addEventListener('click' , function() {
    if (mySearchBtn.classList.contains('close-search-model')){
        mySearchModel.style.transform = "scale(0)";
        mySearchBtn.setAttribute('class' , 'fa fa-search');
    } else {
        mySearchModel.style.transform = "scale(1)";
        mySearchBtn.setAttribute('class' , 'far fa-times-circle');
        mySearchBtn.classList.add('close-search-model');
    }
});
//-------- end search-model --------//

//-------- start our contact model ---------//
const myBars = document.getElementById("bars");
const myOurContact = document.getElementById("our-contact");
const hideContact = document.getElementById("hide-contact");

myBars.addEventListener('click' , function() {
    myOurContact.style.transform = "translateX(0)";
    hideContact.addEventListener('click' , function() {
        myOurContact.style.transform = "translateX(102%)";
    });
});
//-------- end our contact model ---------//


//-------- start show/hide navbar collapse ---------//
const navbarCollapse = document.getElementById("navbarScroll");
const navbarToggler = document.querySelector(".navbar-toggler");

let elements = navbarToggler.children.length
navbarToggler.addEventListener('click' , function() {
    if (elements > 1) {
        navbarToggler.children[0].classList.toggle("rotate1");
        navbarToggler.children[1].classList.toggle("toggle-height");
        navbarToggler.children[2].classList.toggle("rotate2");
    }
});
//-------- end show/hide navbar collapse ---------//


//--------  start increment and decrement counter  --------//
const increment = document.getElementById("up")
const decrement = document.getElementById("down")
const counterValue = document.getElementById("count")

increment.onclick = function() {
    counterValue.value = parseInt(counterValue.value) + 1;
}
decrement.onclick = function() {
    counterValue.value = parseInt(counterValue.value) - 1;
}

//--------  end increment and decrement counter  --------//