//Create a variable background
let landingPage = document.querySelector(".landing-page");
// Create Array with images for landing pages
let images = ["1", "2", "3"];
// Function to change background

function changeBackground() {
  // Generate random index
  let randomIndex = Math.floor(Math.random() * images.length);
  // Change background image
  landingPage.style.backgroundImage = `url(assets/image/home${images[randomIndex]}.jpg)`;
}
// Call function every 10 seconds
setInterval(changeBackground, 5000);
/////////////////////////////////
// Our Skills progress

//select skills
let ourSkills = document.querySelector(".Skills");

window.onscroll = function () {
  //skills offset top
  let skillsOfsetTop = ourSkills.offsetTop;
  //skills outer height
  let skillsOuterHeight = ourSkills.offsetHeight;
  //window height
  let windowHeight = this.innerHeight;
  //window scroll top
  let windowScrollTop = this.scrollY;
  //if skills are in view
  if (windowScrollTop >= skillsOfsetTop + skillsOuterHeight - windowHeight) {
    let skills = document.querySelectorAll(".skill-box .skill-progress span");
    skills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
////////////////////////////
// Select sections
let sections = document.querySelectorAll(".section");
// create list
let list = document.createElement("ul");
//create Document fragment
const myDocFrag = document.createDocumentFragment();
sections.forEach((item) => {
  // create nav items
  let liItem = document.createElement("li");
  let navItem = document.createElement("a");
  // insert data to nav item
  navItem.innerHTML = item.classList[0];
  navItem.href = `#${item.classList[0]}`;
  navItem.classList.add("nav-item");
  navItem.dataset.section = item.classList[0];
  liItem.appendChild(navItem);
  // add item to list
  myDocFrag.appendChild(liItem);
});
list.appendChild(myDocFrag);
//add list to Navbar in body
document.querySelector(".nav-menu").appendChild(list);
///////////////////////////////
// Scroll to section when clicked and add active
// get items
const items = document.querySelectorAll(".nav-item");
items.forEach((item) => {
  item.addEventListener("click", function (e) {
    // prevent default behavior
    e.preventDefault();
    //scroll to section
    document.querySelector(`.${e.target.dataset.section}`).scrollIntoView({
      behavior: "smooth",
    });
    handleActiveClass(e);
  });
});
// Handle Active class
function handleActiveClass(ev) {
  items.forEach((item) => {
    item.classList.remove("active");
    item.style.color = "#fff";
  });
  ev.target.classList.add("active");
  ev.target.style.color = "orangered";
}
// Handle active the navbar item when scroll to sections
function setActiveNavItem() {
  let sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    const navbar = document.querySelector(".navbar").getBoundingClientRect();
    const rect = section.getBoundingClientRect();
    const navItem = document.querySelector(`.nav-item[href="#${section.id}"]`);
    if (rect.top - 30 <= navbar.bottom && rect.bottom >= navbar.bottom) {
      navItem.classList.add("active");
      section.classList.add("active");
      navItem.style.color = "orangered";
    } else {
      navItem.classList.remove("active");
      navItem.style.color = "#fff";
    }
  });
}
// to make the home active when relode the site
setActiveNavItem();
// Call makeActive function on scroll
window.addEventListener("scroll", setActiveNavItem);
///////////////
//Scroll to top button
let scrollTopButton = document.querySelector(".scroll-top");
scrollTopButton.addEventListener("click", function (e) {
  document.querySelector(".landing-page").scrollIntoView({
    behavior: "smooth",
  });
});
//display the button when scrolling to bottom
function toggleScrollToTopBtn() {
  if (window.scrollY > window.innerHeight) {
    scrollTopButton.classList.add("show");
    scrollTopButton.style.display = "block";
    //make change the background color of the navbar
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  } else {
    scrollTopButton.classList.remove("show");
    scrollTopButton.style.display = "none";
    //make change the background color of the navbar (home color)
    navbar.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  }
}
//display the scroll button
window.addEventListener("scroll", function () {
    toggleScrollToTopBtn();
});
//display or hidden navbar after 2 second
let navbar = document.querySelector(".navbar");
let scrollTimeout;
window.addEventListener("scroll", function () {
    navbar.style.display = "block";
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
    if (window.scrollY > window.innerHeight){
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
  }, 2000); // adjust the timeout value to your liking
});

