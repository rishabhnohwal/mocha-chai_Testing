// first tutorial test

// const assert = require('chai').assert;
// const app = require('../src/main/js/app');

// describe('App', function(){
//     it('app should return hello', function(){
//         assert.equal(app(),'hello');
//     });
// });

const assert = require('chai').assert;
// const sayHello = require('../src/main/js/app').sayHello;
// const addNumbers = require('../src/main/js/app').addNumbers;
const app = require('../src/main/js/functions');

describe('App', function(){

    describe('concater()',function(){
        it('concater() should return concatenated string1', function(){
            let result = app.concater('Rishabh');
            assert.equal(result,'RishabhRishabh');
        });

        it('concater() should return concatenated string2', function(){
            let result = app.concater('Nohwal ');
            assert.equal(result,'Nohwal Nohwal ');
        });
    
        it('concater() should return type string', function(){
            let result = app.concater('Rishabh');
            assert.typeOf(result,'string');
        });

        it('concater() should not have null value', function(){
            let result = app.concater(null);
            assert.equal(result,'Provide Non-null values');
        });

        it('concater() should not have empty value', function(){
            let result = app.concater('   ');
            assert.equal(result,'Provide Non-empty values');
        });
        
    });
    
    describe('addNumbers()',function(){
        it('addNumbers same numbers', function(){
            let result= app.addNumbers(20,20);
            assert.equal(result,40);
        });

        it('addNumbers negative and positive numbers', function(){
            let result= app.addNumbers(27,-20);
            assert.equal(result,7);
        });

        it('addNumbers zero and positive numbers', function(){
            let result= app.addNumbers(0,14);
            assert.equal(result,14);
        });

        it('addNumbers zero and negative numbers', function(){
            let result= app.addNumbers(-13,0);
            assert.equal(result,-13);
        });

        it('addNumbers should be above 5', function(){
            let result= app.addNumbers(3,4);
            assert.isAbove(result,5);
        });
    
        it('addNumbers should return type number', function(){
            let result = app.addNumbers(5,5);
            assert.typeOf(result,'number');
        });

    });

    describe('factorial()', function(){
        it('Factorial of negative number should return -1', function(){
            let result=app.factorial(-3);
            assert.equal(result,-1);
        });

        it('Factorial of zero should be 1', function(){
            let result = app.factorial(0);
            assert.equal(result,1);
        });

        it('factorial of given number should return correct result1', function(){
            let result = app.factorial(10);
            assert.equal(result,3628800);
        });

        it('factorial of given number should return correct result2', function(){
            let result = app.factorial(5);
            assert.equal(result,120);
        });

        it('factorial should have return type of number',function(){
            let result = app.factorial(3);
            assert.typeOf(result,'number');
        });
    });
    
});
