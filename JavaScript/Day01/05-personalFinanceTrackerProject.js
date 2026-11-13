// the Day01 finale project

const monthlyIncome = 4000;
const rent = 300;
let food = 500;
let transport = 100;
let internet = 200;
let otherExpenses = 200;

let totalExpenses = rent + food + transport + internet + otherExpenses;
let remainingMoney = monthlyIncome-totalExpenses;
let savingsPercentage = (remainingMoney/monthlyIncome)*100;

console.log(`Income: ${monthlyIncome}`);
console.log(`Expenses: ${totalExpenses}`);
console.log(`Remaining: ${remainingMoney}`);
console.log(`Savings: ${savingsPercentage} %`);