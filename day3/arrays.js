// Завдання 4

const deals = [
  { client: "Alpha", amount: 1200, status: "won" },
  { client: "Beta", amount: 800, status: "lost" },
  { client: "Gamma", amount: 2500, status: "won" },
  { client: "Delta", amount: 400, status: "open" },
  { client: "Epsilon", amount: 1500, status: "won" },
  { client: "Luna", amount: 10500, status: "pending"}
];


// 1. Суму всіх виграних угод (filter + reduce).
let dealsWon = deals.filter(item => item.status === "won");
let dealsWonAmount = dealsWon.map(item => item.amount)
let sumDealsWon = dealsWonAmount.reduce((acc, curr) => acc + curr, 0);
console.log("Завдання 1: ", sumDealsWon);

// 2. Масив лише імен клієнтів (map).
let clientNames = deals.map(item => item.client)
console.log("Завдання 2: ", clientNames);

//3. Клієнтів, відсортованих за сумою від найбільшої до найменшої (sort).
function compareAmount(atribute){
  return function(a, b){
    if (a[atribute] > b[atribute]) return -1;
    if (a[atribute] == b[atribute]) return 0;
    if (a[atribute] < b[atribute]) return 1;
  }
} 

const dealsCopy = [...deals];
let highestLowest = dealsCopy.sort(compareAmount('amount'));
console.log("Завдання 3: ", highestLowest);

// 4. Об'єкт, що групує угоди за статусом, наприклад { won: [...], lost: [...], open: [...] } (reduce).
function groupByStatus(arr){
  return arr.reduce((acc, deal)=>{
    if(!acc[deal.status]) {
      acc[deal.status] = [];
    }
    acc[deal.status].push(deal);
    return acc;
  }, {})
}

let dealsByStatus = groupByStatus(deals);
console.log("Завдання 4: ", dealsByStatus);

// 5. Чи є серед угод хоча б одна відкрита (some) і чи всі суми додатні (every).
let someStatus = deals.some((item) => item.status === 'open');
console.log("Завдання 5.1: ", someStatus);

let everyAmount = deals.every((item) => item.amount > 0);
console.log("Завдання 5.2: ", everyAmount);