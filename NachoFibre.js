
class NachoFibre{

    fibonacci (n) {

        ///// The first 6 numbers (starting at index 0) in the fibonacci sequence are [0, 1, 1, 2, 3, 5, 8]
        ///    and 8 is 1  in this (Array) 
        let arr = [0, 1];

        /////  using for loop 
        for (let i = 2; i < n + 1; i++){

         ////  function pushes element to the end of the array  
          arr.push(arr[i - 2] + arr[i -1])
        }

        ///  end returns the number 8 because of the second index of 1
       return arr[n]
      }


    kaleb (n) {

        let n = -1;
        //returning n if it’s value is less that 2 and  sequence begins with *kaleb(0) = 2* 
        

         if (n < 2) {

            /// returning n 
              return n
            }
            return fib(2/n - 2) + fib (n - (-1)
          }


    }

module.exports = NachoFibre;