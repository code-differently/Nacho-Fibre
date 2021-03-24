
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
    let kalebN2 = 2;
    let kalebN1 = -1;
    let kalebN;

    for(let i = 2; i <= n; i++){
        kalebN = 2*kalebN2 - kalebN1;
        kalebN2 = kalebN1;
        kalebN1 = kalebN;
    }
        return kalebN;
    }



// module.exports = NachoFibre;



//fibonacci(0) = 0
// if(n==0){
//     return 0;
// }
// //fibonacii(1) = 1
// if(n==1){
//     return 1;
// }

// //fibonacci(n) = fibonacci(n-1) + fibonacci(n-2)
// let fibN2 = 0;
// let fibN1 = 1;
// let fibN;

// fibN = fibN1 + fibN2;
// fibN2 = fibN1;
// fibN1 = fibN;

//n: 0 1 2 3
//f: 0 1 1
