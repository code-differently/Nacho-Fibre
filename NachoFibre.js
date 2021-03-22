
class NachoFibre {

    fibonacci(n) {
        // declare variable to hold fibonacci output
        let fibonacci;
        
        // populate 1st two index's  with known numbers and cycle throgh and populate remaining index's
        for (let i = 0, j = 2; i < 2, j < n; i++, j++) {
            fibonacci[i] = i;
            fibonacci[j] = (j - 1) + (j - 2);
        }
        //output result
        //console.log(fibonacci)
        return fibonacci;
    }

    kaleb(n) {
        return -1
    }

}

module.exports = NachoFibre;