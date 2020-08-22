'use strict'

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

const isString = (value) => {
  console.log(value);
  
  if (value !== null && value.trim().length > 0){
    if(!isNumber(value)){
      return true;
    }else {
      return false;
    }
  }else {
    return false; 
  }

}
console.log(isString('9'));
console.log(isString('  qwerty  '));
console.log(isString(null));
let money;

const start = () => {

  do {
    money = +prompt('Ваш месячный доход?');
  }
  while (!isNumber(money))
};

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 5900000,
  period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  budget: money,
  asking: () => {
    // let addExpenses = prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
    // appData.addExpenses = addExpenses.toLocaleLowerCase().split( ", " );

    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    let amount;
    let expenses = [];

    for (let i = 0; i < 2; i++) {

      expenses = prompt('Введите обязательную статью расходов?');

      do {
        amount = prompt('Во сколько это обойдется?');
      }
      while (!isNumber(amount))

      appData.expenses[expenses] = +amount;

    }

  },

  getExpensesMonth: () => {

    for (let key in appData.expenses) {

      appData.expensesMonth += +appData.expenses[key];

    }
    return appData.expensesMonth;

  },
  getBudget: () => {
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);

  },

  getTargetMonth: () => {

    let targetMonth = Math.round(appData.mission / appData.budgetMonth);

    if (targetMonth < 0) {
      console.log('Цель не будет достигнута');
    } else console.log('Cрок достижения цели: ' + targetMonth + ' мес.');

    return targetMonth;
  },
  statusIncome: () => {
    (appData.budgetDay >= 1200) ? console.log('У вас высокий уровень дохода') :
      (appData.budgetDay >= 600 && appData.budgetDay < 1200) ? console.log('У вас средний уровень дохода') :
        (appData.budgetDay < 600) ? console.log('К сожалению у вас уровень дохода ниже среднего') :
          (appData.budgetDay == 0) ? console.log('У вас 0') :
            console.log('Что то пошло не так');
  }

};

appData.asking()
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.statusIncome();

console.log(appData);
