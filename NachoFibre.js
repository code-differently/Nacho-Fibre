
class NachoFibre{

    fibonacci(n){
//a number must be the sum of the preceeding two numbers
//the input number will be the amount of times the loop iterates
//the first three numbers in the sequence may always be 0, 1, 1 
//maybe create a starting point and let that be s, then let s = (s-1) + (s-2)
let arr = [0,1];
//create an array for the first two numbers as they are always
//going to be there
for (let s = 2; s < n + 1; s++){
//create a for loop starting with 2, adding numbers to the array 
//using the push method until the array = n + 1
    arr.push(arr[s - 2] + arr[s - 1])
}
//return the index of n
return arr[n]
    }

    kaleb(n){
        return -1;
    }

}

module.exports = NachoFibre;

