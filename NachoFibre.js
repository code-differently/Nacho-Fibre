
class NachoFibre{

    fibonacci(n){
// create an array to hold the values for the calculations
let fibNums = [0,1]
// loop through the numbers up to the entered value
for (var i = 1; i < n; i++) {
// grabbing the values from both 1 and 2 positions over
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
}
// display the calculated values
        return fibNums[n]
    }



    kaleb(n){
        return -1;
    }

}

module.exports = NachoFibre;