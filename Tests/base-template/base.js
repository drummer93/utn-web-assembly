async function executeWebAssembly (precision=3) {
    var result;

    var t0 = performance.now();

    result = runWebAssembly();

    result.then(function(result) { // Avoid syncronous executation
        var t1 = performance.now();
        document.getElementById('WebAssemblyTime')
            .innerHTML = (t1 - t0).toFixed(precision) + " ms.";
        document.getElementById('WebAssemblyResult').innerHTML = result;
    })
};

async function runWebAssembly () {
    // Running the WebAssembly from wasm
    return await fetch('program.wasm')
    .then(data => data.arrayBuffer())
    .then(buf => WebAssembly.compile(buf))
    .then(mod => WebAssembly.instantiate(mod))
    .then(ins => ins.exports.main());
};


async function executeJS (precision=3) {
    var result;
    
    var t0 = performance.now();

    result = runJS();

    result.then(function(result) { //Avoid syncronous executation
        var t1 = performance.now();
        document.getElementById('JavaScriptTime')
            .innerHTML = (t1 - t0).toFixed(precision)  + " ms.";
        document.getElementById('JavaScriptResult').innerHTML = result;
    })
};

async function runJS() {
    // Running the JS main from file - See HTML
    return await JSmain();
}

function executeBoth(){    
    executeWebAssembly();
    executeJS();
}