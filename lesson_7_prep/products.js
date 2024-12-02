// Product HTML template
const createProductTemplate = (id, name, price, imageUrl) => `
    <img src="${imageUrl}" alt="${name}" />
    <h2>${name}</h2>
    <p>Price: ${price}</p>
    <button>Add to cart</button>
    <a href=${`/lesson_7_prep/product.html?name=${id}`}>View product</a>
`;

// Payment information form HTML template
const paymentInformationFormTemplate = `
    <input type="text" name="name" placeholder="Name" /><br />
    <input type="text" name="email" placeholder="Email" /><br />
    <input type="text" name="address" placeholder="Address" /><br />
    <input type="text" name="city" placeholder="City" /><br />
    <input type="text" name="state" placeholder="State" /><br />
    <input type="text" name="zip" placeholder="Zip" /><br />
    <input type="text" name="country" placeholder="Country" /><br />
    <input type="text" name="card-number" placeholder="Card Number" /><br />
    <input type="text" name="card-expiration" placeholder="Card Expiration" /><br />
    <input type="text" name="card-cvv" placeholder="Card CVV" /><br />
    <button type="submit">Submit</button><br />
`
// Cart HTML template
const cartTemplate = `
    <h2>Checkout</h2>
    <p>Items in cart: <span id="cart-count"></span></p>
    <p>Total: <span id="cart-total"></span></p>
    <button id="checkout-button">Checkout</button>
`
//use https://picsum.photos/seed/{seed}/150/150 for images
// Product data

const products  = Array.from({length: 10}, (v, i) => {
    return {
        id: i,
        name: `Product ${i + 1}`,
        price: Math.floor(Math.random() * 100),
        imageUrl: `https://picsum.photos/seed/${i}/150/150`
    }
})

// Cart data
const cart = []

// Render products

const productsElement = document.getElementById("products")
products.forEach(product => {
    const productElement = document.createElement("div")
    productElement.innerHTML = createProductTemplate(product.id, product.name, product.price, product.imageUrl)
    productElement.querySelector("button").addEventListener("click", () => {
        cart.push(product)
        renderCart()
    })
    productsElement.appendChild(productElement)
})

// Render cart

const renderCart = () => {
    const cartElement = document.getElementById("cart")
    cartElement.innerHTML = cartTemplate
    const cartCountElement = document.getElementById("cart-count")
    const cartTotalElement = document.getElementById("cart-total")
    cartCountElement.innerText = cart.length
    cartTotalElement.innerText = cart.reduce((total, product) => total + product.price, 0)
    document.getElementById("checkout-button").addEventListener("click", () => {
        renderPaymentInformationForm()
    })
}

renderCart()

// Render payment information form

const renderPaymentInformationForm = () => {
    const paymentInformationFormElement = document.getElementById("payment-information-form")
    paymentInformationFormElement.innerHTML = paymentInformationFormTemplate
    paymentInformationFormElement.querySelector("button").addEventListener("click", () => {
        alert("Payment submitted")
    })
}