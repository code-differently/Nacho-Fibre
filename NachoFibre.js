
class NachoFibre{
    //declare an array to store fibonacci numbers
    //declare first number of series
    //declare second number of series
    //create "for" loop for sequence

    fibonacci(n){
        let f = new Array (n+2); 
        let i;
        f[0] = 0; 
        f[1] = 1; 
        
        for (i = 2; i <= n; i++) {
            f[i] = f[i-1] + f[i-2];
        }
        return f[n];
    }

    //declare an array to store numbers
    //declare first number of series
    //declare second number of series
    //create "for" loop for sequence

    kaleb(n){
        return -1;
    }

}

module.exports = NachoFibre;