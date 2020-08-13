let money, 
    income = 'Дивиденды', 
    addExpenses = 'Продукты, Комуналка, Ипотека, Машина, Развлечения',
    deposit = true, 
    mission = 5900000, 
    period = 12,
    budgetDay;

let expenses = [];

addExpenses = prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую', 'Продукты, Комуналка, Ипотека, Машина, Развлечения' ).split( ", " );
console.log(addExpenses);

deposit = confirm( 'Есть ли у вас депозит в банке?');

const isNumber = (n) => {
      return !isNaN(parseFloat(n)) && isFinite(n)
}

const start = () => {

      do {
            money = prompt( 'Ваш месячный доход?' ); 
      }
      while ( !isNumber( money ) )
};

start();

const getExpensesMonth = () => {
      let sum = 0;

      for ( let i = 0; i < 2; i++ ) {
            
            expenses[i] = prompt( 'Введите обязательную статью расходов?' );
            sum = prompt( 'Во сколько это обойдется?' );  
            
            while ( !isNumber( sum ) ) {
                  sum += prompt( 'Во сколько это обойдется?' );   
            }           
      } 
      console.log(expenses);
      return sum; 
       
};

let expensesAmount = getExpensesMonth();

const getAccumulatedMonth = () => {
      return money - expensesAmount;           
};

let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = () => {
       
      let targetMonth = Math.round( mission / accumulatedMonth );

      if ( targetMonth < 0 ) {
            console.log( 'Цель не будет достигнута' );
      } else console.log( 'Cрок достижения цели: ' + targetMonth +' мес.' );

      return targetMonth   
};

budgetDay = accumulatedMonth / 30;

let showTypeOf = ( data ) => {
      console.log( data, typeof(data) );
};

showTypeOf( money );
showTypeOf( income );
showTypeOf( deposit );

const getStatusIncome = () => {
      let budgetDayTotal = 
            ( budgetDay >= 1200 ) ? console.log( 'У вас высокий уровень дохода' ):
            ( budgetDay >= 600 && budgetDay < 1200 ) ? console.log( 'У вас средний уровень дохода' ):
            ( budgetDay < 600 ) ? console.log( 'К сожалению у вас уровень дохода ниже среднего' ):
            ( budgetDay == 0 ) ? console.log( 'У вас 0' ):
            console.log( 'Что то пошло не так' );
      };

getTargetMonth();
console.log( 'Расходы за месяц: ' + expensesAmount +' руб.' );
console.log( 'Бюджет на день: ' + Math.round( budgetDay )) ;      
getStatusIncome();