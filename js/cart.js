// Retrieve cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count on navbar
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Add to Cart Function
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${productName} added to cart!`);
}

// Display Cart Items (on cart.html)
function displayCartItems() {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText =`${item.name} - $${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = total;
}

// Initialize Functions
if (document.getElementById('cart-count')) {
    updateCartCount();
}

if (document.getElementById('cart-items')) {
    displayCartItems();
}