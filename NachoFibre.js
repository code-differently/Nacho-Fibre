
class NachoFibre{

    fibonacci(n){
        if(n==1)
            return 0;
        if (n == 2)
            return 1;
        return this.fibonacci(n - 1) + fibonacci(n - 2);
    }

    kaleb(n){
        return -1;
    }

}

module.exports = NachoFibre;