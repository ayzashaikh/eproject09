document.addEventListener("DOMContentLoaded",function(){

    const playButton = document.querySelector(".icon1");
    const video = document.querySelector("video");

    playButton.addEventListener("click",function(){
        video.play();

    playButton.classList.add("hidden"); 
    });

    video.addEventListener("pause",function(){
        playButton.classList.remove("hidden")
    });
    
    video.addEventListener("ended", function(){
    playButton.classList.remove("hidden");
    })
})


const menuIcon = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});




// Cart array to hold items
let cart = [];

// Function to add products to the cart
function addToCart(productId, productPrice) {
    // Check if the product already exists in the cart
    const existingProduct = cart.find(item => item.productId === productId);

    if (existingProduct) {
        // If the product is already in the cart, increment the quantity
        existingProduct.quantity += 1;
    } else {
        // If the product is not in the cart, add it with quantity 1
        cart.push({
            productId,
            productPrice,
            quantity: 1
        });
    }

    // Update the cart display and total price
    updateCart();
}

// Function to remove products from the cart
function removeFromCart(productId) {
    const existingProduct = cart.find(item => item.productId === productId);

    if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
    } else {
        // If quantity is 1 or less, remove the product from the cart
        cart = cart.filter(item => item.productId !== productId);
    }

    // Update the cart display and total price
    updateCart();
}

// Function to update the cart's display
function updateCart() {
    const cartDiv = document.getElementById("cart");
    const totalPriceDiv = document.getElementById("total-price");

    // Clear the cart display
    cartDiv.innerHTML = "";

    let total = 0;

    // Create cart items dynamically
    cart.forEach(item => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        cartItemDiv.innerHTML = `
            <p>Product ${item.productId} - $${item.productPrice}</p>
            <div class="quantity">
                <button onclick="removeFromCart(${item.productId})">-</button>
                <span>${item.quantity}</span>
                <button onclick="addToCart(${item.productId}, ${item.productPrice})">+</button>
            </div>
        `;
        cartDiv.appendChild(cartItemDiv);

        // Update the total price
        total += item.productPrice * item.quantity;
    });

    // Update the total price displayed
    totalPriceDiv.innerText = total.toFixed(2);
}

// Event listeners for adding products to the cart
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        const productDiv = this.parentElement;
        const productId = productDiv.getAttribute("data-id");
        const productPrice = parseFloat(productDiv.getAttribute("data-price"));

        addToCart(productId, productPrice);
    });
});


let sub = document.getElementById("sub-btn")

sub.addEventListener("click", function(e){
    
 e.preventDefault();

  let nameinput = document.getElementById("fname").value;
  let lnameinput = document.getElementById("lname").value;
  let emailinput = document.getElementById("email").value;
  let numinput = document.getElementById("phone").value;
  let messinput = document.getElementById("query").value;
 
localStorage.setItem("fname",nameinput)
localStorage.setItem("lname",lnameinput)
localStorage.setItem("email",emailinput)
localStorage.setItem("phone",numinput)
localStorage.setItem("query",messinput)


});