// Lexical Scope
function lexicalScope(){
    let dataLocal = "Here I'm Global scope "

    function localScope(){
        let dataGlobal = "And I'm local Scope" 

        console.log(dataLocal + dataGlobal)
    }

    localScope()
}

lexicalScope();