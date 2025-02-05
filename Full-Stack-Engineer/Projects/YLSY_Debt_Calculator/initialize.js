const rows = 48;
const cols = 7;

const table = document.getElementById("resultsTable");

const today = new Date();
const this_year = today.getFullYear();
const this_month = String(today.getMonth() + 1).padStart(2, "0");
const this_day = String(today.getDate()).padStart(2, "0");
const this_date = `${this_year}-${this_month}-${this_day}`;

for (let i = 0; i < rows; i++) {
  const tr = document.createElement("tr");

  for (j = 0; j < cols; j++) {
    const td = document.createElement("td");
    if (j === 0) {
      const row_num = document.createElement("p");
      row_num.innerHTML = `${i + 1}`;
      td.appendChild(row_num);
    } else if (j === 1) {
      const input_date = document.createElement("input");
      input_date.type = "date";
      input_date.className = "date";
      input_date.value = this_date;
      td.appendChild(input_date);
    } else if (j === 2) {
      const payment = document.createElement("input");
      payment.type = "number";
      payment.className = "payment";
      payment.name = `payment_${i}`;
      payment.placeholder = "Enter";
      td.appendChild(payment);
    } else if (j === 3) {
      const principle = document.createElement("p");
      principle.className = "principle";
      principle.innerHTML = "---$";
      td.appendChild(principle);
    } else if (j === 4) {
      const interest = document.createElement("input");
      interest.type = "number";
      interest.className = "interest";
      interest.name = `interest_${i}`;
      interest.placeholder = "Enter (%)";
      td.appendChild(interest);
    } else if (j === 5) {
      const monthly_interest = document.createElement("p");
      monthly_interest.className = "monthly_interest";
      monthly_interest.innerHTML = "---$";
      td.appendChild(monthly_interest);
    } else if (j === 6) {
      const accumulated_interest = document.createElement("p");
      accumulated_interest.className = "accumulated_interest";
      accumulated_interest.innerHTML = "---$";
      td.appendChild(accumulated_interest);
    }
    tr.appendChild(td);
  }

  table.appendChild(tr);
}
