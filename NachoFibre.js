
class NachoFibre{

    fibonacci(n){
        let num1=0;
        let num2=1;
        let sum;
        if(n==1)
            return num1;
        if(n==2)
            return num2;
        for (i = 1; i < n; i++) {
            sum = num1 + num2
            num1 = num2
            num2 = sum;
        }
        return num2;
    }

    kaleb(n){
        let num1=2;
        let num2= -1;
        let result;
        if(n==1)
            return num1;
        if(n==2)
            return num2;
        for (i = 1; i < n; i++) {
            result = (2*num1) - num2
            num1 = num2
            num2 = result;
        }
        return num2;
    }

}

//module.exports = NachoFibre;

//Pseudo Code

//Problem 1: Fibonacci
// fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)

//1. Define the variables necessary for this problem (num1, num2, sum)
//2. Set the starting values for the variables (num1 = 0, num2 = 1, sum starts as an empty variable)
//3a. If the first inputted value (n) is 1, return the value of num1 (which is value 1 in the sequence)
//3b. If the first inputted value (n) is 2, return the value of num2 (which is value 2 in the sequence)
//4. Using a loop, iterate through the values of the Fibonacci sequence sum = num1 + num2
//5. Reassign num1 to be num2
//6. Reassign num2 to be the sum

//Problem 2: Kaleb Sequence
// kaleb(n) = 2*kaleb(n-2) - kaleb(n-1)

//1. Define the variables necessary for this problem (num1, num2, result)
//2. Set the starting values for the variables (num1 = 2, num2 = -1, result starts as an empty variable)
//3a. If the first inputted value (n) is 1, return the value of num1 (which is value 1 in the sequence)
//3b. If the first inputted value (n) is 2, return the value of num2 (which is value 2 in the sequence)
//4. Using a loop, iterate through the values of the Kaleb sequence result = 2*(num1) - num2
//5. Reassign num1 to be num2
//6. Reassign num2 to be the result


//Functions made for testing logic
function fib(n){
    let num1=0;
    let num2=1;
    let sum;
    if(n==1)
        return num1;
    if(n==2)
        return num2;
    for (i = 1; i < n; i++) {
        sum = num1 + num2
        num1 = num2
        num2 = sum;
    }
    return num2;
}
console.log(fib(6)) //Expected output: 8
console.log(fib(5)) //Expected output: 5
console.log(fib(12)) //Expected output: 144
console.log(fib(17)) //Expected output: 1597

function kal(n) {
    let num1=2;
    let num2= -1;
    let result;
    if(n==1)
        return num1;
    if(n==2)
        return num2;
    for (i = 1; i < n; i++) {
        result = (2*num1) - num2
        num1 = num2
        num2 = result;
    }
    return num2;
}
console.log(kal(6)) //Expected output: 65
console.log(kal(5)) //Expected output: -31
console.log(kal(12)) //Expected output: 4097
console.log(kal(17)) //Expected output: -131071