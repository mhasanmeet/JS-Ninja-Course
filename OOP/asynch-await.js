async function getTodos(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data =  await res.json()
        //console.log(data)
        return data
    }
    catch(err){
        console.log(err)
    }
    
}

//getTodos()

async function getData(){
    const data = await getTodos();
    console.log(data);
}

getData()