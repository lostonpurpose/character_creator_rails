console.log("This is the correct application.js file!"); // Unique debugging log

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed"); // Debugging log to confirm the event fires

  const rollButton = document.querySelector(".roll");
  const characterID = rollButton.dataset.characterId;
  const diceElements = {
    d1: document.querySelector(`.d1[data-character-id="${characterID}"]`),
    d2: document.querySelector(`.d2[data-character-id="${characterID}"]`),
    d3: document.querySelector(`.d3[data-character-id="${characterID}"]`),
  };

  console.log(`character ID is: ${characterID}`);

  console.log("Roll button:", rollButton); // Debugging log to check if the roll button exists
  console.log("Dice elements:", diceElements); // Debugging log to check if dice elements exist

  if (!rollButton || !diceElements.d1 || !diceElements.d2 || !diceElements.d3) {
    console.warn("Required elements are missing from the DOM.");
    return;
  }

  rollButton.addEventListener("click", async () => {
    console.log("Roll button clicked"); // Debugging log to confirm the event fires

    const characterId = rollButton.dataset.characterId; // Get the character ID from the button's data attribute
    console.log("Character ID:", characterId); // Debugging log for character ID

    const diceRolls = rollDice();
    updateDiceElements(diceElements, diceRolls);

    const totalScore = diceRolls.reduce((sum, roll) => sum + roll, 0);
    console.log("Total score:", totalScore); // Debugging log for total score

    try {
      const response = await updateCharacterStrength(characterId, totalScore);
      if (response.status === "success") {
        console.log(`Character strength updated to: ${response.strength}`);
      } else {
        console.error("Failed to update strength");
      }
    } catch (error) {
      console.error("Error updating character strength:", error);
    }
  });
});



function rollDice() {
  return [1, 2, 3].map(() => Math.floor(Math.random() * 6) + 1);
}

function updateDiceElements(elements, rolls) {
  elements.d1.innerText = rolls[0];
  elements.d2.innerText = rolls[1];
  elements.d3.innerText = rolls[2];
}

async function updateCharacterStrength(characterId, strength) {
  const csrfToken = document.querySelector('[name="csrf-token"]').content;
  const response = await fetch(`/characters/${characterId}/update_strength`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken,
    },
    body: JSON.stringify({ strength }),
  });
  return response.json();
}
