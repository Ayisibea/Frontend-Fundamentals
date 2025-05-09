# Balance Manager Module

This is a simple JavaScript module that simulates a basic balance management system with three main functions: `TopUp`, `Withdraw`, and `CheckBalance`.

## Functions

### `TopUp(amount)`
Adds funds to the current balance.

**Parameters:**
- `amount` (number): The amount to be added to the balance

**Returns:**
- Success message with updated balance if input is valid
- Error message if input is not a number

### `Withdraw(amount)`
Deducts funds from the current balance if sufficient funds are available.

**Parameters:**
- `amount` (number): The amount to be withdrawn from the balance

**Returns:**
- Success message with updated balance if input is valid and sufficient funds exist
- Error message if input is not a number or if balance is insufficient

### `CheckBalance()`
Returns the current balance.

**Returns:**
- String showing the current balance

