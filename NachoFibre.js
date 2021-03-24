
class NachoFibre{
    fibonacci(n){
        if(n < 3) return 1;
        else return fibonacci(n -1) + fibonacci(n-2)
    }
    kaleb(n){
        if (n < 2) return -1;
        else return 2*kaleb(n-2) - kaleb(n-1)
    }
}
nachoFibre.fibonacci(n)

module.exports = NachoFibre;