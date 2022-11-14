'use Strict';


const elemToggleFunc = function (elem) {
    elem.classList.toggle("active");
}


const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

for(let i=0; i < navbarLinks.length; i++){
    navElemArr.push(navbarLinks[i]);
}

for (let i=0; i<navElemArr.length; i++){
    navElemArr[i].addEventListener("click", function(){
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 
let result=document.getElementById('result');

// const calculate = document.getElementById('calculate');
// calculate.addEventListener('click',()=>{
//     let height=parseFloat(document.getElementById('height').value);
//     let weight=parseFloat(document.getElementById('weight').value);
//     let bmi = (weight/(height*height)).toFixed(1);;
//     result.value=(`Your BMI is: ${bmi}`);
// })

function calculate(){
      let height=parseFloat(document.getElementById('height').value);
    let weight=parseFloat(document.getElementById('weight').value);
    let bmi = (weight/(height*height)).toFixed(1);;
    result.value=(bmi);  
}
function sendMail(params){
    var tempParams = {
        from_name:document.getElementById('name').value,
        msg:document.getElementById('message').value,
        to_email:document.getElementById('email').value,
       bmi:document.getElementById('result').value,
        number:document.getElementById('number').value

        

    }
    emailjs.send('gmail','template_lk8z8v8',tempParams)
    .then(function(res){
        alert("Your details was sent to the NPPD care team.")
    })
}