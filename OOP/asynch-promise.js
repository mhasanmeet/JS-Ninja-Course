function func(){
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(3)
        }, 2000)
    })
}

func2()
    .then((value) => {
        func(value + 2)
            .then((data) => {
                console.log(data)
            })
            .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err));

//-----------------------------------------------

function three(fn, name){
    setTimeout(() => {
        fn(name)
    }, 2000)
}

one((value) => {
    console.log(value)
    const callbackFn = (value) =>{
        console.log(value)
    }
    three(callbackFn, value + 2)
})