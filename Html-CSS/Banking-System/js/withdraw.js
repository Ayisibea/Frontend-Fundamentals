// Withdraw functionality
const withdrawButton = document.getElementById('withdraw-button');
const withdrawInput = document.getElementById('withdraw-input');
const balanceAmount = document.getElementsByClassName('balance-amount')[0];

// Set initial balance (from localStorage ) '
let currentBalance = parseFloat(localStorage.getItem('balance')) || 0;
balanceAmount.textContent = `$${currentBalance.toFixed(2)}`; // Display balance

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

let name = {firstname:'boy',lastname:'man'}
localStorage.setItem('name',JSON.stringify(name))
let names = localStorage.getItem('name')
console.log(names)
console.log(names.firstname)
let a = JSON.parse(localStorage.getItem('name'))
console.log(a)
console.log(a.firstname)
