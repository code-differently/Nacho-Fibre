
class NachoFibre{

    fibonacci(n){
        //write a formula to replicate fibonacci formula
        //use the formula that requires golden ration and define golden ratio as a variable
        var goldenRatio = ( 1 + Math.sqrt(5) ) / 2;
        //find the the first value needed by formula 
        var firstValue = Math.pow(goldenRatio, n);
        //find the the first value needed by formula 
        var secondValue = Math.pow( (1 - goldenRatio), n);
        //subtract first value from second value then divide by the square root of 5
        var value = ( firstValue - secondValue )/Math.sqrt(5);
        return Math.floor(value);
    }

    kaleb(n){
            // var a = 2, b = -1, kterm;
          
            // while (n >= 0){
            //   kterm = a;
            //   a = b + a;
            //   b = kterm;
            //   n--;
            // }
          
            // return b;
            if (n = 0) { return 2;
                else { (n = 1) return -1; }


                else { 2(kterm(n - 2)) + kerm(n - 1); }
            }
          }

}

module.exports = NachoFibre;