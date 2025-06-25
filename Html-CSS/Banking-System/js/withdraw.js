// Withdraw functionality
const withdrawButton = document.getElementById('withdraw-button');
const withdrawInput = document.getElementById('withdraw-input');
const balanceAmount = document.getElementsByClassName('balance-amount')[0];

// Set initial balance (from localStorage ) '
let currentBalance = parseFloat(localStorage.getItem('balance')) || 0;
balanceAmount.textContent = `GHS${currentBalance.toFixed(2)}`; // Display balance

function loadTransactions() {
  const data = localStorage.getItem('transactions');
  return data ? JSON.parse(data) : [];
}
function saveTransactions(transactions) {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

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
    alert(`Insufficient funds\nCurrent balance: GHS${currentBalance.toFixed(2)}`);
    withdrawInput.focus();
    return;
  }

  // Update balance
  currentBalance -= amount;
  localStorage.setItem('balance', currentBalance.toFixed(2));
  balanceAmount.textContent = `GHS${currentBalance.toFixed(2)}`;
  
  // Adding withdrawal transaction
  const transactions = loadTransactions();
  transactions.unshift({
    date: new Date().toISOString().split('T')[0],
    type: 'WITHDRAWAL',
    amount: amount
  });
  saveTransactions(transactions);

  alert(`Successfully withdrew GHS${amount.toFixed(2)}\nNew balance: GHS${currentBalance.toFixed(2)}`);
  withdrawInput.value = "";
};

// let name = {firstname:'boy',lastname:'man'}
// localStorage.setItem('name',JSON.stringify(name))
// let names = localStorage.getItem('name')
// console.log(names)
// console.log(names.firstname)
// let a = JSON.parse(localStorage.getItem('name'))
// console.log(a)
// console.log(a.firstname)
