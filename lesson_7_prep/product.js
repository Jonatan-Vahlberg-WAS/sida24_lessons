const products  = Array.from({length: 10}, (v, i) => {
    return {
        id: i,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 100),
        imageUrl: `https://picsum.photos/seed/${i}/150/150`
    }
})

const createProductTemplate = (id, name, price, imageUrl) => `
    <img src="${imageUrl}" alt="${name}" />
    <h2>${name}</h2>
    <p>Price: ${price}</p>
s`;

const getProduct = (id) => {
    return products.find(product => product.id === id)
}

const renderProduct = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get("id")
    const product = getProduct(id)
    const productElement = document.getElementById("product")
    productElement.innerHTML = createProductTemplate(product.id, product.name, product.price, product.imageUrl)
}