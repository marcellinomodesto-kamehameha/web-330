/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Marcellino Modesto
  Date: 4/23/2026
  Filename: script.js
*/
"use strict";

// Create an in-memory object array for each table in the restaurant
let tables = [
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: true },
  { tableNumber: 3, capacity: 4, isReserved: false },
  { tableNumber: 4, capacity: 6, isReserved: true }
];


// Create an in-memory object array for each table in the restaurant
// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  let table = tables.find(t => t.tableNumber === parseInt(tableNumber));

  if (!table) {
    callback("Table does not exist.");
  } else if (table.isReserved) {
    callback("Sorry, that table is already reserved.");
  } else {
    table.isReserved = true;

    setTimeout(() => {
      callback(`Table ${tableNumber} has been successfully reserved. See you soon!`);
    }, time);
  }
}

function displayMessage(message) {
  document.getElementById("message").textContent = message;
}

// When the form is submitted, call the reserveTable function document
document.getElementById("reservationForm")
.addEventListener("submit", function (e) {
e.preventDefault();

  let name = document.getElementById("name").value;
  let tableNumber = document.getElementById("tableNumber").value;

  if (!name || !tableNumber) {
    displayMessage("Please fill out all fields.");
    return;
  }

  reserveTable(tableNumber, function(result) {
    displayMessage(`${name}, ${result}`);
  }, 2000); // 2-second delay
});