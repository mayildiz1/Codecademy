// Get number of Days between two dates
function numberOfDays(date1, date2) {
  const one_day = 24 * 60 * 60 * 1000;
  return (date1 - date2) / one_day;
}

function addTablePData(className) {
  const td = document.createElement("td");
  const pElement = document.createElement("p");
  pElement.innerHTML = "--";
  pElement.className = className;
  td.appendChild(pElement);
  return td;
}

function addTableInputData(inputType, className) {
  const td = document.createElement("td");
  const input = document.createElement("input");
  input.type = inputType;
  input.className = className;
  td.appendChild(input);
  return td;
}

function addTableRow(table) {
  const rowElementOrder = ["p", "input", "input", "p", "input", "p", "p"];
  const rowElementTypeOrder = ["", "date", "number", "", "number", "", ""];
  const rowElementClassOrder = [
    "order",
    "date",
    "payment",
    "principle",
    "interest-rate",
    "monthly-interest",
    "accumulated-interest",
  ];
  let tableData;
  const tr = document.createElement("tr");
  for (let i = 0; i < rowElementOrder.length; i++) {
    if (rowElementOrder[i] === "p") {
      tableData = addTablePData(rowElementClassOrder[i]);
    } else if (rowElementOrder[i] === "input") {
      tableData = addTableInputData(
        rowElementTypeOrder[i],
        rowElementClassOrder[i]
      );
    }
    tr.appendChild(tableData);
  }
  const tbody = table.querySelector("tbody");
  tbody.appendChild(tr);
  table.appendChild(tbody);

  // Enumerate Rows
  const rowNumber = document.getElementsByClassName("order");
  for (let i = 0; i < rowNumber.length; i++) {
    rowNumber[i].innerHTML = `${i + 1}`;
  }
}

function calculatePrinciple(table) {
  const totalPrinciple = document.getElementById("total-principle");
  const payment = document.getElementsByClassName("payment");
  const principle = document.getElementsByClassName("principle");
  for (let i = 0; i < principle.length; i++) {
    if (i === 0) {
      principle[i] = totalPrinciple - payment[i];
    }
  }
}

export { numberOfDays, addTablePData, addTableRow, calculatePrinciple };
