document.querySelector(".start-order").addEventListener("click", () => {
    // Hide the welcome screen and show the main content
    document.querySelector(".welcome-screen").classList.add("d-none");
    document.querySelector(".main-content").classList.remove("d-none");
});

// Menu Data
const menuData = {
    HotCoffee: [
        { name: "Americano", price: 150, img: "/Images/HotCoffee/Americano.jpg" },
        { name: "Dark Roast", price: 175, img: "/Images/HotCoffee/PremiumCoffee.jpg" },
        { name: "Cappuccino", price: 160, img: "/Images/HotCoffee/Cappuccino.jpg" },
        { name: "Caramel Cappuccino", price: 175, img: "/Images/HotCoffee/CaramelCappuccino.jpg" },
        { name: "Vanilla Cappuccino", price: 175, img: "/Images/HotCoffee/VanillaCappuccino.jpg" },
        { name: "French Vanilla Latte", price: 190, img: "/Images/HotCoffee/FrenchVanilla.jpg" },
        { name: "Classic Roast Latte", price: 160, img: "/Images/HotCoffee/Latte.jpg" },
        { name: "Caramel Macchiato", price: 190, img: "/Images/HotCoffee/CaramelMacchiato.jpg" },
        { name: "Classic Mocha Latte", price: 210, img: "/Images/HotCoffee/Mocha.jpg" },
    ],
    ColdCoffee: [
        { name: "Classic Iced Coffee", price: 200, img: "/Images/ColdCoffee/IcedCoffee.jpg" },
        { name: "Iced Caramel Coffee", price: 220, img: "/Images/ColdCoffee/IcedCaramelCoffee.jpg" },
        { name: "Caramel Frappe", price: 250, img: "/Images/ColdCoffee/CaramelFrappe.jpg" },
        { name: "Iced Macchiato", price: 220, img: "/Images/ColdCoffee/IcedCaramelMacchiato.jpg" },
        { name: "Classic Iced Mocha", price: 220, img: "/Images/ColdCoffee/IcedMocha.jpg" },
        { name: "Iced Mocha Frappe", price: 250, img: "/Images/ColdCoffee/MochaFrappe.jpg" },
        { name: "French Vanilla Latte", price: 220, img: "/Images/ColdCoffee/IcedFrenchVanillaLatte.jpg"}
    ],
    Snacks: [
        { name: "Classic Stuffed Bagel", price: 200, img: "/Images/Snacks/Bagel.png" },
        { name: "Veg Cheese Burger", price: 220, img: "/Images/Snacks/cheeseBurger.jpeg" },
        { name: "Cheese Chili Toast", price: 250, img: "/Images/Snacks/CheeseToast.png" },
        { name: "Deluxe Cheese Burger", price: 250, img: "/Images/Snacks/DeluxBurger.jpeg" },
        { name: "Classic Pan Cakes", price: 175, img: "/Images/Snacks/Hotcakes.jpeg" }
    ],
    Desserts: [
        { name: "Classic Vanilla Shake", price: 175, img: "/Images/Desserts/VanillaShake.jpg" },
        { name: "Chocolate Shake", price: 180, img: "/Images/Desserts/ChocolateShake.jpg" },
        { name: "Premium Hot Chocolate", price: 220, img: "/Images/Desserts/HotChocolate.jpg" },
        { name: "Hot Fudge Sundae", price: 175, img: "/Images/Desserts/HotFudgeSundae.jpg" },
        { name: "SoftServe Cone", price: 120, img: "/Images/Desserts/VanillaCone.jpg" },
        { name: "M&M SoftServe", price: 175, img: "/Images/Desserts/MandMSoftServe.jpg" },
        { name: "OREO SoftServe", price: 175, img: "/Images/Desserts/OREOSoftServe.jpg" },
        { name: "ChocolateChip Cookie", price: 120, img: "/Images/Desserts/ChocolateChipCookie.jpg" },
        { name: "Baked ApplePie", price: 110, img: "/Images/Desserts/BakedApplePie.jpg" },
        { name: "Classic Cheese Cake", price: 230, img: "/Images/Desserts/Cheesecake.png" },
        { name: "Chocolate Donut", price: 220, img: "/Images/Desserts/ChocolateDonut.png" },
    ]
};


let cart = [];

