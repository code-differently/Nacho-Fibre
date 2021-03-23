
class NachoFibre{

    fibonacci(n){
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        } else {
            return this.fibonacci(n-1) + this.fibonacci(n-2);
        }
    }

    kaleb(n){
        if (n == 0) {
            return 2;
        } else if (n == 1) {
            return -1;
        } else {
            return ((2 * this.kaleb(n-2)) - this.kaleb(n-1))
        }
    }

}

module.exports = NachoFibre;