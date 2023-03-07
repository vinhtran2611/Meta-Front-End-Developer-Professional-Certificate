try {
    throw new SyntaxError()
} catch (error) {
    console.log("caught")
}
console.log("still work")

var str = "Hello";
console.log(str.match("jello"));

try {
    Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}