
class NachoFibre{
// if n is at position 1,2 it will equal 1  return 1
// otherwise retun the sum of the index at position-1 + index at position -2
    fibonacci(n){
        if(n<3)
        return 1;
        else return this.fibonacci(n-1)+ this.fibonacci(n-2);
    }

    // fibonacci (n, cache){
    //     let cache = cache|| [];
    //     if (cache[n])
    //     return cache[n];
    //     else {
    //         if (n < 3) return 1;
    //         else { cache[n]= fibonacci(n-1, cache)+fibonacci(n-2, cache);
    //         }
    //     }
    //     return cache[n]
    // }


    kaleb(n){
        if(n=0) return 2;
        else if (n=1) return -1;
       else return 2*this.kaleb(n-2)-this.kaleb(n-1);
    }

}

module.exports = NachoFibre;