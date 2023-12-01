let user_choice = document.querySelectorAll(".user-choice");
let computer_choice = document.querySelectorAll(".computer-choice");
let user = document.querySelector(".user");
let computer = document.querySelector(".computer");
let win_modal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play-again");
let cum_score = document.querySelector(".cum_score");
let user_score = document.querySelector(".user_score");
let rules_btn = document.querySelector(".rules-btn");
let rules_modal = document.querySelector(".rules-modal");
let modal_container = document.querySelector(".modal-container");
let close_btn = document.querySelector(".close-btn");
let trinagle = document.querySelector(".trinagle");
let container=document.querySelector(".container");
let next_btn=document.querySelector(".next-btn");
let winner_modal=document.querySelector(".winner-modal");


let ls_cum_score = JSON.parse(localStorage.getItem("cum_score"));
let ls_user_score = JSON.parse(localStorage.getItem("user_score"));

if (ls_cum_score) {
    cum_score.innerText = ls_cum_score?ls_cum_score:0;
}
if (ls_user_score) {
    user_score.innerText = ls_user_score?ls_user_score:0;
}

let cum_count = 0;
let user_count = 0;
let random = Math.floor(Math.random() * 3);

user_choice.forEach((element, index) => {
    element.addEventListener("click", () => {
        user.style.opacity = "1";
        trinagle.style.display = "none";
        user_choice.forEach(item => {
            item.style.display = "none";
        })
        element.style.display = "block";
        element.classList.add("show");
        setTimeout(() => {
            computer.style.opacity = "1";
            setTimeout(() => {
                computer_choice[random].style.display = "block";
                computer_choice[random].classList.add("right");
            }, 1000);
        }, 500);
        setTimeout(() => {
            if (index === random) {
                rmNextBtn();
                win_modal.style.display = "grid";
                next_btn.style.visibility="hidden";
                winner.innerHTML = "<h2>TIE UP</h2><p></p>";
            } else if (index === 0 && random === 2 || index === 1 && random === 0 || index === 2 && random === 1) {
                showNextBtn();                             
                win_modal.style.display = "grid";                
                element.classList.add("animation");                
                winner.innerHTML = "<h2>YOU WIN</h2><p>AGAINST PC</P>";
                user_count = ls_user_score;
                user_count++;
                user_score.innerText = user_count;
                localStorage.setItem("user_score", JSON.stringify(user_count));
            } else {
                rmNextBtn();
                win_modal.style.display = "grid";
                computer_choice[random].classList.add("animation");                
                winner.innerHTML = "<h2>YOU LOST</h2><p>AGAINST PC</P>";
                cum_count = ls_cum_score;
                cum_count++;
                cum_score.innerText = cum_count;
                localStorage.setItem("cum_score", JSON.stringify(cum_count));
            }
        }, 1500);
    })
})


function playBtn(){
    window.location.reload();    
}

function showNextBtn(){
    next_btn.style.visibility="visible";
    rules_btn.style.marginRight="1rem"
}

function rmNextBtn(){
    next_btn.style.visibility="hidden";
}

function nextBtn(){
    window.location.href="./winner.html";
}

function playAgainBtn(){
    window.location.href="./index.html";
}

function rulesBtn(){
    rules_modal.classList.toggle("show-modal");   
}

function closeBtn(){
    rules_modal.classList.toggle("show-modal");        
}