"use strict";
// window.onload
document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById("add_new");
  button.addEventListener('click', addTable);

  function addTable(){
    var tableBody = document.querySelector("tbody");
    var tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);
    tableRow.innerHTML = "<td>Puss In Boots</td><td>Puss In Boots</td><td>Puss In Boots</td><td>Puss In Boots</td>";
  }

});
