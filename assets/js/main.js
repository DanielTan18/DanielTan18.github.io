/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    });
};

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    });
};
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when click each nav link, remove show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills);
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
modalBtns = document.querySelectorAll('.services__button'),
modalCloses=document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop:true,
    grabCursor:true,
    spaceBetween: 48,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop-50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    //when scroll > 200 viewport height, add the scroll-header class to header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when scroll > 560vp height, add show scroll class
    if(this.scrollY >=560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//get current theme that interface has by validating dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//validate if user previously chose a topic
if(selectedTheme){
    //if validation fulfilled, ask what the issue was to know if activated/deactivated dark theme
    document.body.classList[selectedTheme ==='dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//activate/deactivate theme manually w button
themeButton.addEventListener('click',()=>{
    //add/remove dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //save theme and current icon user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin:'top',
    distance: '80px',
    duration:1000
})

/*scroll home*/
sr.reveal('.home__title',{})
sr.reveal('.home__social__buttons',{interval:400})
sr.reveal('.home__subtitle',{delay:400})
sr.reveal('.home__description',{delay:800})
sr.reveal('.home__img',{delay:400})
sr.reveal('.home_contactme__button',{delay:1200})
sr.reveal('.home__scroll',{delay:1600})

sr.reveal('.about__title',{})
sr.reveal('.about__img',{delay:400})
sr.reveal('.about__description',{delay:400})
sr.reveal('.about__info-title',{delay:800,interval:400})
sr.reveal('.about__info-name',{delay:800,interval:400})
sr.reveal('.about__buttons',{delay:2000})

sr.reveal('.skills__title',{})
sr.reveal('.skills__content',{delay:200,interval:200})

sr.reveal('.qualification__subject',{})
sr.reveal('.qualification__container',{delay:200})

sr.reveal('.services__title',{})
sr.reveal('.services__button',{delay:200,interval:400})

sr.reveal('.portfolio__subject',{})
sr.reveal('.portfolio__container',{delay:400})

sr.reveal('.project__bg',{})

// sr.reveal('.testimonial__subject',{})
// sr.reveal('.testimonial__container',{delay:400})

sr.reveal('.contact__subject',{})
sr.reveal('.contact__icon',{interval:400})
sr.reveal('.contact__information',{interval:400})
sr.reveal('.contact__content',{delay:1200,interval:200})
sr.reveal('.contact_sendmessage_button',{delay:2000})
