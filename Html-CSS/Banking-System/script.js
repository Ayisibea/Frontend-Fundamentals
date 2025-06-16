// Deposit Functionality
const depositInput = document.getElementsByClassName('amount-input')[0];
const depositBtn = document.getElementsByClassName('deposit-btn')[0];
const balanceAmount = document.getElementsByClassName('balance-amount')[0];
//Withdrawal Functionality
const withdrawButton = document.getElementById('withdraw-button');
const withdrawInput = document.getElementById('withdraw-input');

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



// Withdraw button click handler
withdrawButton.onclick = function()  {
  const amount = parseFloat(withdrawInput.value);

  // Validate input
  if (isNaN(amount)) {
    alert("Please enter a valid number");
    return;
  }
  
  if (amount <= 0) {
    alert("Withdrawal amount must be greater than 0");
    return;
  }
  
  if (amount > currentBalance) {
    alert("Insufficient funds");
    return;
  }

  // Update balance
  currentBalance -= amount;
  localStorage.setItem('balance', currentBalance.toString());
  
  // Update UI
  balanceAmount.textContent = `$${currentBalance.toFixed(2)}`;
  alert(`Successfully withdrew $${amount.toFixed(2)}`);
  withdrawInput.value = ""; // Clear input
};