//

console.log("Execution Starts")

setTimeout(function name() {
    console.log("First Callback")

    setTimeout(function name() {
        console.log("Inner Callback")
    }, 0); // 0 sec
}, 1000); // 1 sec

setTimeout(function name() {
    console.log("Second Callback")
}, 1000); // 2 sec

setTimeout(function name() {
    console.log("Third Callback")
}, 1000); // 3 sec

console.log("Execution Ends")