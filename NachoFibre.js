
class NachoFibre{

    // The first number is f[0] = 0
    // The seond number is f[1] = 1
    // Any f[n] = f[n-1] + f[n-2]
    // The recursive solution is the brute force solution which gives us O(n^2) time complexity
    // A better solution is called Memoized Fibonacci where we use an array as a cache and get O(n) time complexity
    fibonacci(n){
        if(n < 3) return 1;
        else return this.fibonacci(n-1) + this.fibonacci(n-2);
    }
    // The first number is k[0] = 2
    // The second number is k[1] = -1
    // Any k[n] = 2*k(n-2) - k(n-1)
    // Again, using recursion gives us O(n^2), unless we use an array as a cache which give us O(n)
    kaleb(n){
        if (n === 0) return 2;
        else if (n === 1) return -1; 
        else return (2*(this.kaleb(n-2)) - (this.kaleb(n-1)));
    }

}

module.exports = NachoFibre;