var a = 10;
console.log(a);

function testVar() {
    console.log("Testing var inside function");
    var a = 20;
    console.log(a);

    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log(a);
}
testVar();