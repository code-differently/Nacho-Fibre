
class NachoFibre{

    fibonacci(n){

        //if number is 0 or 1, return that number
       if(n <= 1){
           return n;
       } 
       //find recursive of (n-1), and (n-2)
       else {
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
       }

        // return b;
    }

    kaleb(n){
        //if the number is less than or equal 2, return the number
      if (n <= 2 ) {
          return n;
      }
      //return the recursive of 2(n-2) - (n-1)
      else {
        return 2 * this.kaleb(n - 2) - this.kaleb(n - 1 );
    }
        // return -1;
    }

}

module.exports = NachoFibre;