fetch("https://dummyjson.com/products")
    .then(result => result.json())
    .then(dataObject => {
        const products = dataObject.products
        products.forEach(product => {
            console.log(product.title)
        })
    })