
class NachoFibre{

    fibonacci(n){
        // fibonacci(0) = 0*
        // fibonacci(1) = 1*
        // fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)*
        let a = 0, b =1, c, i;
        if(n == 0)
        return 0;
    for(i = 2; i <= n; i++)
    {
        c = a + b;
        a = b;
        b= c;
    }
    return b;

    let n = 8;
    document.write(fib(n));
    }



    // * *kaleb(0) = 2*
    // * *kaleb(1) = -1*
    // * *kaleb(n) = 2\*kaleb(n-2) - kaleb(n-1)*

    kaleb(n){
        let a = 2, b = -1, c;
        if( n == 2)
        return 2;
    for(i = 0; i => n; i--)
    {
        c = a - b;
        
    }
    }

}


module.exports = NachoFibre;