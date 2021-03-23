
/*
*For problem 1 and 2: Both will be solved the same way as they only have minor differences.
*Create two variables storing the first two terms of the sequence. (previous value and current value) .. (for each fibonacci & kaleb)
*Create a variable to hold the sum of the two terms.
* For fibonacci, Loop through the index of the fibonacci sequence and return the current value + previous value and store those values in the sum variable
* Start the loop at index 2 since we already know the first two terms. 
*For Kaleb, loop through the index of the sequence, subtract value of current Number from previous Number and multiply by 2;
*Start the loop at index 2 since we already know the first two terms.

*/
class NachoFibre{

    fibonacci(n){ 
        let prevNum = 0;
        let currentNum = 1;
        let fibonacciSum = 0;
        for (let i = 2; i <= n; i++) {
            fibonacciSum = prevNum + currentNum;
            prevNum = currentNum;
            currentNum = fibonacciSum;
        }
        return fibonacciSum;
    }

    kaleb(n){
        let prevNum = 2;
        let currentNum = -1;
        let kalebSum = 0;
        for (let i = 2; i <= n; i++) {
            kalebSum = 2 * prevNum - currentNum;
            prevNum = currentNum;
            currentNum = kalebSum;
        }
        return kalebSum;
    }

}

module.exports = NachoFibre;