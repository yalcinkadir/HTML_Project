'use strict'

const cons = function(car, cdr){
    return {
        car: car,
        cdr: cdr,
        toString(){
            return `${car} ${cdr}`;
        }
    };
};

const consObject = cons(23, 42);

console.log(consObject);

const primes = cons(2, cons(3, cons(5, cons(7, cons(11, null)))));

console.log(primes.toString);