
class NachoFibre{

    fibonacci(n){
        if(n == 0)
            return 0;

        if(n == 1)
            return 1;

        let numLast = 0;
        let numCurrent = 1;
        let fiboNum = 0;
        for(let i = 2; i <= n; i++){
            fiboNum = numLast + numCurrent;
            numLast = numCurrent;
            numCurrent = fiboNum;
        }

        return fiboNum;
    }

    kaleb(n){
        let numLast = 2;
        let numCurrent = -1;
        let kalebNum = 0;
        for(let i = 2; i <= n; i++){
            kalebNum = 2 * (numLast - numCurrent);
            numLast = numCurrent;
            numCurrent = kalebNum;
        }

        return kalebNum;
    }

}

module.exports = NachoFibre;