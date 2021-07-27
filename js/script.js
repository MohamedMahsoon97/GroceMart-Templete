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


//-----------  start animation in about section  -----------//
window.onscroll = function() {
    const myNavbar = document.getElementById("nav");
    const myheaderSlider = document.querySelector("div.headerSlider");
    const aboutContent = document.getElementById("about-content");
    const parallexContent = document.getElementById("parallax-content");
    const myProdTitle1 = document.getElementById("title-pro-1")
    const myProdTitle2 = document.getElementById("title-pro-2")
    const myTestTitle1 = document.getElementById("title-test-1")
    const myTestTitle2 = document.getElementById("title-test-2")
    const myProductsCards = document.getElementById("products-card")
    const mySaleImg = document.querySelector("div.sale");
    const toTopPage = document.getElementById("to-top");
    if (true) {
        if (window.pageYOffset >= 200) {
            myNavbar.classList.add("nav-fixed");
            myheaderSlider.style.marginTop = "100px"
        } else {
            myNavbar.classList.remove("nav-fixed");
            myheaderSlider.style.marginTop = "0px"
        }
    }
    if(window.pageYOffset >= 200) {
        myNavbar.classList.add("nav-fixed");
        myheaderSlider.style.marginTop = "100px"
    };
    if(window.pageYOffset >= 350) {
        aboutContent.classList.add("make-animation-about")
    };
    if(window.pageYOffset >= 850) {
        parallexContent.classList.add("parallax-animation");
    }
    if(window.pageYOffset >= 1200) {
        myProdTitle1.classList.add("products-animation-1");
        myProdTitle2.classList.add("products-animation-2");
    }
    if(window.pageYOffset >= 1400) {
        myProductsCards.style.opacity = "1";
    }
    if(window.pageYOffset >= 2000) {
        myTestTitle1.classList.add("products-animation-1");
        myTestTitle2.classList.add("products-animation-2");
    }
    if(window.pageYOffset >= 2730) {
        mySaleImg.childNodes[1].style.animationName = "sale-img1";
        mySaleImg.childNodes[1].style.opacity = 1;
        mySaleImg.childNodes[3].style.animationName = "sale-img2";
        mySaleImg.childNodes[3].style.opacity = 1;
    }
    if(true){
        if(window.pageYOffset >= 850) {
            toTopPage.classList.add("bt-to-top")
        }else{
            toTopPage.classList.remove("bt-to-top")
        }
    }
}
//-----------  end animation in about section  ------------//

//---------- start animation label input in footer -----------//
const inpFormFooter = document.getElementById("inp-form");
const labelFormFooter = document.getElementById("label");
inpFormFooter.addEventListener('focus' , function() {
    labelFormFooter.style.top = "150px";
    labelFormFooter.style.fontSize = "14px";
    labelFormFooter.style.color = "#7fd02c";
})
inpFormFooter.addEventListener('blur' , function() {
    labelFormFooter.style.top = "170px"
    labelFormFooter.style.fontSize = "17px";
    labelFormFooter.style.color = "#000";
})
//--------- end animation label input in footer ------------//

//--------- Start accordion (Common-Questions-FAQ) ---------//
const Questions = document.querySelectorAll(".Question");
const spanClick = document.querySelectorAll(".ask-icon");
Questions.forEach ( FAQ => {
    FAQ.addEventListener('click' , () => {
        FAQ.children[1].classList.toggle("active");
        spanClick.classList.add("span-click");
    })
})
//--------- End accordion (Common-Questions-FAQ) ---------//

//-----------  Start to Top ------------//
// const toTopPage = document.getElementById("to-top");
// toTopPage.addEventListener('click' , function() {
//     window.pageYOffset = "0";
// })
//-----------  End to Top ------------//