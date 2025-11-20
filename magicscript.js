document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");

  const resetButton = document.getElementById("resetButton");

  const spellArea = document.getElementById("spellArea");

  const ingredientsList = document.getElementById("ingredientsList");

  const ingredients = Array.from(ingredientsList.children).map(
    (li) => li.textContent
  );

  function getRandomColor() {
    const colors = [
      "#8a2be2",
      "#ff1493",
      "#22ff00ff",
      "#ff8000ff",
      "#0022ffff",
      "#ffd700",
      "#e978e5ff",
      "#d10038ff",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  }

  function generateSpell() {
    generateButton.diasbled = true;

    let count = 3;
    spellArea.innerHTML = `<div class="countdown"> ${count} </div>`;

    const countdown = setInterval(() => {
      count--;
      if (count > 0) {
        spellArea.innerHTML = `<div class="countdown"> ${count} </div>`;
      } else {
        clearInterval(countdown);

        const randomIngredient =
          ingredients[Math.floor(Math.random() * ingredients.length)];

        spellArea.style.backgroundColor = getRandomColor();

        spellArea.innerHTML = `<div class="spell-text">Your spell requires: ${randomIngredient}</div>`;

        generateButton.disabled = false;
      }
    }, 1000);
  }

  function resetSpellArea() {
    spellArea.innerHTML = "Your next ingredient will appear here... ooOo";
    spellArea.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  }

  generateButton.addEventListener("click", generateSpell);
  resetButton.addEventListener("click", resetSpellArea);
});
