export function stringToHTML(str) {
  const parent = document.createElement('div');
  parent.innerHTML = str;
  return parent.firstChild;
};

export function hideNavbarOnScroll() {
  console.log('heelo0');
  let prevScrollpos = window.pageYOffset;
  const navbar = document.querySelector(".nav_bar");
  window.onscroll = toggleNavbar;
  navbar.classList.add('onscroll');

  function toggleNavbar() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos == 0) {
      navbar.classList.remove('onscroll');
    }
    else {
      navbar.classList.add('onscroll');
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = "-85px";
      }
      prevScrollpos = currentScrollPos;
    }

  }
  toggleNavbar();

}

export function hamburgerMenu() {
  document.querySelector('.hamburger').addEventListener('click', function () {
    this.classList.toggle('open');
    animateIt();
  });
  const tl = gsap.timeline();
  tl.to('.mobile-bg', 0.5, { width: '250vw', height: '250vw', visibility: 'visible', ease: Power1.easeIn, opacity: 1, stagger: 0.2, })
  tl.reverse(-1);
  tl.reversed(true);
  function animateIt() {
    tl.reversed(!tl.reversed());
    document.querySelector('.mobile_nav_bar').classList.toggle('hide');
  }
}

export function closeFaqonClick() {
  const faqs = document.getElementsByClassName('faq-item');
  Array.from(faqs).forEach((ele) => {
    const faqCheckbox = ele.querySelector('.faq-item-checkbox');
    ele.addEventListener('click', () => {
      closeAllFaq();

      faqCheckbox.checked = faqCheckbox.checked ? false : true;
    })
  });
  function closeAllFaq() {
    Array.from(faqs).forEach(ele => {
      const faqCheckbox = ele.querySelector('.faq-item-checkbox');
      faqCheckbox.checked = false;
    })
  }
}
export function changePriceAccordingToLocation(callback = ()=>{}){
getLocation();
const APIKey =' AIzaSyAk2CZhV-ZHjNKpog3YwQjOYUWTglXsg40';
function getLocation() {
  if (!navigator.geolocation) {
    console.log('Geolocation API not supported by this browser.');
  } else {
    console.log('Checking location...');
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
function success(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const currency = (response.countryName == 'India') ? 'inr' : 'usd';
      sessionStorage.setItem('currency',currency);
    })
}
function error(err){
console.error(err);
}

}
export function dropdownForMobileNavItem(){
  const dropdowns = document.getElementsByClassName('mobile-dropdowns');
Array.from(dropdowns).forEach((ele)=>{
  ele.addEventListener('click',()=>{
    console.log('button clicked');
    ele.classList.toggle('active');
  })
})
}
export function pageFunctionalities(){
closeFaqonClick();
dropdownForMobileNavItem();
hideNavbarOnScroll();
changePriceAccordingToLocation();
hamburgerMenu();
}
