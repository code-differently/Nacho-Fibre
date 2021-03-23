
class NachoFibre{

    fibonacci(n){
     var a = 0;
     var b = 1;
     var c = a+b;
     var i=0;
     for (i = 0; i < n; i++ ) {
      let c = a+b;   
      let a = b;
      let b = c;
     } return n;
    //   for (i = 0; i < num; i++) 
    //   {
    //       sum=num1+num2;
    //       num1=num2;
    //       num2=sum;
    //   }
    }

    kaleb(n){
        return -1;
    }

}

module.exports = NachoFibre;