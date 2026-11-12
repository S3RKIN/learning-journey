let debounce = function(fn, delay = 1500){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{fn(...args)}, delay);
    }   
}


// const log = debounce(() => console.log("Виклик!"), 500);
// log();
// log();
// log(); // у консолі має з'явитися один «Виклик!» приблизно через 500 мс
// +



const search = debounce((text) => console.log("Шукаю:", text), 1500);
search("a");
search("ab");
search("abc"); // очікуємо "Шукаю: abc", а виведе "Шукаю: undefined"






// const log = debounce((text) => console.log("Виклик:", text), 500);
// log("a");
// log("b");
// log("c"); // через 500 мс в консолі лише: Виклик: c

// setTimeout(() => log("d"), 1000); // окремий виклик: Виклик: d