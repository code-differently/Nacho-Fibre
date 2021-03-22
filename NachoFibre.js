
class NachoFibre{

    fibonacci(n){

       if(n <= 1){
           return n;
       } else {
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
       }

        // return b;
    }

    kaleb(n){
      if (n<= 1) {
          return n;
      }
      else {
        return 2 * this.kaleb(n - 2) - this.kaleb(n - 1 );
    }
        // return -1;
    }

}

module.exports = NachoFibre;