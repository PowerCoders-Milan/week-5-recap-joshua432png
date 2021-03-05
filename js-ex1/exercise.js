var array = [1, 5, 7, "milan", "london", "newyork", "chicago"]
var num = 0
var string = 0
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
        num++
    } else if (typeof array[i] === "string") {
        string++
    } else {
       console.log("number are thesame");
    }
}
console.log("The length of the array is " + array.length);
console.log(`numbers are ${num} in the array`);
console.log(`strings are ${string} in the array`);