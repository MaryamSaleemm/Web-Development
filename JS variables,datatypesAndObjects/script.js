// var is a global variable while let is ablock variable
// var can be updated aws can be redeclared
// let can be updated but not redeclared
// consts can neither be updated nor be initialized

console.log("Hey this is js tutorial");

var a = 5;
// a = a + 1
let b = 6;
let c = "Maryam";
let _a = "maryam";
// var 55a = "haiqa"; // Not Allowed

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66;
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant


let x = " hello";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;    //type is 'undefined'
let r = null;          //*******type is 'object'******/

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let o = {
    "name": "maryam",
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);