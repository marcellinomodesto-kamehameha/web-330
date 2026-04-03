/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Marcellino Modesto
  Date: 4/3/2026
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return {
    getName: function() {
      return name;
    },
    getGender: function() {
      return gender;
    },
    getClass: function() {
      return characterClass;
    }
  };

}
document.getElementById("generateHero").addEventListener("click", function(e) {
  e.preventDefault();

  // TODO: Get form values
    const name = document.getElementById("heroName").value;
    const gender = document.getElementById("heroGender").value;
    const characterClass = document.getElementById("heroClass").value;

  // TODO: Create character
    const hero = createCharacter(name, gender, characterClass);

  // TODO: Display character information
  document.getElementById("characterOutput").innerHTML = `
    <p><strong>Name:</strong> ${hero.getName()}</p>
    <p><strong>Gender:</strong> ${hero.getGender()}</p>
    <p><strong>Class:</strong> ${hero.getClass()}</p>
  `;


});