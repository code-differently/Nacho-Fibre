
class NachoFibre{
//  setup function that runs fibonacci seq
//  loop through function to add 
    
    fibonacci(n) {
        // conditional to se the value of beginning numbers
        if (n === 0 || n === 1) { return 1; }

        let prev1 = 1;
        let prev2 = 1;
        let current;

        // loop thru to add numbers
        for (let i = 2; i <= n; i++) {
            current = prev1 + prev2;
                            
            // update numbers when loop comes back around
            prev2 = prev1;
            prev1 = current;
        }
        
    return current;
}

fibonacci(2)




    kaleb(n){
        return -1;
    }

}

module.exports = NachoFibre;




// class NachoFibre{
//     //  setup function that runs fibonacci seq
//     //  loop through function to add 
//         fibonacci(n){
    
//             return -1;
//         }
    
    
    
    
    
//         kaleb(n){
//             return -1;
//         }
    
//     }
    
//     module.exports = NachoFibre;