const money = 150000, 
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