// Global Variables
const baseURL = 'https://fakestoreapi.com'

const cart = document.querySelectorAll('.nav-link')[0]
const electronics = document.querySelectorAll('.nav-link')[1]
const jewelery = document.querySelectorAll('.nav-link')[2]
const mensClothing = document.querySelectorAll('.nav-link')[3]
const womensClothing = document.querySelectorAll('.nav-link')[4]

const displayDiv = document.getElementById('display')

// Fake Store Arrow Function
const fakeStore = async (endpoint) => {
    const response = await fetch(baseURL + endpoint)
    const data = await response.json()
    console.log(data);
};

// Event Listeners for navbar
cart.addEventListener('click', () => {
    console.log('cart click'); // cart will be updated in U4_04 to an array
})

electronics.addEventListener('click', () => {
    fakeStore(`/products/category/electronics`)
})

jewelery.addEventListener('click', () => {
    fakeStore(`/products/category/jewelery`)
})

mensClothing.addEventListener('click', () => {
    fakeStore(`/products/category/men's%20clothing`)
})

womensClothing.addEventListener('click', () => {
    fakeStore(`/products/category/women's%20clothing`)
})






//Keep at the bottom of file
window.onload = async function() {
    // Endpoint for URL fetch
    let endpoint = `/products`
  
    // Invoke fakeStore function with the endpoint argument
    await fakeStore(endpoint);
  };

