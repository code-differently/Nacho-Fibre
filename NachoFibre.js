
class NachoFibre{

    // First, set an array which holds the first two given values in the sequence (0 and 1).
    // Then, create a loop where the index starts at 2 (as we already know the values of the 0 and 1 indices).
    // Each time we iterate through the loop, calculate a new value that is equal to the sum of the previous two values.
    // Push that value into the array and continue on until the index becomes equal to n.
    // Finally, return the value that is at position n in the array. This should be the correct answer.
    fibonacci(n){
        const sequence = [0, 1];
        for (let i = 2; i <= n; i++) {
            const currNum = sequence[i - 1] + sequence[i - 2];
            sequence.push(currNum);
        }
        return sequence[n];
    }

    // The setup for this solution should theoretically be very similar to the previous one.
    // First, create an array which holds the first two given values in the sequence (2 and -1).
    // Then, create a loop where the index starts at 2 (as, once again, we know the first two values already).
    // Each time we iterate through the loop, calculate a new value that is equal to the twice the value before the 
    // previous value, minus the previous value. 2(i - 2) - (i - 1)
    // Push this value into the array each time and continue until the index is equal to n.
    // Finally, return the value at the index of n in the array. This should be the correct answer.
    kaleb(n){
        const sequence = [2, -1];
        for (let i = 2; i <= n; i++) {
            const currNum = (2 * sequence[i - 2]) - sequence[i - 1];
            sequence.push(currNum);
        }
        return sequence[n];
    }

}

module.exports = NachoFibre;