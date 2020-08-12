let money = 150000, 
    income = 'Дивиденды', 
    addExpenses = 'Продукты, Комуналка, Ипотека, Машина, Развлечения',
    deposit = true, 
    mission = 5900000, 
    period = 12;

let budgetDay = money / 30;

console.log( typeof money );
console.log( typeof income );
console.log( typeof deposit );
console.log( addExpenses.length );
console.log( 'Период равен ' + period + ' месяцев и Цель заработать '+ mission + ' рублей' );
console.log( 'Дневной бюджет: ' + budgetDay + ' рублей' );
console.log( addExpenses.toLowerCase() );
console.log( addExpenses.split( ", " ) );

let question = +prompt( 'Ваш месячный доход?' );
money = question;
console.log(  money );

let question_2 = prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
addExpenses = question_2;
console.log(  addExpenses );

let question_3 = confirm( 'Есть ли у вас депозит в банке?');
deposit = question_3;
console.log(  deposit  );

let expenses1 = prompt( 'Введите обязательную статью расходов?' );
let expenses2 = prompt( 'Введите обязательную статью расходов?' );
let amount1 = +prompt( 'Во сколько это обойдется?' );
let amount2 = +prompt( 'Во сколько это обойдется?' );  

let budgetMonth;
budgetMonth = money - (amount1 + amount2);

console.log( 'Итого с учетом всех расходов: ' + budgetMonth );
console.log( 'Цель будет достигнута через: ' + Math.round( mission / budgetMonth ) + ' мес.');

budgetDay = Math.floor( budgetMonth / 30 )
console.log( 'Ежедневный доход составляет: ' + budgetDay + ' руб.');

let budgetDayTotal = 
      ( budgetDay >= 1200 ) ? console.log( 'У вас высокий уровень дохода' ):
      ( budgetDay >= 600 && budgetDay < 1200 ) ? console.log( 'У вас средний уровень дохода' ):
      ( budgetDay < 600 ) ? console.log( 'К сожалению у вас уровень дохода ниже среднего' ):
      ( budgetDay == 0 ) ? console.log( 'У вас 0' ):
      console.log( 'Что то пошло не так' );
