
class NachoFibre{

    fibonacci(n){
        //return -1;

if (n <=1){
    return n;
}else{
    return this.fibonacci(n-1)+this.fibonacci(n-2);
}

    }

    kaleb(n){
        //return -1;

        if (n <=2){
             return n;
        
        }else{
           return (2* this.kaleb(n-2)) - this.kaleb(n-1);

         }

        }
    }

module.exports = NachoFibre;