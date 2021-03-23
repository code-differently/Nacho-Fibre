class NachoFibre {
  fibonacci(n) {
    let fibonacci;
    for (let i = 2; i <= n; i++) {
      // push the sum of the two numbers
      // preceding the position of i in the result array
      // at the end of the result array
      let prevNum1 = fibonacci[i - 1];
      let prevNum2 = fibonnaci[i - 2];
      fibonacci.push(prevNum1 + prevNum2);
    }
    return fibonacci;
  }

  kaleb(n) {
    return -1;
  }
}

module.exports = NachoFibre;
