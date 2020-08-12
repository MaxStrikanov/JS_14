let money = 150000, 
    income = 'Дивиденды', 
    addExpenses = 'Продукты, Комуналка, Ипотека, Машина, Развлечения',
    deposit = true, 
    mission = 5900000, 
    period = 12,
    budgetDay;

money = +prompt( 'Ваш месячный доход?', 150000 );

addExpenses = prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую', 'Продукты, Комуналка, Ипотека, Машина, Развлечения' ).split( ", " );
console.log(addExpenses);

deposit = confirm( 'Есть ли у вас депозит в банке?');

let expenses1 = prompt( 'Введите обязательную статью расходов?', 'Кварплата' );
let expenses2 = prompt( 'Введите обязательную статью расходов?', 'Продукты' );
let amount1 = +prompt( 'Во сколько это обойдется?', 20000 );
let amount2 = +prompt( 'Во сколько это обойдется?', 10000 );  

const getExpensesMonth = () => {
    return amount1 + amount2;            
};


const getAccumulatedMonth = () => {
      return money - ( amount1 + amount2 );           
};

let accumulatedMonth = getAccumulatedMonth();

const getTargetMonth = () => {
      return Math.round( mission / accumulatedMonth );     
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
      
console.log( 'Cрок достижения цели: ' +getTargetMonth() +' мес.' );
console.log( 'Расходы за месяц: ' + getExpensesMonth() +' руб.' );
console.log( 'Бюджет на день: ' + budgetDay );      
getStatusIncome();