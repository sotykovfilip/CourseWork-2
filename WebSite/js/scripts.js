// Used in mortage-calculator - When calculate button is pressed
function calculateMortgage() {
  const loanAmount = parseFloat(document.getElementById("loanAmount").value.replace(/[^0-9.]/g, ''));
  const loanTerm = parseInt(document.getElementById("loanTerm").value) * 12;
  const monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value.replace(/[^0-9.]/g, ''));

  const interestRate = 0.045 / 12;
  const monthlyPayment =
    (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /
    (Math.pow(1 + interestRate, loanTerm) - 1);

  const resultDiv = document.getElementById("result");
  const br = document.createElement("br");
  const bdButton = document.getElementById("breakDownButton");
  const breakDown = document.getElementById("breakDown");
  
  // Reset all displays
  resultDiv.classList.remove("success", "error");
  breakDown.style.display = "none";
  bdButton.style.display = "none";

  if ( monthlyPayment < 0.3 * monthlyIncome) {
    resultDiv.innerHTML = `Your monthly payment would be: £${monthlyPayment.toFixed(2)}`;
    resultDiv.appendChild(br);
    resultDiv.innerHTML += `The total amount paid back would: £${(monthlyPayment * loanTerm).toFixed(2)}`;
    resultDiv.appendChild(br);
    resultDiv.innerHTML += `<h3>We are excited to take care of your future home!</h3>`;
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
  resultDiv.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Used in mortage-calculator - When breakdown button is pressed after calculate button
function breakDownButton(){
  const breakDown = document.getElementById("breakDown");
  const breakDownButton = document.getElementById("breakDownButton");
  const loanAmount = parseFloat(document.getElementById("loanAmount").value);
  const loanTerm = parseInt(document.getElementById("loanTerm").value) * 12;
  const monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value);
  const interestRate = 0.045 / 12;
  const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /(Math.pow(1 + interestRate, loanTerm) - 1);

  const totalPayment = monthlyPayment * loanTerm;
  const totalInterest = totalPayment - loanAmount;
  const incomePercentage = (monthlyPayment / monthlyIncome) * 100;
  const yearlyPayment = monthlyPayment * 12;
  const loanToIncomeRatio = loanAmount / (monthlyIncome * 12);
  const potentialSavings = monthlyIncome - monthlyPayment;

  breakDown.innerHTML = `
    <h3>Mortgage Breakdown Analysis</h3>
    
    <div class="breakdown-section">
      <div class="breakdown-label">📊 Monthly Payment</div>
      <div class="breakdown-value">£${monthlyPayment.toFixed(2)}</div>
      <div class="breakdown-note">This amount will be due each month for the entire loan term</div>
    </div>

    <div class="breakdown-section">
      <div class="breakdown-label">📅 Annual Cost</div>
      <div class="breakdown-value">£${yearlyPayment.toFixed(2)}</div>
      <div class="breakdown-note">Your total payments per year</div>
    </div>

    <div class="breakdown-section">
      <div class="breakdown-label">💰 Total Loan Amount</div>
      <div class="breakdown-value">£${loanAmount.toFixed(2)}</div>
      <div class="percentage-bar">
        <div class="percentage-fill" style="width: ${(loanAmount/totalPayment)*100}%"></div>
      </div>
      <div class="breakdown-note">Principal amount you're borrowing</div>
    </div>

    <div class="breakdown-section">
      <div class="breakdown-label">💸 Total Interest</div>
      <div class="breakdown-value">£${totalInterest.toFixed(2)}</div>
      <div class="percentage-bar">
        <div class="percentage-fill" style="width: ${(totalInterest/totalPayment)*100}%"></div>
      </div>
      <div class="breakdown-note">Total interest paid over ${loanTerm/12} years</div>
    </div>

    <div class="breakdown-section">
      <div class="breakdown-label">📈 Monthly Income Ratio</div>
      <div class="breakdown-value">${incomePercentage.toFixed(1)}% of monthly income</div>
      <div class="percentage-bar">
        <div class="percentage-fill" style="width: ${incomePercentage}%"></div>
      </div>
      <div class="breakdown-note">✅ This is within the recommended range</div>
    </div>

    <div class="breakdown-section">
      <div class="breakdown-label">🏦 Loan-to-Income Ratio</div>
      <div class="breakdown-value">${loanToIncomeRatio.toFixed(2)}x annual income</div>
      <div class="percentage-bar">
        <div class="percentage-fill" style="width: ${Math.min(loanToIncomeRatio/4.3 * 100, 100)}%"></div>
      </div>
      <div class="breakdown-note">${loanToIncomeRatio > 4.3 ? '⚠️ This exceeds the typical maximum of 4.3x ⚠️<br> Our advisors can further help you out' : '✅ This is within typical lending limits'}</div>
    </div>

    <div class="breakdown-section">
      <div class="breakdown-label">💵 Monthly Savings Potential</div>
      <div class="breakdown-value">£${potentialSavings.toFixed(2)}</div>
      <div class="breakdown-note">Amount potentially available for savings after mortgage payment</div>
    </div>

    <div class="breakdown-section">
      <div class="breakdown-label">⏱️ Payment Schedule</div>
      <div class="breakdown-value">${loanTerm} monthly payments</div>
      <div class="breakdown-note">Payment frequency: Monthly | First payment due: One month after completion</div>
    </div>

    <div class="breakdown-section total-section">
      <div class="breakdown-label">🏦 Total Cost</div>
      <div class="breakdown-value">£${totalPayment.toFixed(2)}</div>
      <div class="breakdown-note">Total amount you'll pay over the full term</div>
    </div>
  `;

  breakDown.style.display = "block";
  
  // Smooth scroll to the breakdown section
  breakDown.scrollIntoView({ behavior: 'smooth', block: 'start' });
  breakDownButton.style.display = "none";
  
  // Animate the percentage bars after display
  setTimeout(() => {
    const bars = document.querySelectorAll('.percentage-fill');
    bars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width;
      }, 50);
    });
  }, 100);
}


// Used in home page - Animate scroll
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

// Used in contact page - When send message button is pressed
function sendMessage(){
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name == "" || email == "" || message == ""){
    alert("Please fill out all fields.");
  } else {
    alert("Message sent successfully!");
  }
};

// JQuery - Used in faq and services page - Accordion Buttons
$(document).ready(function () {
  $(".accordion-header").on("click", function () {
    $(this).next(".accordion-content").stop(true, true).slideToggle();
    $(".accordion-header").not(this).removeClass("active");
    $(this).toggleClass("active");
  });
  // Move to next input box when Enter is pressed
  $('input').on('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      var inputs = $('input');
      var nextInput = inputs.eq(inputs.index(this) + 1);
      if (nextInput.length) {
        nextInput.focus();
      } else {
        $('.submitButton button').focus(); // Focus on the existing button within the submitButton class
      }
    }
  });
});


///test