// Category button event listener
document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const category = e.target.dataset.category;
        const menuItems = menuData[category];

        const menuSection = document.querySelector(".menu-items");
        menuSection.innerHTML = "";

        menuItems.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("col-md-4", "item");
            itemDiv.innerHTML = `
                <div class="card" id="showed-item">
                    <img src="${item.img}" alt="${item.name}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">₹${item.price}</p>
                        <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}">Add to Cart</button>
                    </div>
                </div>
            `;
            menuSection.appendChild(itemDiv);
        });
        menuSection.style.paddingBottom = '50px';
    });
});

// Add to Cart functionality
document.querySelector(".menu-section").addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        const name = e.target.dataset.name;
        const price = parseFloat(e.target.dataset.price);
        const img = e.target.dataset.img;

        const itemIndex = cart.findIndex(item => item.name == name);
        if (itemIndex == -1) {
            cart.push({ name, price, img, quantity: 1 });
        } else {
            cart[itemIndex].quantity++;
        }
        updateCart();
    }
});

// Update Cart display
function updateCart() {
    const cartItemCount = document.getElementById("cart-item-count");
    const cartTotal = document.getElementById("cart-total");

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartItemCount.textContent = itemCount;
    cartTotal.textContent = total.toFixed(2);
}

// View Cart Modal functionality 
document.querySelector(".view-cart").addEventListener("click", () => {
    closeModals();
    if(cart.length == 0){
        alert("No items in cart!");
        return;
    } 
    const viewCartModal = new bootstrap.Modal(document.getElementById('viewCartModal'));
    viewCartModal.show();
    loadCartItems();
});

// Load Cart Items in Modal
function loadCartItems() {
    const cartItemsList = document.getElementById("cart-items-list");
    const cartTotalModal = document.getElementById("cart-total-modal");
    cartItemsList.innerHTML = "";
    cart.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item","d-flex", "justify-content-between", "align-items-center", "mb-2");
        itemDiv.innerHTML = `
            <div class="d-flex">
                <img src="${item.img}" class="img-fluid" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;">
                <span class="ms-3">${item.name} (x${item.quantity})</span>
            </div>
            <div class="d-flex">
                <span>₹${(item.price * item.quantity).toFixed(2)}</span>  
                <button class="remove-item ms-2" data-index="${index}">Remove</button>
            </div>
        `;
        cartItemsList.appendChild(itemDiv);
    });

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    cartTotalModal.innerText = total.toFixed(2);
}

// Remove Item from Cart
document.querySelector("#cart-items-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
        const itemIndex = e.target.getAttribute("data-index");
        cart.splice(itemIndex, 1);
        updateCart();
        loadCartItems();
    }
});

// Checkout Button
document.querySelector("#checkout-btn").addEventListener("click", () => {
    closeModals();
    const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
    orderModal.show();
});

// Dine-In or Takeout Selection
document.querySelector(".dine-in").addEventListener("click", () => {
    showPaymentMethodModal();
});
document.querySelector(".take-away").addEventListener("click", () => {
    showPaymentMethodModal();
});

// Show Payment Method Modal
function showPaymentMethodModal() {
    closeModals(); // Close all open modals
    const paymentMethodModal = new bootstrap.Modal(document.getElementById('paymentMethodModal'));
    paymentMethodModal.show();
}

// Handle Payment Method Selection
document.querySelector(".pay-card").addEventListener("click", () => {
    handleCheckout("card");
});
document.querySelector(".pay-counter").addEventListener("click", () => {
    handleCheckout("counter");
});

// Handle Checkout
function handleCheckout(paymentMethod) {
    closeModals(); 
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    paymentModal.show();

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("final-total").textContent = total.toFixed(2);

}

// Payment Success
document.querySelector("#pay-now").addEventListener("click", () => {
    closeModals();
    const orderNumber = Math.floor(Math.random() * 10000); // Random Order Number

    const orderConfirmationModal = new bootstrap.Modal(document.getElementById('orderConfirmationModal'));
    orderConfirmationModal.show();
    document.getElementById("order-number").textContent = orderNumber;
});

// Start New Order
document.querySelector("#start-over-btn").addEventListener("click", () => {
    location.reload(); // Reload the page to start a new order
});

// Function to close all open modals (same as your existing code)
function closeModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
            bootstrapModal.hide();
        }
    });
}

// scrolls to top when catgory btn clicked
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.menu-section').scrollTop = 0;
    });
});
