import {
  numberOfDays,
  populatePayDates,
  paymentInstallments,
  resetFrm,
} from "./calculator.js";

const paymentPlan = document.getElementById("payment-plan");

const default_interest = document.getElementById("interest-rate");
const indemnityDate = new Date(document.getElementById("indemnity-date").value);
const firstPaymentDate = new Date(
  document.getElementById("first-payment-date").value
);
const totalPrinciple = document.getElementById("total-principle");

const populate = document.getElementById("populate");
const resetBtn = document.getElementById("reset");

const payDates = document.querySelectorAll("input.date");
const payments = document.querySelectorAll("input.payment");
const principles = document.querySelectorAll("p.principle");
const interest_rates = document.querySelectorAll("input.interest");
const monthly_interests = document.querySelectorAll("p.monthly_interest");
const accumulated_interest = document.querySelectorAll(
  "p.accumulated_interest"
);
const totalInterest = document.getElementById("total-interest");
const finalDebt = document.getElementById("total-debt");

function populateTable() {
  let payDateIterator = firstPaymentDate;

  populatePayDates(payDates, payDateIterator);

  // Populate Payment and Left Principles
  const [installments, debtLeft] = paymentInstallments(
    totalPrinciple,
    paymentPlan
  );
  for (let i = 0; i < payDates.length; i++) {
    payments[i].value = installments[i];
    principles[i].textContent = debtLeft[i];
  }

  // Populate default interest rates
  interest_rates.forEach((element) => (element.value = default_interest.value));

  // Calculate Days
  payDates.forEach((element, index, array) => {
    // console.log(element.value);
    const accumulatedInterest = 0;
    if (index < 1) {
      const firstDate = new Date(indemnityDate);
      const secondDate = new Date(array[index].value);
      const days = numberOfDays(secondDate, firstDate);
      const monthly_interest =
        days *
        (interest_rates[index].value / 365 / 100) *
        Number(totalPrinciple.value);
      monthly_interests[index].textContent = monthly_interest.toFixed(2);

      //   accumulatedInterest += monthly_interest;
      //   accumulated_interest[index].textContent = accumulatedInterest.toFixed(2);

      //   console.log(monthly_interest);
    } else {
      const firstDate = new Date(array[index - 1].value);
      const secondDate = new Date(array[index].value);
      const days = numberOfDays(secondDate, firstDate);
      const monthly_interest =
        days *
        (interest_rates[index].value / 365 / 100) *
        Number(principles[index].textContent);
      monthly_interests[index].textContent = monthly_interest.toFixed(2);
    }
  });

  const monthlyInterestNumbers = [];
  monthly_interests.forEach((element) => {
    monthlyInterestNumbers.push(Number(element.textContent));
  });

  let runningTotal = 0;
  const monthlyAccumulatedInterest = monthlyInterestNumbers.map((num) => {
    runningTotal += num;
    return runningTotal.toFixed(2);
  });
  accumulated_interest.forEach((element, index, array) => {
    element.textContent = monthlyAccumulatedInterest[index];
  });

  totalInterest.textContent =
    accumulated_interest[accumulated_interest.length - 1].textContent + "$";
  const totalInterestDebt = Number(
    accumulated_interest[accumulated_interest.length - 1].textContent
  );

  const debtSum = Number(totalPrinciple.value) + totalInterestDebt;
  finalDebt.textContent = debtSum + "$";
}

populate.addEventListener("click", populateTable);
resetBtn.addEventListener("click", function (e) {
  resetFrm(paymentPlan);
});
