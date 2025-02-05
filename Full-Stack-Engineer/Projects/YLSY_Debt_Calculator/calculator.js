function numberOfDays(date1, date2) {
  const one_day = 24 * 60 * 60 * 1000;
  return (date1 - date2) / one_day;
}

function populatePayDates(payDates, payDateIterator) {
  for (let i = 0; i < payDates.length; i++) {
    let payDatePusher = payDateIterator.toISOString().slice(0, 10);
    payDates[i].value = payDatePusher;
    payDateIterator.setMonth(payDateIterator.getMonth() + 1);
  }
}

function paymentInstallments(principle, paymentPlan) {
  const totalDebt = Number(principle.value);
  let installments = [];
  let debtLeft = [];
  let installmentYears = [];
  let payedDebt = 0;

  switch (paymentPlan.value) {
    case "4year-100":
      installmentYears = [
        totalDebt * 0.1,
        totalDebt * 0.2,
        totalDebt * 0.3,
        totalDebt * 0.4,
      ];
      for (let i = 0; i < installmentYears.length; i++) {
        let currentYearDebt = installmentYears[i];
        for (let j = 0; j < 12; j++) {
          if (i < 2) {
            if (j < 11) {
              installments.push(100);
              currentYearDebt -= 100;
              payedDebt += 100;
            } else {
              installments.push(currentYearDebt);
              payedDebt += currentYearDebt;
            }
          } else {
            let pushedDebt = Number((currentYearDebt / 12).toFixed(2));
            installments.push(pushedDebt);
            payedDebt += pushedDebt;
          }
          debtLeft.push((totalDebt - payedDebt).toFixed(2));
        }
      }
    case "4year-evenly":
      installmentYears = [
        totalDebt * 0.25,
        totalDebt * 0.25,
        totalDebt * 0.25,
        totalDebt * 0.25,
      ];
      let currentYearDebt = 0;
      let currentMonthDebt = 0;
      //   let pushedDebt = 0;
      for (let i = 0; i < installmentYears.length; i++) {
        currentYearDebt = installmentYears[i];
        currentMonthDebt = Number(currentYearDebt / 12);
        for (let j = 0; j < 12; j++) {
          installments.push(
            (Math.round(currentMonthDebt * 100) / 100).toFixed(2)
          );
          payedDebt += currentMonthDebt;
          debtLeft.push((totalDebt - payedDebt).toFixed(2));
        }
      }
  }
  return [installments, debtLeft];
}

function resetFrm(paymentPlan) {
  console.log(paymentPlan.value);
  paymentPlan.value = "";
}

export { numberOfDays, populatePayDates, paymentInstallments, resetFrm };
