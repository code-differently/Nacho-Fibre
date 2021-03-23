
class NachoFibre{

    fibonacci(n){
      if (n < 3) return 1;
      else return fibonacci(n - 1) + fibonacci(n - 2);
    }
  

    kaleb(n){
        if (n < 3) return 1;
        else return kaleb(n -1 ) + kaleb(n - 2);
    }
   
}


module.exports = NachoFibre;