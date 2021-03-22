





class NachoFibre{
    // 0 = 0
    // 1 = 1
    // 2 = 1
    // 3 = 2
    // 4 = 3
    // 5 = 8
    // set first seq to 0
    // set second seq to 1
    // make new seq = first + second seq
    // first sequence = 2nd seq
    // second seq = new seq
    // loop them
    fibonacci(n){
    //     let firstSequence = 0;
    //     let secondSequence = 1;
    //     let newSequnce = firstSequence + secondSequence;
    //     let firstSequence = secondSequence;
    //     let secondSequence = newSequnce;

        if (n = 0){
            return 0;
        }
        if ( n = 1){ 
            return 1;
        }
        
        if (n > 1){
    //         for( i = 1; i < n; i++){

    //             let newSequnce = firstSequence + secondSequence;
    //             let firstSequence = secondSequence;
    //             let secondSequence = newSequnce;

    //         }
    //     }        
    //     return newSequnce;
    // }
            let fib1 = n - 1;
            let fib2 = n - 2;
            let answer = fib1 + fib2;
            return answer
        }
    }



    kaleb(n){
     // kaleb(0) = 2*
     // kaleb(1) = -1*
     // kaleb(n) = 2\*kaleb(n-2) - kaleb(n-1)*    
     // 2   
     // -1
     // 5
     // -7 
     // 17
     // -31
         
     let variable1 = n-2;
     let variable2 = n-1;
     let thisAnswer = 2 / variable1 - variable2;
     return thisAnswer
    }

}

module.exports = NachoFibre;