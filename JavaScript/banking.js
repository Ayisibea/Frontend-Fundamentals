let balance = 0;

function TopUp(amount){
    type = typeof amount;
    if (type != 'number'){
        return 'Wrong input received,Try again';
    }
    else{
        balance+=amount;
        return `TopUp Successful. Current Balance: ${balance}`;
    }    
}

function Withdraw(amount,){
    type = typeof amount;
    if (type != 'number'){
        return 'Wrong input received,Try again';
    }
    else if (amount > balance){
        return 'Low balance,Withdrawal unsuccessful';
    }
    else{
        balance-=amount;
        return `Withdrawal Successful. Current Balance: ${balance}`;
    }
}

function CheckBalance(){
    return `Your current balnce is:${balance}`;
}
console.log(TopUp(100));
console.log(Withdraw(2000));
console.log(CheckBalance());