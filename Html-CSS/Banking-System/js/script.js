const balanceAmount = document.getElementsByClassName('balance-amount')[0];

// Set initial balance (from localStorage or default)
let currentBalance = parseFloat(localStorage.getItem('balance')) || 0;
balanceAmount.textContent = `$${currentBalance.toFixed(2)}`; // Display balance
// Load transactions from localStorage or use an empty array
function loadTransactions() {
  const data = localStorage.getItem('transactions');
  return data ? JSON.parse(data) : [];
}

// Save transactions to localStorage
function saveTransactions(transactions) {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Add a new transaction (call this when user makes a transaction)
function addTransaction(transaction) {
  const transactions = loadTransactions();
  transactions.unshift(transaction); // Add to the start of the array
  saveTransactions(transactions);
  renderTransactions();
}

// Format amount with + or -
function formatAmount(type, amount) {
  const sign = type === 'DEPOSIT' ? '+' : '-';
  return `${sign}GHS ${amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

// Render transactions in the table
function renderTransactions() {
  const transactions = loadTransactions();
  const tbody = document.querySelector('.transactions-table tbody');
  tbody.innerHTML = '';
  transactions.forEach(tx => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${tx.date}</td>
      <td>${tx.type}</td>
      <td>${formatAmount(tx.type, tx.amount)}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', renderTransactions);

