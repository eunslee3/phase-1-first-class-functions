function callback() {
    return "done"
}
function receivesAFunction(callback) {
    return callback()
}
receivesAFunction(callback);


function named() {
    return function imName() {
        return "value"
    };
}
function returnsANamedFunction() {
    return named()
}
returnsANamedFunction();



function returnsAnAnonymousFunction() {
    return function() {

    }
}
returnsAnAnonymousFunction()();