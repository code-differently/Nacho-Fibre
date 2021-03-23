
class NachoFibre{

    //The Fibonacci sequence begins with fibonacci(0) = 0 and fibonacci(1) = 1 as its first and second terms
    //After these first two elements, each subsequent element is equal to the sum of the previous two elements.
    //Given n, return the nth number in the sequence.

    /* 

    1. make a sequence array to hold the sequence
    2. create logic to make the squence pattern (0, 1, n = sum of previous 2)
    3. loop thru array to add the sequence pattern
    4. find a way to allow the input # to target the index at it's values( if input is 6, what is the sequence number at squence[6]?)

    */
    


    fibonacci(n){
        
        let sequence = [0, 1];
        for (let i = 0; i < sequence.length; i++) {
            if ( i == 1){
                let sum = 1; 
                sequence.push(sum);
            }
            return sequence; 
        }
    }

    kaleb(n){
        return -1;
    }

}

module.exports = NachoFibre;