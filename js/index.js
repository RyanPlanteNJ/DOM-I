const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \n Is \n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const nav = document.querySelector('nav');
const one = document.createElement('a');
const two = document.createElement('a');


const navs = document.querySelectorAll('a');
for(let i = 0; i < navs.length; i++){
  navs[i].textContent = siteContent.nav["nav-item-" + (i+1)];
}

nav.appendChild(one);
one.innerHTML = "One";
one.href = "#";
nav.prepend(two);
two.innerHTML="Our Code";
two.href ="#";
const navscolor = document.querySelectorAll('a');
navscolor.forEach(nav => nav.style.color="green");
// console.log(navs);
// console.log(navs[0].textContent = siteContent["nav"]["nav-item-1"])
// navs[1].textContent = siteContent["nav"]["nav-item-2"];
// navs[2].textContent = siteContent["nav"]["nav-item-3"];
// navs[3].textContent = siteContent["nav"]["nav-item-4"];
// navs[4].textContent = siteContent["nav"]["nav-item-5"];
// navs[5].textContent = siteContent["nav"]["nav-item-6"];


// navs[6].textContent = "Our Code";

const cta = document.querySelector('.cta-text h1');
cta.textContent = siteContent["cta"]["h1"];


const btn = document.querySelector('.cta-text button');
btn.textContent =  siteContent["cta"]["button"];

const topcirc = document.querySelector('#cta-img');
topcirc.src = siteContent["cta"]["img-src"];

const topcontext = document.querySelectorAll('.top-content .text-content h4');
topcontext[0].textContent = siteContent["main-content"]["features-h4"];
topcontext[1].textContent = siteContent["main-content"]["about-h4"];


const topconp = document.querySelectorAll('.top-content .text-content p');
topconp[0].textContent = siteContent["main-content"]["features-content"];
topconp[1].textContent = siteContent["main-content"]["about-content"];

const midimg = document.querySelector('#middle-img');
midimg.src = siteContent["main-content"]["middle-img-src"];

const botcontext = document.querySelectorAll('.bottom-content .text-content h4');
botcontext[0].textContent = siteContent["main-content"]["services-h4"]
botcontext[1].textContent = siteContent["main-content"]["product-h4"]
botcontext[2].textContent = siteContent["main-content"]["vision-h4"]

const botconp = document.querySelectorAll('.bottom-content .text-content p');
botconp[0].textContent = siteContent["main-content"]["services-content"];
botconp[1].textContent = siteContent["main-content"]["product-content"];
botconp[2].textContent = siteContent["main-content"]["vision-content"];

const contacthead = document.querySelector('.contact h4');
contacthead.textContent = siteContent["contact"]["contact-h4"];

const contactp = document.querySelectorAll('.contact p');
contactp[0].textContent = siteContent["contact"]["address"];
contactp[1].textContent = siteContent["contact"]["phone"];
contactp[2].textContent = siteContent["contact"]["email"];

const footer = document.querySelector('footer');
footer.textContent = siteContent["footer"]["copyright"];


// let nav = document.querySelector('nav');
// let one = document.createElement('a');
// nav.appendChild(a);
// one.innerHTML = "One";
// one.href="#";
