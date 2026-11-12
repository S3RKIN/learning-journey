// Завдання 3


let once = function(fn){
    let isCalled = false;
    let result;
    return function(...args){
        if (isCalled === false){
            isCalled = true;
            result = fn(...args);
            return result;
        }
        return result
    } 
}



// Test
const init = once(() => {
  console.log("Ініціалізація");
  return 42;
});
console.log(init()); // "Ініціалізація", потім 42
console.log(init()); // лише 42
console.log(init()); // лише 42
// +


// Test 2
const init2 = once((a, b) => {
  console.log("Ініціалізація");
  return a + b;
});
console.log(init2(2, 3));   // "Ініціалізація", потім 5
console.log(init2(10, 20)); // лише 5
console.log(init2());       // лише 5
// +