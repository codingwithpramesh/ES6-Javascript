function* process() {
    console.log('Start process 1');
    console.log('Pause process2 until call next()');

    yield;

    console.log('Resumed process2');
    console.log('Pause process3 until call next()');

    let parms = yield {age: 12};
    console.log("Passed by final process next(90): " + parms);

    console.log('Resumed process3');
    console.log('End of the process function');
}