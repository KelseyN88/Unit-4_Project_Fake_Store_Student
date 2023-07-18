// Global Variables
const baseURL = 'https://fakestoreapi.com'

const cart = document.querySelectorAll('.nav-link')[0]
const electronics = document.querySelectorAll('.nav-link')[1]
const jewelery = document.querySelectorAll('.nav-link')[2]
const mensClothing = document.querySelectorAll('.nav-link')[3]
const womensClothing = document.querySelectorAll('.nav-link')[4]

const displayDiv = document.getElementById('display')
let storedItems = []

// Fake Store Arrow Function
const fakeStore = async (endpoint) => {
    const response = await fetch(baseURL + endpoint)
    const data = await response.json()
    storedItems = data
    console.log(data);
    displayCards()
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


const displayCards = () => {

    const displayContainer = document.getElementById('display')
    displayContainer.innerHTML = ''

storedItems.forEach(item => {

    
// Create elements
const innerDiv = document.createElement('div');
const columnDiv = document.createElement('div');

const cardDiv = document.createElement('div');
const cardImage = document.createElement('img');
const cardBodyDiv = document.createElement('div');
const cardTitle = document.createElement('h5');
const cardText = document.createElement('p');

const accordionDiv = document.createElement('div');
const accordionItem1 = document.createElement('div');
const accordionHeader1 = document.createElement('h2');
const accordionButton1 = document.createElement('button');
const accordionCollapse1 = document.createElement('div');
const accordionBody1 = document.createElement('div');

const accordionDiv2 = document.createElement('div');
const accordionItem2 = document.createElement('div');
const accordionHeader2 = document.createElement('h2');
const accordionButton2 = document.createElement('button');
const accordionCollapse2 = document.createElement('div');
const accordionBody2 = document.createElement('div');

const placeholderText1 = document.createElement('h3');
const placeholderText2 = document.createElement('h3');

const addToCartButton = document.createElement('button');


// Set Attributes
columnDiv.classList.add('col');

cardDiv.classList.add('card');
cardImage.classList.add('card-img-top');
cardImage.alt = `A photo of ${item.image}`;
cardBodyDiv.classList.add('card-body');
cardTitle.classList.add('card-title');
cardText.classList.add('card-text');

accordionDiv.classList.add('accordion');
accordionDiv.id = 'accordionExample';
accordionItem1.classList.add('accordion-item');
accordionHeader1.classList.add('accordion-header');
accordionButton1.classList.add('accordion-button', 'collapsed');
accordionButton1.type = 'button';
accordionButton1.setAttribute('data-bs-toggle', 'collapse');
accordionButton1.setAttribute('aria-expanded', 'false');
accordionCollapse1.classList.add('accordion-collapse', 'collapse');
accordionCollapse1.setAttribute('data-bs-parent', '#accordionExample');
accordionBody1.classList.add('accordion-body');

accordionDiv2.classList.add('accordion'); // added
accordionDiv2.id = 'accordionExample'; // added
accordionItem2.classList.add('accordion-item');
accordionHeader2.classList.add('accordion-header');
accordionButton2.classList.add('accordion-button', 'collapsed');
accordionButton2.type = 'button';
accordionButton2.setAttribute('data-bs-toggle', 'collapse');
accordionButton2.setAttribute('aria-expanded', 'false');
accordionCollapse2.classList.add('accordion-collapse', 'collapse');
accordionCollapse2.setAttribute('data-bs-parent', '#accordionExample');
accordionBody2.classList.add('accordion-body');

addToCartButton.classList.add('btn', 'btn-text');
addToCartButton.textContent = 'Add To Cart';

cardImage.src = item.image;
cardTitle.textContent = item.title;
placeholderText1.textContent = `${item.description}`;
placeholderText2.textContent = `${item.price}`;

accordionButton1.textContent = 'Description';
accordionButton1.setAttribute('data-bs-target', `#collapse${item.id}`);
accordionButton1.setAttribute('aria-controls', `collapse${item.id}`);
accordionCollapse1.id = `collapse${item.id}`;
accordionBody1.appendChild(placeholderText1);
accordionCollapse1.appendChild(accordionBody1);
accordionHeader1.appendChild(accordionButton1);
accordionItem1.appendChild(accordionHeader1);
accordionItem1.appendChild(accordionCollapse1);

accordionButton2.textContent = 'Price';
accordionButton2.setAttribute('data-bs-target', `#collapse${item.id + 1}`);
accordionButton2.setAttribute('aria-controls', `collapse${item.id + 1}`);

// Append Elements
accordionCollapse2.id = `collapse${item.id + 1}`;
accordionBody2.appendChild(placeholderText2);
accordionCollapse2.appendChild(accordionBody2);
accordionHeader2.appendChild(accordionButton2);
accordionItem2.appendChild(accordionHeader2);
accordionItem2.appendChild(accordionCollapse2);

accordionDiv2.appendChild(accordionItem1) // added
accordionDiv2.appendChild(accordionItem2) // added

accordionDiv.appendChild(accordionItem1);
accordionDiv.appendChild(accordionItem2);

cardBodyDiv.appendChild(cardTitle);
cardBodyDiv.appendChild(cardText);
cardBodyDiv.appendChild(accordionDiv);
cardBodyDiv.appendChild(addToCartButton);
cardDiv.appendChild(cardImage);
cardDiv.appendChild(cardBodyDiv);
columnDiv.appendChild(cardDiv);
innerDiv.appendChild(columnDiv);

document.getElementById('display').appendChild(innerDiv)

})

}

//Keep at the bottom of file
window.onload = async function() {
    // Endpoint for URL fetch
    let endpoint = `/products`
  
    // Invoke fakeStore function with the endpoint argument
    await fakeStore(endpoint);
  };
