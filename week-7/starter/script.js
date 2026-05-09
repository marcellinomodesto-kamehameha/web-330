"use strict";

const chefs = [
  { name: "Chef A", specialty: "Italian cuisine", location: "New York" },
  { name: "Chef B", specialty: "French cuisine", location: "Paris" },
  { name: "Chef C", specialty: "Japanese cuisine", location: "Tokyo" }
];

let currentChef = null;

function retrieveChef(index, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(chefs[index]), delay);
  });
}

async function loadChefs() {
// First issue: Chef A takes 600, Chef B takes 900, and Chef C takes 1200, which is 2700ms.
  const delays = [600, 900, 1200];
// The second issue is right here. The loop goes through one chef, awaiting for the last chef to be pulled instead
// of being pulled at once
  for (let i = 0; i < chefs.length; i++) {
    try {
      currentChef = await retrieveChef(i, delays[i]);

      const el = document.getElementById(`chef${i + 1}`);
      el.innerHTML = `
        <h2>${currentChef.name}</h2>
        <p>Specialty: ${currentChef.specialty}</p>
        <p>Location: ${currentChef.location}</p>
      `;
    } catch (err) {
      console.error("Error retrieving chef:", err);
    }
  }
}

loadChefs();