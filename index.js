// Menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('links')[0];
const contact = document.getElementsByClassName('menulogo')[0];
const faqToggleButtons = document.querySelectorAll('.faq-toggle');
// Counter
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const amount = document.getElementById("amount");

// menu
console.log(navbarLinks)
toggleButton.addEventListener('click', () =>{
  navbarLinks.classList.toggle('active');
  contact.classList.toggle('space');
})

// Counter
let count = 0;
function updateCounter(){
    amount.textContent = count
}
plus.addEventListener('click', function(){
    count++
    updateCounter()
})

minus.addEventListener('click', function(){
   if( count > 0){
    count--
    updateCounter()
   }
})



// function openNavBar () {
//     document.getElementById("link").style.display="block" 
//     document.getElementById("hamburgerMenu").style.display="none" 
//     document.getElementById("close").style.display="block" 
//     document.getElementById("wlogo").style.display="none" 
//     document.getElementById("rsection").style.display="none"
// }

// function closeMenu() {
//     document.getElementById('link').style.display = 'none';
//     document.getElementById('hamburgerMenu').style.display = 'block';
//     document.getElementById('close').style.display = 'none';

//   }