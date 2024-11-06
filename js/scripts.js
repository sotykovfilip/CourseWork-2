function calculateMortgage() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);

    const interestRate = 0.045 / 12;
    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);

    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('success', 'error');

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || isNaN(monthlyIncome)) {
        resultDiv.style.display = 'none'; 
        return;
    }

    if (monthlyPayment > 0.3 * monthlyIncome) {
        resultDiv.innerText = "Loan amount too high based on your monthly income.";
        resultDiv.classList.add('error');
    } else {
        resultDiv.innerText = `Your monthly payment is: £${monthlyPayment.toFixed(2)}`;
        resultDiv.classList.add('success');
    }

    resultDiv.style.display = 'block';

}

document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");

    accordionButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Toggle active class on button
            this.classList.toggle("active");

            // Get the associated content
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});