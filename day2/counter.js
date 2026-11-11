// Завдання 1

function createCounter(num = 0){

    const backup = num;
    return {
        increment(){
            return num += 1; // num = num + 1 || num++
        },
        decrement(){
            return num -= 1; // num = num - 1 || num-- 
        },
        getValue(){
            return num;
        },
        reset(){
            return num = backup;
        }
    }
}

const a = createCounter();

a.increment();
a.increment();
console.log(a.getValue()); // 2

const d = createCounter(10);
d.decrement();
console.log(d.getValue()); // 9
console.log(a.getValue()); // 2
console.log(a.count); // undefind

// reset
a.reset();
console.log(a.getValue());

d.reset();
console.log(d.getValue()); // 10





// return { increment(){
//         return num = num + 1;
//     }, decrement(){
//         return num - 1;
//     }, getValue(){
//         return num;
//     } }