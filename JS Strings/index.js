console.log("This is strings tutorial")
let a = "mryam";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name = "fatima"
let friend = "maryam"
console.log("His name is " + real_name + " and her friends name is " + friend)
console.log(`His name is ${real_name} and her friends name is ${friend}`) // string interpolation using backtic

let b = "mrym"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) //slicing
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "aima", "haiqa", "maryam"))

console.log(b)