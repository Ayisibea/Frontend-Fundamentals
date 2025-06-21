// Deposit Functionality
const depositInput = document.getElementsByClassName('amount-input')[0];
const depositBtn = document.getElementsByClassName('deposit-btn')[0];
const balanceAmount = document.getElementsByClassName('balance-amount')[0];

// Set initial balance (from localStorage or default)
let currentBalance = parseFloat(localStorage.getItem('balance')) || 0;
balanceAmount.textContent = `$${currentBalance.toFixed(2)}`; // Display balance

// Deposit button click handler
depositBtn.onclick = function() {
  const amount = parseFloat(depositInput.value);

  // Validate input
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount greater than 0");
    return;
  }

  // Update balance
  currentBalance += amount;
  localStorage.setItem('balance', currentBalance.toString());
  balanceAmount.textContent = `$${currentBalance.toFixed(2)}`; // Update display

  alert(`Successfully deposited $${amount.toFixed(2)}`);
  depositInput.value = ""; // Clear input
};


