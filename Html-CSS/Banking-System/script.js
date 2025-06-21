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



const withdrawButton = document.getElementById('withdraw-button');
const withdrawInput = document.getElementById('withdraw-input');

// Withdraw button click handler
withdrawButton.onclick = function() {
  const amount = parseFloat(withdrawInput.value);

  // Validate input
  if (isNaN(amount) || !isFinite(amount)) {
    alert("Please enter a valid number");
    withdrawInput.value = "";
    withdrawInput.focus();
    return;
  }
  
  if (amount <= 0) {
    alert("Amount must be greater than 0");
    withdrawInput.focus();
    return;
  }
  
  if (amount > currentBalance) {
    alert(`Insufficient funds\nCurrent balance: $${currentBalance.toFixed(2)}`);
    withdrawInput.focus();
    return;
  }

  // Update balance
  currentBalance -= amount;
  localStorage.setItem('balance', currentBalance.toFixed(2));
  balanceAmount.textContent = `$${currentBalance.toFixed(2)}`;
  
  alert(`Successfully withdrew $${amount.toFixed(2)}\nNew balance: $${currentBalance.toFixed(2)}`);
  withdrawInput.value = "";
};