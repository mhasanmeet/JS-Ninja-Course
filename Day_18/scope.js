// Local scope 
function localScope(){
    let local = "Local Scope";
    console.log(local);
}

localScope();

// Global Scope
let GScope = "Global Scope";

function GlobalScope(){
    console.log(GScope)
}

GlobalScope();

// Multilobal Local Scope
function multiscope(){
    let scope1 = "I am multiGlobal LocalScope here"
    function localScope(){
        console.log(scope1);
    }
    localScope()
}

multiscope()