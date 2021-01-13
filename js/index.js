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
    "h1": "DOM Is Awesome",
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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// My code starts here

let navHeader = document.querySelectorAll('a');
navHeader[0].textContent = 'Services'
navHeader[1].textContent = 'Product'
navHeader[2].textContent = 'Vision'
navHeader[3].textContent = 'Features'
navHeader[4].textContent = 'About'
navHeader[5].textContent = 'Contact'

let ctaTextHeader = document.querySelector('.cta-text h1')
console.log(ctaTextHeader)
ctaTextHeader.textContent = 'DOM Is AWESOME'

let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = 'Get Started'

let ctaImg = document.querySelector('#cta-img')
ctaImg.src = 'img/header-img.png'

let featuresHeader = document.querySelectorAll('.top-content h4')
console.log(featuresHeader)
featuresHeader[0].textContent = 'Features'
featuresHeader[1].textContent = 'About'

let featuresContent = document.querySelectorAll('.top-content p')
featuresContent[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

featuresContent[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let middleImg = document.querySelector('.middle-img')
middleImg.src = 'img/mid-page-accent.jpg';

let bottomContentHeader = document.querySelectorAll('.bottom-content h4')
bottomContentHeader[0].textContent = 'Services'
bottomContentHeader[1].textContent = 'Product'
bottomContentHeader[2].textContent = 'Vision'

let bottomContentParagraph = document.querySelectorAll('.bottom-content p')
bottomContentParagraph[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContentParagraph[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomContentParagraph[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let sectionContact = document.querySelector('.contact h4')
sectionContact.textContent = 'Contact'

let sectionContactParagraph = document.querySelectorAll('.contact p')
sectionContactParagraph[0].textContent = '123 Way 456 Street Somewhere, USA'
sectionContactParagraph[1].textContent = '1 (888) 888-8888'
sectionContactParagraph[2].textContent = 'sales@greatidea.io'

let footerSection = document.querySelector('footer p')
footerSection.textContent = 'Copyright Great Idea! 2018'