
class NachoFibre{

    fibonacci(n){
        const fibb = (n) => (n <= 1 ? 1 : fibb(n - 1) + fibb(n - 2));
        return fibb(n-1);
    }

    kaleb(n){
        if (n==0){
             return 2;
       }
         if (n==1){
             return -1;
        }
        return 2*this.kaleb(n-2) - this.kaleb(n-1);

    }       
      

}

module.exports = NachoFibre;