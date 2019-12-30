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

    optionaltems = document.querySelectorAll('optionalexpenses-item'),
    
    chooseIncome = document.querySelector('choose-income'),
    savingsFlag = document.querySelector('#savings'),
    sumValue = document.querySelector('choose-sum'),
    percentValue = document.querySelector('choose-percent'),
    yearValue = document.querySelector('year-value'),
    monthValue = document.querySelector('month-value'),
    dayValue = document.querySelector('day-value');