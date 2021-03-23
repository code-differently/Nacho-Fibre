
class NachoFibre {
    // [0, 1, 1, 2, 3, 5, 8]
    fibonacci(n){
        // if the number passed is less than 3, return 1
        // if its the first or second number, the answer will be 1
       if(n < 3) {
           return 1;
       } 
       // create variables for the current and previous number
       let currentNumber = 1;
       let previousNumber = 1;
       // create a loop that starts at index 2 and iterates until the number passed 
       for(let i = 2; i < n; i++) {
           // the next number will be 1 + 1
           let nextNumber = currentNumber + previousNumber;
           // redefine current and previous variable values as loop increments
           previousNumber = currentNumber;
           currentNumber = nextNumber;
       }
        return currentNumber;
    }

    kaleb(n){
        return -1;
    }

}

module.exports = NachoFibre;