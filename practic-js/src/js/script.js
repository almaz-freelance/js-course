'use strict';

let startCalc = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSave = document.getElementsByClassName('monthsavings-value')[0],
    yearSave = document.getElementsByClassName('yearsavings-value')[0],

    expensesInputs = document.getElementsByClassName('expenses-item'),

    approveExpBtn = document.getElementsByTagName('button')[0],
    approveOptBtn = document.getElementsByTagName('button')[1],
    calculateBtn = document.getElementsByTagName('button')[2],

    optionaltems = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    savingsFlag = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let time, money;

let btnArr = [approveExpBtn, approveOptBtn, calculateBtn];

disabledBtn(true);

startCalc.addEventListener('click', () => {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    disabledBtn(false);
});

approveExpBtn.addEventListener('click', () => {
    let sum = 0;

    for (let i = 0; i < expensesInputs.length; i++) {
        let a = expensesInputs[i].value,
            b = expensesInputs[++i].value;

            if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i = i - 1;
            }
            expensesValue.textContent = sum;
    }
});

approveOptBtn.addEventListener('click', () => {
    for (let i = 0; i < optionaltems.length; i++) {
        console.log(optionaltems.length);
        let opt = optionaltems[i].value;
        appData.optionalExpenses[i] = opt;
        optExpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

calculateBtn.addEventListener('click', () => {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudget.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', () => {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savingsFlag.addEventListener('click', () => {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSave.textContent = appData.monthIncome.toFixed(1);
        yearSave.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSave.textContent = appData.monthIncome.toFixed(1);
        yearSave.textContent = appData.yearIncome.toFixed(1);
    }
});

function disabledBtn(flag) {
    for (let i = 0; i < 3; i++) {
        btnArr[i].disabled = flag;
        if(flag == true){
            btnArr[i].style.background = "grey";
        }else{
            btnArr[i].style.background = "linear-gradient(336deg,#ffbd75,#ff964b),linear-gradient(#fff,#fff)";
        }
    }
}

const appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};