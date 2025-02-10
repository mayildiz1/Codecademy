import {
  numberOfDays,
  addTablePData,
  addTableRow,
  calculatePrinciple,
} from "./newCalculator.js";

const payment_plan = document.getElementById("payment-plan");
const addNewRowBtn = document.getElementById("addNewRow");
const removeLastRowBtn = document.getElementById("deleteLastRow");

const table = document.getElementById("resultsTable");

const payDate = document.querySelectorAll("input.date");
const payment = document.querySelectorAll("input.payment");

payment_plan.addEventListener("change", function (e) {
  console.log(`${payment_plan.value} has been selected`);
  // if (payment_plan.value === "custom") {
  //   addNewRowBtn.style.display = "block";
  // } else {
  //   addNewRowBtn.style.display = "none";
  // }
});

addNewRowBtn.addEventListener("click", function (e) {
  addTableRow(table);
  // for (let i = 1; i < table.ariaRowSpan.l)
  console.log(table);
});

removeLastRowBtn.addEventListener("click", function (element) {
  const tbody = table.querySelector("tbody");
  tbody.removeChild(tbody.lastElementChild);
});
addTablePData("testClass");
