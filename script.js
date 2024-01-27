"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "correct number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value = "13";
console.log(document.querySelector(".guess").value);
*/
const guess_num=Math.trunc(Math.random()*20)+1;
let gscore=20;
document.querySelector('.number').textContent=guess_num;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);

    //document.querySelector('.message').textContent='correct number';

    if(!guess)
    {
        document.querySelector(".message").textContent = "No number!";
    }
    else if(guess===guess_num)
    {
        document.querySelector(".message").textContent = "correct number!";
    }
    //high number
    else if(guess > guess_num)
    {
        if(gscore >1)
        {
            document.querySelector(".message").textContent = "To high number!";
            gscore--;
            document.querySelector('.score').textContent=gscore;
        }
        else
        {
            document.querySelector(".message").textContent = "you loss the game!!";
            document.querySelector('.score').textContent =0;
        }
        
    }
    //low number
    else if(guess < guess_num)
    {
        if(gscore >1)
        {
            document.querySelector(".message").textContent = "To low number!";
            gscore--;
            document.querySelector('.score').textContent=gscore;
        }
        else
        {
            document.querySelector(".message").textContent = "you loss the game!!";
            document.querySelector(".score").textContent =0;
        }
        
    }
});