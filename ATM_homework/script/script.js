let pin = 1234;
let balance = 15000;

function pinCheckOK(){
    let pinCheck = parseInt(prompt(`ATM \n\n Enter your PIN:`));
    if(pinCheck === pin){
        alert(`Welcome`);
    } else {
        alert(`Wrong PIN`);
        pinCheckOK();
    }
}
pinCheckOK();

function getBalance(){
    alert(`Your balance is ${balance}`);
    atm();
}
function cashWithdraw(){
    let withdraw = parseInt(prompt(`Enter amount to withdraw`));
    if(withdraw > balance){
        alert(`Not enough money`)
        atm();
    }else if(isNaN(withdraw) || withdraw === ''){
        alert('Error: please enter a number!');
        cashWithdraw();
    }
    else{
        balance -= withdraw;
        getBalance();
    }
}
function depositFun(){
    let deposit = parseInt(prompt(`Enter amount to deposit`));
    if(isNaN(deposit) || deposit === ''){
        alert('Error: please enter a number!');
        cashWithdraw();
    }else{
        balance += deposit;
        getBalance();
    }
}
function pinChange(){
    let newPin = parseInt(prompt(`Enter new PIN`));
    if(isNaN(newPin) || newPin === ""){
        alert(`Please enter valid numbers and min 4 numbers`)
        pinChange();
    }
    pin = newPin;
    alert(`Your PIN has been changed`);
    atm();
}
function exit(){
    let leave = confirm('You have selected exit.');
		if (leave) {
			window.close();
		} else {
			atm();
		}
}
function errorFun(){
    alert(`Error: accepted numbers are 1 through 5.`)
    atm();
}

function atm(){
    let select = parseInt(prompt(` 1. Balance \n 2. Cash withdrawal \n 3. Deposit \n 4. PIN change \n 5. Exit`));

    switch(select){
        case 1:
            getBalance();
            break;
        case 2:
            cashWithdraw();
            break;
        case 3:
            depositFun();
            break;
        case 4:
            pinChange();
            break;
        case 5:
            exit();
            break;
        default:
            errorFun();
            break;
    }
}

atm();





/*
if (pinCheck === pin) {
    alert(`Welcome`);

    let select = parseInt(prompt(` 1. Balance \n 2. Cash withdrawal \n 3. Deposit \n 4. PIN change \n 5. Exit`));

    function atm() {
        switch (select) {
            case 1:
                alert(`Your balance is ${balance}`);
                break;
            case 2:
                let withdraw = parseInt(prompt(`Enter amount to withdraw`));
                if(withdraw > balance){
                    alert(`Not enough money`)
                }else{
                    balance = balance - withdraw;
                    alert(`New balance ${balance}`);
                }
                break;
               
            case 3:
                let deposit = parseInt(prompt(`Enter amount to deposit`));
                balance = balance + deposit;
                alert(`New balance ${balance}`);
                break;
            case 4:
                let newPin = parseInt(prompt(`Enter new PIN`));
                pin = newPin;
                alert(`Your PIN has been changed`);
                break;
            default:
                alert(`Wrong input`);
        }
    }
atm(select);

} else {
    alert(`Wrong PIN`)
}
*/

