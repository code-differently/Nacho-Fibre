class NachoFibre {

    fibonacci(n) {
        // fibonacci(0) = 0 
        // fibonacci(1) = 1 
        // fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)
        // Given * n *, return the * nth * number in the sequence.

        let fibZero = 0;
        let fibOne = 1;
        let total;

        for (let i = 1; i < n; i++) {
            total = fibZero + fibOne;
            fibZero = fibOne;
            fibOne = total;
        }
        return fibOne;
    }

    kaleb(n) {

        // kaleb(0) = 2 
        // kaleb(1) = -1 
        // kaleb(n) = 2\* kaleb(n - 2) - kaleb(n - 1)
        // Given * n *, return the * nth * number in the sequence. 

        let kalebZero = 2;
        let kalebOne = -1;
        let total;

        for (let i = 1; i < n; i++) {
            total = (2 * kalebZero) - kalebOne;
            kalebZero = kalebOne;
            kalebOne = total;
        }

        return kalebOne;
    }

}

module.exports = NachoFibre;