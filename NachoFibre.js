
class NachoFibre {

    fibonacci(n) {
        if (n <= 1 || isNaN(n)) return 0;

        // Start at index 1 in fibonacci sequence.
        let sum = 0, prevSum = 1, prevPrevSum = 0;
        while (n > 1) {
            sum = prevSum + prevPrevSum;
            prevPrevSum = prevSum;
            prevSum = sum;

            n--;
        }
        return sum;
    }

    kaleb(n) {
        if (n <= 0 || isNaN(n)) return 0;
        else if (n === 1) return -1;

        // Start at index 2 in Kaleb sequence.
        let sum = 0, prevSum = -1, prevPrevSum = 2;
        for (let i = 2; i <= n; i++) {
            sum = prevPrevSum * 2 - prevSum;
            prevPrevSum = prevSum;
            prevSum = sum;
        }
        return sum;
    }
}

module.exports = NachoFibre;