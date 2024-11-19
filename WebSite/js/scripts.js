function calculateMortgage() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const loanTerm = parseInt(document.getElementById("loanTerm").value) * 12;
  const monthlyIncome = parseFloat(
    document.getElementById("monthlyIncome").value
  );

  const interestRate = 0.045 / 12;
  const monthlyPayment =
    (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /
    (Math.pow(1 + interestRate, loanTerm) - 1);

  const resultDiv = document.getElementById("result");
  //const infoDiv = document.getElementById("resultInfo");
  const br = document.createElement("br");
  const bdButton = document.getElementById("breakDownButton");
  resultDiv.classList.remove("success", "error");
  //infoDiv.innerText = "";

  if ( monthlyPayment < 0.3 * monthlyIncome) {
    resultDiv.innerHTML = `Your monthly payment would be: £${monthlyPayment.toFixed(2)}`;
    resultDiv.appendChild(br);
    resultDiv.innerHTML += `The total amount paid back would: £${(monthlyPayment * loanTerm).toFixed(2)}`;
    resultDiv.classList.add("success");
    bdButton.style.display = "block";
  } else if (monthlyPayment > 0.3 * monthlyIncome) {
    let maxMonthly = 0.3 * monthlyIncome;
    let maxLoan =((maxMonthly / interestRate) *(Math.pow(1 + interestRate, loanTerm) - 1)) /Math.pow(1 + interestRate, loanTerm);
    resultDiv.innerText = "Loan amount too high based on your monthly income.";
    resultDiv.appendChild(br);
    resultDiv.innerHTML += `The maximum loan amount you can afford for a ${loanTerm} month long loan is £${maxLoan.toFixed(2)}`;
    resultDiv.classList.add("error");
    bdButton.style.display = "none";
  } else {
    resultDiv.innerText = "Please enter valid values.";
    resultDiv.classList.add("error");
  }

  resultDiv.style.display = "block";
}

function breakDownButton(){
  const breakDown = document.getElementById("breakDown");
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const loanTerm = parseInt(document.getElementById("loanTerm").value) * 12;
  const monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value);
  const interestRate = 0.045 / 12;
  const monthlyPayment =(loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /(Math.pow(1 + interestRate, loanTerm) - 1);

  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;
  const incomeToPaymentRatio = ((monthlyPayment / monthlyIncome) * 100).toFixed(2);

  breakDown.style.display = "block";
  breakDown.innerHTML = `
    <h3>Mortgage Breakdown</h3>
    <p><strong>Loan Amount:</strong> £${loanAmount.toFixed(2)}</p>
    <p><strong>Loan Term:</strong> ${loanTerm / 12} years (${loanTerm} months)</p>
    <p><strong>Monthly Payment:</strong> £${monthlyPayment.toFixed(2)}</p>
    <p><strong>Total Payment:</strong> £${totalPayment.toFixed(2)}</p>
    <p><strong>Total Interest Paid:</strong> £${totalInterest.toFixed(2)}</p>
    <p><strong>Income to Payment Ratio:</strong> ${incomeToPaymentRatio}%</p>`;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  
const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((element) => {
    observer.observe(element);
});
  


$(document).ready(function () {
  $(".accordion-header").on("click", function () {
    $(this).next(".accordion-content").stop(true, true).slideToggle();
    $(".accordion-header").not(this).removeClass("active");
    $(this).toggleClass("active");
  });
});
