"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stuffy_class_1 = require("../model/stuffy.class");
console.log("Welcome to Stuffy Dispensor app!");
// create instance of stuffy
var s1 = new stuffy_class_1.Stuffy(1, "giraffe", "blue", "s", 3);
//display instance of stuffy
console.log(s1.about());
console.log("bye!");
