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

let appData = {
      income: {},
      addIncome: [],
      expenses: {},
      addExpenses: [],
      deposit: false,
      mission: 5900000,
      period: 3,
      expensesMonth: 0,
      asking: () => {
            // let addExpenses = prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
            // appData.addExpenses = addExpenses.toLocaleLowerCase().split( ", " );

            appData.deposit = confirm( 'Есть ли у вас депозит в банке?');

            let amount;
            let expenses = [];

            for ( let i = 0; i < 2; i++ ) {
      
                  expenses = prompt( 'Введите обязательную статью расходов?' );
      
                  do {
                        amount = prompt('Во сколько это обойдется?');  
                  }
                  while ( !isNumber( amount ) ) 

                  appData.expenses[expenses] = +amount;
                   
            } 
            
      },
      budget: money,
      budgetMonth: 0,
      getExpensesMonth: () => {
            
            for ( let key in appData.expenses ) {

                  appData.expensesMonth = +appData.expenses[key] + +appData.expenses[key];
              
            }   
             return appData.expensesMonth;
                                 
      },
      getBudget: () => {
            return appData.budget - appData.expensesMonth;           
      },
      budgetDay: () => {
            return appData.getBudget() / 30;  
      },
      getTargetMonth: () => {
       
            let targetMonth = Math.round( appData.mission / appData.getBudget() );
      
            if ( targetMonth < 0 ) {
                  console.log( 'Цель не будет достигнута' );
            } else console.log( 'Cрок достижения цели: ' + targetMonth +' мес.' );
      
            return targetMonth;   
      },
      statusIncome: () => {
            let budgetDayTotal = 
                  ( appData.budgetDay() >= 1200 ) ? console.log( 'У вас высокий уровень дохода' ):
                  ( appData.budgetDay() >= 600 && appData.budgetDay() < 1200 ) ? console.log( 'У вас средний уровень дохода' ):
                  ( appData.budgetDay() < 600 ) ? console.log( 'К сожалению у вас уровень дохода ниже среднего' ):
                  ( appData.budgetDay() == 0 ) ? console.log( 'У вас 0' ):
                  console.log( 'Что то пошло не так' );
      }

};

appData.asking()
 
const foos = () => {

       
};


appData.getTargetMonth();
console.log( 'Расходы за месяц: ' + appData.getBudget() +' руб.' );     
appData.statusIncome();

console.log(appData.expensesMonth);

for ( let value in appData ) {

     console.log("Свойство:  " + value + " Значение: "  + appData.value ); 
        
      }  
