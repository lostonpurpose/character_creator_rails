// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "@popperjs/core"
import "bootstrap"

document.addEventListener("turbo:load", function() {
  const roll = document.querySelector(".roll");

  // Only add event listener if the .roll button is present
  if (roll) {
    roll.addEventListener('click', rollDice);
  }

  function rollDice() {
    let d1 = document.querySelector(".d1");
    let d2 = document.querySelector(".d2");
    let d3 = document.querySelector(".d3");

    let n1 = Math.floor((Math.random() * 6) + 1);
    let n2 = Math.floor((Math.random() * 6) + 1);
    let n3 = Math.floor((Math.random() * 6) + 1);

    d1.innerText = `${n1}`;
    d2.innerText = `${n2}`;
    d3.innerText = `${n3}`;

    const totalScore = (n1 + n2 + n3);
    return totalScore;
  }
});
