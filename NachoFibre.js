
class NachoFibre{

    fibonacci(n){
        let arr = [0,1];    //array with seven element 
        for (let i = 2; i < n + 1; i++){   //read the array from the third element
          arr.push(arr[i - 2] + arr[i -1]) //add one more element on the array using the push method also add the selected elements
        }
       return arr[n]       
      }

      
    

    kaleb(n){
        let arr = [2,-1];
        for (let i = 2; i < n + 1; i++){
            arr.push(2 * arr[i - 2] - arr[i -1])
        }
        return arr[n]
    }

}

module.exports = NachoFibre;