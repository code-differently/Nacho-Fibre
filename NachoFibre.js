
class NachoFibre{

//     if n is less or eq to 1 means for example n = 1
// then simply return n which is 1
// or if it is less than 1 means suppose 0 then return n =0

// line 10:

// if n is greater than 1 means for example lets take n = 2
// return (n-1) + (n-2)
// (2-1) + (2-2)
// result is 1

// if n = 3
// (3-1)+ (3-2) // 3

// if n =4
// (3)+(2) // 5
// and so on


    fibonacci(n){
        
            if (n<=1){
            return n;
                    }else{
    return this.fibonacci(n-1)+this.fibonacci(n-2);
                        }
                }

// * *kaleb(0) = 2*
// * *kaleb(1) = -1*
// After these first two elements, each subsequent element is equal to twice the previous previous term minus the previous term
// i.e.  *kaleb(n) = 2\*kaleb(n-2) - kaleb(n-1)*

// [2, -1, 5, -7, 17, -31, 65]
// looking at the line 32 and 33, if we add 1 on left side value decreses by 3 on right side
// so -1+3 is 2
// looking at array as first value diff is 3 so difference between each value pair is multiple of 2
//i.e. 3, 6, 12, 24, 48, 96 and first value is positive 2nd is neg 3rd is positive again and so on.


    kaleb(n){
        return -1;
    }

}

module.exports = NachoFibre;