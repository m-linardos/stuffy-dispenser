
import { Stuffy } from "../model/stuffy.class";

console.log('welcome');

// instantiating Stuffy objects
let s1: Stuffy = new Stuffy(1,'giraffe', 'blue','s', 3);
let s2: Stuffy = new Stuffy(2, 'platypus duck', 'yellow','s', 2);
let s3: Stuffy = new Stuffy(3, 'cat', 'calico', 'm', 4);

let s4: Stuffy = new Stuffy(4,'mouse', 'pink','m', 5);
let s5: Stuffy = new Stuffy(5, 'rat', 'white','xl', 5);
let s6: Stuffy = new Stuffy(6, 'dog', 'gold', 'l', 5);

let s7: Stuffy = new Stuffy(7,'ant', 'blue','m', 6);
let s8: Stuffy = new Stuffy(8, 'butterfly', 'purple/yellow','xl', 11);
let s9: Stuffy = new Stuffy(9, 'chicken', 'brown', 's', 4);

 // create an array of stuffies
let stuffies:Stuffy[] = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
for (let cute of stuffies) {
    console.log(cute.about());
}

 // NPM - installed package `readline-sync`  -  $ npm install --save readline-sync 
var readlineSync = require('readline-sync');  //have to add this code to our component program

// find the last index # of array
let lastStuffy = stuffies.length;

// can now use readlineSync to get input data from user
var pickStuffy = readlineSync.question(`Which stuffy would you like? Please pick a number
 between 1 and + ${lastStuffy}: `);

console.log(`You picked stuffy option # ${pickStuffy}`);    // back tic used in place of qoutes --> BEST PRACTICE

// calculate the winning stuffy
let winner = ${pickStuffy} - 1;

// get stuffy
console.log(`You are a winner !!! Here is you're stuffy: `);
console.log(winner.about());


console.log('bye');