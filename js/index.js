import { stringToHTML,closeFaqonClick,dropdownForMobileNavItem,hamburgerMenu,changePriceAccordingToLocation, hideNavbarOnScroll, pageFunctionalities } from "./toolkit.js";
gsap.registerPlugin(ScrollTrigger);


fromBottomAnimation(".hero_desc",".hero_desc")
fromBottomAnimation(".hero-text",".hero-text")
fromBottomAnimation(".student-group",".student-group")
 staggerAnimation('.teacher-wrapper',".teacher-wrapper")
 fromBottomAnimation(".collab_companies_section",".collab_companies_section");
 fromBottomAnimation(".short_desc_section_text",".short_desc_section_text");
 staggerAnimation(".feature-card",".feature-container ")
 fromBottomAnimation(".from-bottom-animation",".from-bottom-animation");
staggerAnimation('.course-card','.courses-container');
staggerAnimation('.working-companies-wrapper>div','.working-companies-wrapper>div');
staggerAnimation('.product-card','.product-card')
staggerAnimation('.stagger-animation ','.stagger-animation ')
 function staggerAnimation(target,trigger){
  gsap.from(target, {
    scrollTrigger:{
      trigger: trigger,
  }, // start the animation when ".box" enters the viewport (once)
      y:100,
      stagger:0.02,
      opacity:.2
  });
 }
 function fromBottomAnimation(target,trigger){
  gsap.from(target, {
    scrollTrigger:{
      trigger: trigger,
  }, // start the animation when ".box" enters the viewport (once)
      y:100,
      opacity:.2
  });
 }

  hideNavbarOnScroll();
  hamburgerMenu();
/* 
gsap.to(".company-img", {
  duration: 5,
  ease: "none",
  x: "-1000", //move each box 500px to right
  repeat: -1
});
 */



document.addEventListener( 'DOMContentLoaded', function () {
  var splide = new Splide( '#splide-categories', {
    height   : '10rem',
    focus    : 'center',
    autoWidth: true,
    pagination: false

  } );
  
  splide.mount();
} );


document.addEventListener( 'DOMContentLoaded', function () {
  var splide = new Splide( '.splide-hof', {
    height   : '10rem',
    focus    : 'center',
    autoWidth: true,
    pagination: false

  } );
  
  splide.mount();
} );
