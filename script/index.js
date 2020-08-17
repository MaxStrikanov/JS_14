'use strict'
const isNumber = (n) => {
      return !isNaN(parseFloat(n)) && isFinite(n)
}
let money;
const start = () => {

      do {
            money = prompt( 'Ваш месячный доход?' ); 
      }
      while ( !isNumber( money ) )
};

start();

let expenses1,
    expenses2;

let appData = {
      income: {},
      addIncome: [],
      expenses: {},
      addExpenses: [],
      deposit: false,
      mission: 5900000,
      period: 3,
      asking: () => {
            let addExpenses = prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
            appData.addExpenses = addExpenses.toLocaleLowerCase().split( ", " );
            appData.deposit = confirm( 'Есть ли у вас депозит в банке?');

            let sum = 0;

            for ( let key = 0; key < 2; key++ ) {
      
                  let questionHowMuch = 'Во сколько это обойдется?';
      
                  appData.expenses[key] = prompt( 'Введите обязательную статью расходов?' );
      
                  do {
                        sum = prompt(questionHowMuch);  
                  }
                  while ( !isNumber( sum ) ) 
      
                  sum = +sum + +sum;
                   
            } 
      
            return +sum; 
      },
      budget: money,
      budgetMonth: 0,
      getExpensesMonth: () => {
            let sum = 0;
            for ( let key in appData.expenses[key] ) {
                  sum += appData.expenses;
            }
                    
      },
      getAccumulatedMonth: () => {
            return appData.budget - appData.getExpensesMonth();           
      },
      budgetDay: () => {
            return appData.getAccumulatedMonth() / 30;  
      },
      getTargetMonth: () => {
       
            let targetMonth = Math.round( appData.mission / appData.getAccumulatedMonth() );
      
            if ( targetMonth < 0 ) {
                  console.log( 'Цель не будет достигнута' );
            } else console.log( 'Cрок достижения цели: ' + targetMonth +' мес.' );
      
            return targetMonth   
      },
      statusIncome: () => {
            let budgetDayTotal = 
                  ( appData.budgetDay() >= 1200 ) ? console.log( 'У вас высокий уровень дохода' ):
                  ( appData.budgetDay() >= 600 && budgetDay < 1200 ) ? console.log( 'У вас средний уровень дохода' ):
                  ( appData.budgetDay() < 600 ) ? console.log( 'К сожалению у вас уровень дохода ниже среднего' ):
                  ( appData.budgetDay() == 0 ) ? console.log( 'У вас 0' ):
                  console.log( 'Что то пошло не так' );
      },
      expensesMonth: {}
};

appData.asking()

appData.getTargetMonth();
console.log( 'Расходы за месяц: ' + appData.getAccumulatedMonth() +' руб.' );
console.log( 'Бюджет на день: ' + Math.round( appData.budgetDay() ));      
appData.statusIncome();
