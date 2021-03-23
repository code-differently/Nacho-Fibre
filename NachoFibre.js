
class NachoFibre{

    fibonacci(n){
        const fibb = (n) => (n <= 1 ? 1 : fibb(n - 1) + fibb(n - 2));
        return fibb(n-1);
    }

    kaleb(n){
        return -1;
    }

}

module.exports = NachoFibre;