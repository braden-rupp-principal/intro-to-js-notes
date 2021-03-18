

it('strings', () => {

    var singleQuoteString = 'hello';
    var doubleQuoteString = "hello";
    var templateString = `${singleQuoteString}`; //backticks 

});

it('numbers', () => {

    var number = 1;
    var numberWithDecimal = 2.0
    expect(typeof number).toBe(typeof numberWithDecimal)

});

it('arrays', () => {

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    let arr = [];
    expect(arr.length).toEqual(0); //length is property not function'

    arr.push('Hello'); //add to an array
    expect(arr).toEqual(['Hello']);


    arr.pop(); //remove last item 
    expect(arr).toEqual([]);

    const copy = arr.slice(); //Copy an array
    expect(copy).not.toBe(arr);
    expect(copy).toEqual(arr);
});

it('equality', () => {

    // == Checks result and not type
    // === Checks result and type

    expect('' == '0').toBeFalsy();

    expect(0 == '').toBeTruthy();
    expect(0 == '0').toBeTruthy();

    expect(false == 'false').toBeFalsy();
    expect(false == '0').toBeTruthy();

    expect(false == undefined).toBeFalsy();
    expect(false == null).toBeFalsy();
    expect(null == undefined).toBeTruthy();

    expect('').toBeFalsy();
    expect("").toBeFalsy();
    expect(0).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(false).toBeFalsy();

    expect('0').toBeTruthy();
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
});

it('hoisting', () => {
    var DEFAULT_RATE = .1
    var rate = .05;

    function getRate() {
        //var rate;  
        if (!rate) { // var rate gets hoisted to the top of the function so rate is undefined
            var rate = DEFAULT_RATE;
        }

        return rate;
    }

    expect(getRate()).toEqual(.1);
});

it('Hoisting: Temporal Deadzone', () => {
    /* When variables get hoisted, var gets undefined initialized 
    to its value by default in the process of hoisting. let and 
    const also get hoisted, but don't get set to undefined when they get hoisted. */

    var DEFAULT_RATE = .1
    let rate = .05;

    function getRate() {
        // This is the temporal dead zone for the rate variable!
        // This is the temporal dead zone for the rate variable!
        if (!rate) {// This is the temporal dead zone for the rate variable!
            let rate = DEFAULT_RATE;
        }

        return rate;
    }

    expect(getRate()).toEqual(.05);
});

it('for loops and forEach', () => {

    const fruits = ['apple', 'orange', 'bananna']
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i])
    }

    fruits.forEach(fruit => console.log(fruit))
    fruits.forEach(console.log)
});

it('objects', () => {

    console.log = jest.fn()

    let person = {
        name: 'Braden',
        getUppercaseName: function () {

            return this.name.toUpperCase();
        },
        getUppercaseNameEs6: () => {

            return this.name.toUpperCase(); //es6 function does not have access to person object fields
        }
    }

    expect(person.getUppercaseName()).toEqual('BRADEN');

    try {
        person.getUppercaseNameEs6();
    } catch (error) {
        expect(error.message).toEqual("Cannot read property 'name' of undefined");
    }

});

it('enumerating over object properties', () => {

    //enumerating over object
    const availableFruit = {
        'apples': 3,
        'oranges': 5
    }

    for (let fruitName in availableFruit) {
        console.log(`${fruitName} ${availableFruit[fruitName]}`)
    }

});

it('classes', () => {
    class Person {

        constructor(name) {
            this.name = name;
        }

        getUppercaseName() {
            return this.name.toUpperCase();
        }

        static helloWorld() {
            return 'Hello World'
        }
    }

    const person = new Person('Braden')

    expect(person.getUppercaseName()).toEqual('BRADEN');
    expect(Person.helloWorld()).toEqual('Hello World');
});

it('module exports', () => {
    // export default () => {
    //     return 'Default export function'
    // }

    // export const functionOne = () = { console.log(1) }
    // export const functionTwo = () = { console.log(2) }

    // export default function myFunction(params) {
    //     return 'Default export function'
    // }

    // module.exports.myFunction = function () {
    //     console.log('Hello World');
    // }

    // module.exports = {
    //     functionOne: () => { },
    //     functionTwo: () => { }
    // }
});

it('functions', () => {
    const numbers = [1, 2, 3]
    const doubledNumbers = numbers.map((value, index) => {
        console.log('Current index is', index);
        return value * 2;
    });

    expect(doubledNumbers).toEqual([2, 4, 6]);
});

it('passing function variable', () => {
    const numbers = [1, 2, 3];
    const double = (value) => value * 2;


    const doubledNumbers = numbers.map(double);

    expect(doubledNumbers).toEqual([2, 4, 6]);
});


it('default paramters', () => {
    
    const printName = (name = "No name") => {
        return name
    }

    expect(printName('Braden')).toEqual('Braden');
    expect(printName()).toEqual('No name');
});

