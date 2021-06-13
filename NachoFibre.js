
class NachoFibre{

    fibonacci(n){
      if (n < 3) return 1;
      else return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  

    kaleb(n){

        // kaleb(0) = 2
        // kaleb(1) = -1
        // kaleb(n) = 2*kaleb(n-2) - kaleb(n-1)

        if (n = 2) return 1;
        // else return this.kaleb*2(n -2 ) - this.kaleb(n - 1);
        else return ((2 * this.kaleb(n-2)) - this.kaleb(n-1));
    }
   
}


module.exports = NachoFibre;