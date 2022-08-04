import { stringToHTML,closeFaqonClick,dropdownForMobileNavItem,hamburgerMenu,changePriceAccordingToLocation, hideNavbarOnScroll, pageFunctionalities } from "./toolkit.js";
gsap.registerPlugin(ScrollTrigger);
  
  gsap.from(".hero-text", {
    scrollTrigger:{
      trigger: ".hero-text-con",
    },  y  :100,
      opacity:.2
      
  });
  gsap.from(".hero_desc", {
    scrollTrigger:{
      trigger: ".hero_section",
      start: 'top top'
    },    x:-100,
      opacity:.2
      
  });
  gsap.from(".student-group", {
    scrollTrigger:{
      trigger: ".hero_section",
      start: 'top top'
    }, // start the animation when ".box" enters the viewport (once)
      x:100,
      opacity:.2
      
  });
  gsap.from(".teacher-wrapper", {
    scrollTrigger:{
      trigger: ".teacher-wrapper",
    markers:true,
  }, // start the animation when ".box" enters the viewport (once)
      y:100,
      stagger:0.02,
      opacity:.2
  });


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

