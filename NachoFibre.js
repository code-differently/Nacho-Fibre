console.log('and again...')
class NachoFibre{
    constructor(fibo, kale)    {   
        this.fibo = fibo;
        this.kale = kale;
    }

    // set prev to 0 & sum to 1
    // add the last two numbers until you get to n
    // return final sum

    fibonacci(n){
        let prev = 0;
        let curr = 1;
        let result = 0;
        for (let i=1; i<n; ++i)    {
            result = curr + prev;
            prev = curr;
            curr = result;
        } 
        console.log(result);
        return result;
    }

    // set prev to 2 & curr to -1
    // double the prev term minus the curr term, n times
    // return final result

    kaleb(n){
        let prev = 2;
        let curr = -1;
        let result = 0;
        for (let i=1; i<n; ++i)    {
            result = 2*prev - curr;
            prev = curr;
            curr = result;
        } 
        console.log(result);
        return result;
    }

}

// let assess = new NachoFibre(6,6); 
// console.log(assess.fibonacci(6));
// console.log(assess.kaleb(6));
// console.log(assess);

module.exports = NachoFibre;