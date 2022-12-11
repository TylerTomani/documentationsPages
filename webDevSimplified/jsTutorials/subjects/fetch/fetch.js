// https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/
// https://dummyjson.com/products/1

// fetch("https://dummyjson.com/products/100")
//     .then(result => result.json())
//     .then(dataObject => {
//       const products = dataObject.products
//         products.forEach( product => {
//             console.log(product.title)
//         })
//     })

fetch("https://dummyjson.com/products/1000")
    .then(result => {
        if(result.ok){
            console.log("Successful")
        } else {
            console.log("Error: no success")
        }
    })
    // .then(object => console.log(object))
    // .catch( error => console.log(error))
