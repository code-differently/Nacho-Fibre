
class NachoFibre{

    fibonacci(n){
        if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
        

    kaleb(n){
        return -1;
    }

}

module.exports = NachoFibre;