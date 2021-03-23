
class NachoFibre{

    fibonacci(n){
      if (n < 3) return 1;
      else return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  

    kaleb(n){
        if (n < 3) return 1;
        else return this.kaleb(n -1 ) + this.kaleb(n - 2);
    }
   
}


module.exports = NachoFibre;