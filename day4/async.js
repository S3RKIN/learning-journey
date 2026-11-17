// Завдання з сайту https://uk.javascript.info/promise-basics#zatrimka-na-promisakh

function delay1(ms) {
  return a = new Promise(function(resolve, reject){
    setTimeout(() => {resolve('result')}, ms) // моє рішення

  })
}

// delay1(3000).then(() => console.log('виконалось через 3 секунди'));

function delay2(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); // правильне на сайті
}

// delay2(3000).then(() => console.log('виконалось через 3 секунди'));


// Завдання 5

// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");
// Result: 1, 4, 3, 2

// 5.1
function delay(ms) {
  return a = new Promise(function(resolve){
    setTimeout(() => {resolve()}, ms)
  })
}

// delay(1000).then(() => console.log('Минула секунда')); // +

// 5.2
async function delayAsync(ms) {
    console.log('Чекаємо...');
    await delay(ms);
    console.log("Минула секунда");
}  

// delayAsync(1000); // +


// 5.3
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(responce);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const users = await response.json();
        // console.log(users);
        return users.map(item => item.name);
    } catch(error){
        console.log("Помилка: ", error.message);
        return [];
    };
}

// const userNames = await getUsers(); // не зовсім вірно

// getUsers().then(console.log); // +

// Присвоєння значення
async function main() {
  const names = await getUsers();
  console.log(names);
}
// main();

// 5.4 Promise.all
let urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts'
]

async function fetchJson(url){ 
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP ${response.status}`);
        } 
        return await response.json();
    } catch(error) {
        console.log("Помилка: ", error.message);
        return [];
    }
    
}


async function getData() {
    const promises = urls.map(url => fetchJson(url));
    const [users, posts] = await Promise.all(promises);
    const counts = posts.reduce((acc, curr)=>{
        acc[curr.userId] = (acc[curr.userId] || 0) + 1;        
        return acc;
    }, {})

    users.forEach(user => {
        console.log(`${user.name}: ${counts[user.id]} постів`);
    });
}

getData();

