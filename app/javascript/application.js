// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"

let d1 = document.querySelector(".d1");
let d2 = document.querySelector(".d2");
let d3 = document.querySelector(".d3");

const roll = document.querySelector(".roll");
roll.addEventListener('click', rollDice);

function rollDice(d1, d2, d3) {
    let n1 = Math.floor((Math.random() * 6) + 1);
    let n2 = Math.floor((Math.random() * 6) + 1);
    let n3 = Math.floor((Math.random() * 6) + 1);


}

