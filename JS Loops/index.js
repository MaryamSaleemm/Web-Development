
/*for...in loop:

Used to loop through keys/properties of an object.

Example: it gives index when used on arrays.

for...of loop:

Used to loop through values of an iterable (arrays, strings, etc.).

Example: it gives actual elements of the array. */

console.log("I am a tutorial on Loops")

let a = 1;
console.log(a)
console.log(a+1)
console.log(a+2)

for (let i = 0; i < 100; i++) { 
    console.log(a + i); 
}

let obj = {
    name: "maryam",
    role: "Programmer",
    company: "abc"
}
 
for (const key in obj) {  
        console.log(key)
}

for (const c of "hello") {
    console.log(c)
}

let j = 0;
while (i<60000) {
    console.log(i)
    j++;
}

let i = 9;
do {
    console.log(i)
    i++;
} while (i<6);