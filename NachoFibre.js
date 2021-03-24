
class NachoFibre{

fibonacci(n){
    // fibonacci(0) = 0
    if (n == 0) {
     return 0;
    }
   
    // fibonacci(1) = 1
    if (n == 1) {
    return 1;
    }

    // fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
    let fibN2 = 0
    let FibN1 = 1
    let FibN;

    for(let i =2; i <= n; i++){
        fibN = fibN1 + fibN2;
        fibN2 = fibN1;
        fibN1 = fibN;
    }

    return fibN; 

    }
  

kaleb(n){

    //kaleb(0) = 2
    if(n == 0){
        return 2;
    }

    //kaleb(1) = -1
    if(n == 1){
        return -1;
    }
    //kaleb(n) = 2\*kaleb(n-2) - kaleb(n-1)
    let kalebN2 =2;
    let kalebN1 =-1;
    let KalebN;

    for(let i = 2; i <= n; i++){
        kalebN = 2*kalebN2 - kalebN1;
        kalebN2 = kalebN1;
        kalebN1 = kalebN;
    }

    return kalebN;

    }

};

module.exports = NachoFibre;