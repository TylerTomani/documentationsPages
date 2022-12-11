
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
    .then(data => {
        const dataObjects = data;
        dataObjects.forEach(obj => {
            console.log(obj.title)
        })
    }
)