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
    "h1": "DOM </br> Is </br> Awesome",
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

//IMAGES//

document.getElementById("logo-img").setAttribute("src", "img/logo.png")

document.getElementById("cta-img").setAttribute("src", "img/header-img.png")

document.getElementById("middle-img").setAttribute("src", "img/mid-page-accent.jpg")

//NAV SECTION//

const nav = document.querySelector("nav");
const childNodes = nav.childNodes;
childNodes[1].innerText = siteContent["nav"]["nav-item-1"];
childNodes[3].innerText = siteContent["nav"]["nav-item-2"];
childNodes[5].innerText = siteContent["nav"]["nav-item-3"];
childNodes[7].innerText = siteContent["nav"]["nav-item-4"];
childNodes[9].innerText = siteContent["nav"]["nav-item-5"];
childNodes[11].innerText = siteContent["nav"]["nav-item-6"];

const newItem = document.createElement("a");
newItem.innerText = 'Member Sign In';
newItem.href = '#';
nav.appendChild(newItem);

const newItem2 = document.createElement("a");
newItem2.innerText = 'Home';
newItem2.href = '#';
nav.prepend(newItem2);



const navItems = document.querySelectorAll("a");
for (let i = 0; i < navItems.length; i++) {
navItems[i].style.color = "limegreen";
}


//CTA TEXT SECTION//

const cta = document.querySelector(".cta-text");
cta.childNodes[1].innerHTML = siteContent["cta"]["h1"]
cta.childNodes[3].innerText = siteContent["cta"]["button"];


//TOP CONTENT SECTION//

const topContent = document.querySelectorAll(".top-content div");

topContent[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
topContent[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];
topContent[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"]
topContent[1].querySelector('p').textContent = siteContent["main-content"]["about-content"]


//MAIN CONTENT SECTION//

const bottomContent = document.querySelectorAll(".bottom-content div");

bottomContent[0].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].querySelector('p').textContent = siteContent["main-content"]["services-content"];
bottomContent[1].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
bottomContent[1].querySelector('p').textContent = siteContent["main-content"]["product-content"];
bottomContent[2].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
bottomContent[2].querySelector('p').textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];
contact.querySelectorAll("p")[0].innerHTML = siteContent["contact"]["address"];
contact.querySelectorAll("p")[1].textContent = siteContent["contact"]["phone"]; 
contact.querySelectorAll("p")[2].textContent = siteContent["contact"]["email"];



//CONTACT SECTION//


const contactHeader = document.querySelectorAll('.contact h4');
const contactText = document.querySelectorAll('.contact p');

contactHeader[0].textContent = siteContent.contact['contact-h4'];
contactText[0].textContent = siteContent.contact.address;
contactText[1].textContent = siteContent.contact.phone;
contactText[2].textContent = siteContent.contact.email;


//FOOTER//

const footer = document.querySelector('footer');
footer.childNodes[1].textContent = siteContent.footer.copyright;


//STRETCH//


// fixed nav//

const header = document.querySelector("header");
header.style.position = "fixed";
header.style.top = "0";
header.style.zIndex = "1";
header.style.backgroundColor = "#fff";


