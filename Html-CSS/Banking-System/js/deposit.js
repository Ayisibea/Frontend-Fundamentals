// Deposit Functionality
const depositInput = document.getElementsByClassName('amount-input')[0];
const depositBtn = document.getElementsByClassName('deposit-btn')[0];
const balanceAmount = document.getElementsByClassName('balance-amount')[0];

// Set initial balance (from localStorage or default)
let currentBalance = parseFloat(localStorage.getItem('balance')) || 0;
balanceAmount.textContent = `GHS${currentBalance.toFixed(2)}`; // Display balance

function loadTransactions() {
  const data = localStorage.getItem('transactions');
  return data ? JSON.parse(data) : [];
}
function saveTransactions(transactions) {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

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
  balanceAmount.textContent = `GHS${currentBalance.toFixed(2)}`; 

  
  // Add deposit transaction
  const transactions = loadTransactions();
  transactions.unshift({
    date: new Date().toISOString().split('T')[0], 
     type: 'DEPOSIT',
    amount: amount
  });
  saveTransactions(transactions);

  alert(`Successfully deposited GHS${amount.toFixed(2)}`);
  depositInput.value = ""; // Clear input
};


