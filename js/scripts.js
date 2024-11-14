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
  const infoDiv = document.getElementById("resultInfo");
  const br = document.createElement("br");
  resultDiv.classList.remove("success", "error");
  infoDiv.innerText = "";

  if (monthlyPayment > 0.3 * monthlyIncome) {
    resultDiv.innerText = "Loan amount too high based on your monthly income.";
    resultDiv.classList.add("error");
    let maxMonthly = 0.3 * monthlyIncome;
    let maxLoan =((maxMonthly / interestRate) *(Math.pow(1 + interestRate, loanTerm) - 1)) /Math.pow(1 + interestRate, loanTerm);
    infoDiv.innerHTML = `The maximum loan amount you can afford for a ${loanTerm} month long loan is £${maxLoan.toFixed(2)}`;
  } else {
    resultDiv.innerHTML = `Your monthly payment is: £${monthlyPayment.toFixed(2)}`;
    resultDiv.appendChild(br);
    resultDiv.innerHTML += `That equates to a total of: £${(monthlyPayment * loanTerm).toFixed(2)}`;
    infoDiv.innerHTML = '<h3>Break Down</h3>';
    infoDiv.appendChild(br);
    infoDiv.innerHTML += `Based on a loan amount of £${loanAmount.toFixed(2)} over ${loanTerm / 12} years at 4.5% interest rate.`;
    infoDiv.appendChild(br);
    infoDiv.innerHTML += `The total amount paid will be £${(monthlyPayment * loanTerm).toFixed(2)}`;
    resultDiv.classList.add("success");
  }

  resultDiv.style.display = "block";
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
