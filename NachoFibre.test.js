
const NachoFibre = require("./NachoFibre.js")
// create a function that will return a position in a array
// for ex [0, 1, 1, 2, 3, 5, 8] input 6(position) output 8(int)
// in doing so you would use indexOf() method
// array indexOf(5, [0, 1, 1, 2, 3, 5, 8]);
// expected result 5;

let fibonacci = [0, 1, 1 , 2, 3, 5, 8];

console.log(fibonacci.indexOf(5));

test("fibonacci test01", () => {

    let nachoFibre = new NachoFibre();
    let expected = 5;

    let actual = nachoFibre.fibonacci(5);

    expect(actual).toEqual(expected);
});


test("fibonacci test02", () => {

    let nachoFibre = new NachoFibre();
    let expected = 144;

    let actual = nachoFibre.fibonacci(12);

    expect(actual).toEqual(expected);
});

test("fibonacci test03", () => {

    let nachoFibre = new NachoFibre();
    let expected = 1597;

    let actual = nachoFibre.fibonacci(17);

    expect(actual).toEqual(expected);
});

test("kaleb test01", () => {

    let nachoFibre = new NachoFibre();
    let expected = -31;

    let actual = nachoFibre.kaleb(5);

    expect(actual).toEqual(expected);
});

test("kaleb test02", () => {

    let nachoFibre = new NachoFibre();
    let expected = 4097;

    let actual = nachoFibre.kaleb(12);

    expect(actual).toEqual(expected);
});

test("kaleb test03", () => {

    let nachoFibre = new NachoFibre();
    let expected = -131071;

    let actual = nachoFibre.kaleb(17);

    expect(actual).toEqual(expected);
});