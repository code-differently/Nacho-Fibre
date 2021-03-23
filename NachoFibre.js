
class NachoFibre{

    //fibonacci formula: If number is 0 then return 0, if number is 1 then return 1, if number is greater than 1 then return F(n-1) + F(n-2)
    //Recursive method
     
        //make practice variable or value for  user picked number
        let num = 6; 
        //create function that has formula
        function fibonacci(num) {
            // create if else statement
            if (num <= 1)
                return n;
            else {
                return fibonacci(num-1) + (num-2);
            }
        }    
        
    

    
    
    
    
    
    
    
    
    //kaleb  formula: if number is 0 then return is 2, if number is 1 then return is -1, if number is greater than 1 then return 2(n-2) - (n-1)

    //make practice variable or value for user picked number

    let num = 4;

    //create function that has formula
    function kaleb(num) {
        //create if else statement
        if (num = 0)
            return 2;
        else if {
        (num = 1)
            return -1;
        } else {
        (num < 1)  
          return (2(num-2) - (num-1));
        }
    }

}

module.exports = NachoFibre;