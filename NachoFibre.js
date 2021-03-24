
class NachoFibre {

    fibonacci(n) {
        if (n <= 1 || isNaN(n)) return 0;

        // Start at 2nd value in fibonacci sequence.
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

        // Start at 3rd value in Kaleb sequence.
        // let num = 0, prevNum = -1, prevPrevNum = 2;
        // for (let i = 2; i <= n; i++) {
        //     num = prevPrevNum * 2 - prevNum;
        //     prevPrevNum = prevNum;
        //     prevNum = num;
        // }
        //return num;

        const kalebAtTheClub = (index, prevNum, prevPrevNum) => {
            if (index === n + 1) return prevNum;
            const num = (prevPrevNum * 2) - prevNum;
            return kalebAtTheClub(++index, num, prevNum);
        }
        return kalebAtTheClub(2, -1, 2);
    }
}

module.exports = NachoFibre;