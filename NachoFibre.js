
class NachoFibre{
    // fibonacci starts with 0 & 1
    // after that, the subsequent number is the sum of the previous two (i.e. 0, 1, 1 (0+1), 2 (1+1), 3 (1+2), and so on)
    // must create code that sets 0 and 1 as first two factors
    // then must create code that accounts for values incrementally
    // then create code that takes the gets the nth number, by adding together the previous 2 numbers (lenth - 1) + (length - 2). push method should allow for that
    // make fibo the variable for the sequence
    let fibo = (n)

   {if (n===1)
    return [0, 1];
        
    }
    else {let x = fibo(n-1);
        x.push(x[x.length - 1] + x[x.length - 2]);
        return x;

    }

    }

}

module.exports = NachoFibre;