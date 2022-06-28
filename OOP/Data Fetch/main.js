
// Get Data
function getTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
        return res.json()
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))  
}

//getTodos()


// Send Data
function addTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json; character=UTF-8'
        },
        body: JSON.stringify({
            title: "Hello World",
            completed: false
        })
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

//addTodos()

// Update Data
function updateData(){
    fetch('https://jsonplaceholder.typicode.com/todos/2', {
        method: 'PUT', 
        headers: {
            'content-type': 'application/json; character=UTF-8'
        },
        body: JSON.stringify({
            title: "Update Data",
            completed: true
        })
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

//updateData();

// Delete Data
function deleteData(){
    fetch('https://jsonplaceholder.typicode.com/todos/2', {
        method: 'DELETE'
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

deleteData();