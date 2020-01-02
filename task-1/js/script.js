'use srtict';

let money, time;

money = +prompt('Your budget for month?');
time = prompt('Enter date in format yyyy-mm-dd');

let appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: null,
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    if( (typeof(a))=== 'string' && (typeof(a) != null) && (typeof(b))!= null
        && a!= '' && b!='' && a.length<50 ){
            console.log('done');
            appData.expenses[a] = b; 
    }else{
        console.log('error!');
    }

}


appData.moneyPerDay = appData.budget/30;
alert("Budget for day: " + appData.moneyPerDay);

