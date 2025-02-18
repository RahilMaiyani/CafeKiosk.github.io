document.querySelector(".start-order").addEventListener("click", () => {
    document.querySelector(".welcome-screen").classList.add("d-none");
    document.querySelector(".main-content").classList.remove("d-none");
});

const menuData = {
    HotCoffee: [
        { name: "Americano", price: 150, img: "/Images/HotCoffee/Americano.jpg", desc: "Espresso diluted with hot water for a rich, bold flavor.", calories: "15" },
        { name: "Dark Roast", price: 175, img: "/Images/HotCoffee/PremiumCoffee.jpg", desc: "Intense and robust dark roast coffee, perfect for a morning boost.", calories: "20" },
        { name: "Cappuccino", price: 160, img: "/Images/HotCoffee/Cappuccino.jpg", desc: "Steamed milk foam layered over a shot of espresso.", calories: "80" },
        { name: "Caramel Cappuccino", price: 175, img: "/Images/HotCoffee/CaramelCappuccino.jpg", desc: "A cappuccino topped with a sweet caramel drizzle.", calories: "90" },
        { name: "Vanilla Cappuccino", price: 175, img: "/Images/HotCoffee/VanillaCappuccino.jpg", desc: "Cappuccino infused with a hint of vanilla for extra smoothness.", calories: "85" },
        { name: "French Vanilla Latte", price: 190, img: "/Images/HotCoffee/FrenchVanilla.jpg", desc: "A velvety latte with a subtle French vanilla flavor.", calories: "110" },
        { name: "Classic Roast Latte", price: 160, img: "/Images/HotCoffee/Latte.jpg", desc: "A balanced latte with classic roasted coffee flavor.", calories: "100" },
        { name: "Caramel Macchiato", price: 190, img: "/Images/HotCoffee/CaramelMacchiato.jpg", desc: "Layered espresso with milk foam and caramel, creating a sweet contrast.", calories: "120" },
        { name: "Classic Mocha Latte", price: 210, img: "/Images/HotCoffee/Mocha.jpg", desc: "A delightful blend of espresso, chocolate, and steamed milk.", calories: "130" }
    ],
    ColdCoffee: [
        { name: "Classic Iced Coffee", price: 200, img: "/Images/ColdCoffee/IcedCoffee.jpg", desc: "A refreshing iced coffee served over ice.", calories: "80" },
        { name: "Iced Caramel Coffee", price: 220, img: "/Images/ColdCoffee/IcedCaramelCoffee.jpg", desc: "Iced coffee with a sweet caramel infusion.", calories: "90" },
        { name: "Caramel Frappe", price: 250, img: "/Images/ColdCoffee/CaramelFrappe.jpg", desc: "A blended frappe with rich caramel flavor.", calories: "150" },
        { name: "Iced Macchiato", price: 220, img: "/Images/ColdCoffee/IcedCaramelMacchiato.jpg", desc: "Layered iced espresso with a touch of milk.", calories: "100" },
        { name: "Classic Iced Mocha", price: 220, img: "/Images/ColdCoffee/IcedMocha.jpg", desc: "Iced mocha with a perfect blend of chocolate and coffee.", calories: "110" },
        { name: "Iced Mocha Frappe", price: 250, img: "/Images/ColdCoffee/MochaFrappe.jpg", desc: "A creamy blended mocha frappe served chilled.", calories: "140" },
        { name: "French Vanilla Latte", price: 220, img: "/Images/ColdCoffee/IcedFrenchVanillaLatte.jpg", desc: "Chilled latte enhanced with French vanilla essence.", calories: "120" }
    ],
    Snacks: [
        { name: "Classic Stuffed Bagel", price: 200, img: "/Images/Snacks/Bagel.png", desc: "A freshly baked bagel stuffed with herbed cream cheese.", calories: "300" },
        { name: "Veg Cheese Burger", price: 220, img: "/Images/Snacks/cheeseBurger.jpeg", desc: "A hearty veggie burger topped with melted cheese.", calories: "350" },
        { name: "Cheese Chili Toast", price: 250, img: "/Images/Snacks/CheeseToast.png", desc: "Toasted bread topped with spicy cheese and chili.", calories: "250" },
        { name: "Deluxe Cheese Burger", price: 250, img: "/Images/Snacks/DeluxBurger.jpeg", desc: "A gourmet burger loaded with cheese, veggies, and a special sauce.", calories: "450" },
        { name: "Classic Pan Cakes", price: 175, img: "/Images/Snacks/Hotcakes.jpeg", desc: "Light and fluffy pancakes served with maple syrup.", calories: "400" }
    ],
    Desserts: [
        { name: "Classic Vanilla Shake", price: 175, img: "/Images/Desserts/VanillaShake.jpg", desc: "A smooth vanilla shake made with real vanilla beans.", calories: "350" },
        { name: "Chocolate Shake", price: 180, img: "/Images/Desserts/ChocolateShake.jpg", desc: "A rich, creamy chocolate shake for dessert lovers.", calories: "370" },
        { name: "Premium Hot Chocolate", price: 220, img: "/Images/Desserts/HotChocolate.jpg", desc: "Decadent hot chocolate topped with whipped cream.", calories: "420" },
        { name: "Hot Fudge Sundae", price: 175, img: "/Images/Desserts/HotFudgeSundae.jpg", desc: "An ice cream sundae drizzled with warm hot fudge.", calories: "500" },
        { name: "SoftServe Cone", price: 120, img: "/Images/Desserts/VanillaCone.jpg", desc: "Classic soft serve ice cream in a crispy cone.", calories: "300" },
        { name: "M&M SoftServe", price: 175, img: "/Images/Desserts/MandMSoftServe.jpg", desc: "Soft serve ice cream mixed with crunchy M&M's.", calories: "320" },
        { name: "OREO SoftServe", price: 175, img: "/Images/Desserts/OREOSoftServe.jpg", desc: "Soft serve blended with crushed Oreos.", calories: "310" },
        { name: "ChocolateChip Cookie", price: 120, img: "/Images/Desserts/ChocolateChipCookie.jpg", desc: "A freshly baked cookie loaded with chocolate chips.", calories: "220" },
        { name: "Baked ApplePie", price: 110, img: "/Images/Desserts/BakedApplePie.jpg", desc: "A warm apple pie with a flaky crust and spiced filling.", calories: "280" },
        { name: "Classic Cheese Cake", price: 230, img: "/Images/Desserts/Cheesecake.png", desc: "Rich and creamy cheesecake with a graham cracker crust.", calories: "450" },
        { name: "Chocolate Donut", price: 220, img: "/Images/Desserts/ChocolateDonut.png", desc: "A soft, glazed chocolate donut.", calories: "350" }
    ]
};

let cart = [];

document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        const category = e.target.dataset.category;
        const menuItems = menuData[category];
        const menuSection = document.querySelector(".menu-items");
        menuSection.innerHTML = "";
        menuItems.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("col-md-4", "col-6", "item");
            itemDiv.innerHTML = `
                <div class="card d-flex flex-column h-100" id="showed-item">
                    <img src="${item.img}" alt="${item.name}" class="card-img-top item-image" data-img="${item.img}" data-name="${item.name}" data-price="${item.price}" data-desc="${item.desc}" data-calories="${item.calories}" loading="lazy">
                    <div class="card-body flex-grow-1">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">₹${item.price}</p>
                    </div>
                    <div class="card-footer">
                        <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}" data-img="${item.img}" data-desc="${item.desc}" data-calories="${item.calories}">Add to Cart</button>
                    </div>
                </div>
            `;
            menuSection.appendChild(itemDiv);
        });
        menuSection.style.paddingBottom = '50px';
        document.querySelector('.menu-section').scrollTop = 0;
    });
});

document.querySelector(".menu-section").addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        const name = e.target.dataset.name;
        const price = parseFloat(e.target.dataset.price);
        const img = e.target.dataset.img;
        const desc = e.target.dataset.desc;
        const calories = e.target.dataset.calories;
        const itemIndex = cart.findIndex(item => item.name === name);
        if (itemIndex === -1) {
            cart.push({ name, price, img, desc, calories, quantity: 1 });
        } else {
            cart[itemIndex].quantity++;
        }
        updateCart();
    }
});

document.querySelector(".menu-section").addEventListener("click", (e) => {
    if (e.target.classList.contains("item-image")) {
        const name = e.target.dataset.name;
        const price = e.target.dataset.price;
        const img = e.target.dataset.img;
        const desc = e.target.dataset.desc;
        const calories = e.target.dataset.calories;
        document.getElementById("itemDetailModalLabel").textContent = name;
        const detailImage = document.getElementById("itemDetailImage");
        detailImage.src = img;
        detailImage.alt = name;
        document.getElementById("itemDetailDesc").textContent = desc;
        document.getElementById("itemDetailCalories").textContent = "Calories: " + calories;
        const addBtn = document.querySelector(".add-to-cart-detail");
        addBtn.dataset.name = name;
        addBtn.dataset.price = price;
        addBtn.dataset.img = img;
        addBtn.dataset.desc = desc;
        addBtn.dataset.calories = calories;
        const itemDetailModal = new bootstrap.Modal(document.getElementById('itemDetailModal'));
        itemDetailModal.show();
    }
});


document.querySelector(".add-to-cart-detail").addEventListener("click", (e) => {
    const name = e.target.dataset.name;
    const price = parseFloat(e.target.dataset.price);
    const img = e.target.dataset.img;
    const desc = e.target.dataset.desc;
    const calories = e.target.dataset.calories;
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex === -1) {
        cart.push({ name, price, img, desc, calories, quantity: 1 });
    } else {
        cart[itemIndex].quantity++;
    }
    updateCart();
    const itemDetailModal = bootstrap.Modal.getInstance(document.getElementById('itemDetailModal'));
    if (itemDetailModal) {
        itemDetailModal.hide();
    }
});

function updateCart() {
    const cartItemCount = document.getElementById("cart-item-count");
    const cartTotal = document.getElementById("cart-total");
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartItemCount.textContent = itemCount;
    cartTotal.textContent = total.toFixed(2);
    cartItemCount.classList.add("pulse-animation");
    setTimeout(() => {
        cartItemCount.classList.remove("pulse-animation");
    }, 300);
}

document.querySelector(".view-cart").addEventListener("click", () => {
    closeModals();
    const viewCartModal = new bootstrap.Modal(document.getElementById('viewCartModal'));
    viewCartModal.show();
    loadCartItems();
});

function loadCartItems() {
    const cartItemsList = document.getElementById("cart-items-list");
    const cartTotalModal = document.getElementById("cart-total-modal");
    cartItemsList.innerHTML = "";
    if (cart.length === 0) {
        cartItemsList.innerHTML = `<p class="text-center" style="font-size: 1.2rem; padding: 20px;">Your cart is empty.</p>`;
        document.getElementById("checkout-btn").style.display = "none";
        cartTotalModal.innerText = "0.00";
    } else {
        document.getElementById("checkout-btn").style.display = "block";
        cart.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item", "d-flex", "justify-content-between", "align-items-center", "mb-2");
            itemDiv.innerHTML = `
                <div class="d-flex">
                    <img src="${item.img}" class="img-fluid" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;" loading="lazy">
                    <span class="ms-3">${item.name} (x${item.quantity})</span>
                </div>
                <div class="d-flex">
                    <span>₹${(item.price * item.quantity).toFixed(2)}</span>  
                    <button class="remove-item ms-2" data-index="${index}">Remove</button>
                </div>
            `;
            cartItemsList.appendChild(itemDiv);
        });
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartTotalModal.innerText = total.toFixed(2);
    }
}

document.querySelector("#cart-items-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
        const itemIndex = e.target.getAttribute("data-index");
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--;
        } else {
            cart.splice(itemIndex, 1);
        }
        updateCart();
        loadCartItems();
    }
});

document.querySelector("#checkout-btn").addEventListener("click", () => {
    closeModals();
    const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
    orderModal.show();
});

document.querySelector(".dine-in").addEventListener("click", () => {
    showPaymentMethodModal();
});

document.querySelector(".take-away").addEventListener("click", () => {
    showPaymentMethodModal();
});

function showPaymentMethodModal() {
    closeModals();
    const paymentMethodModal = new bootstrap.Modal(document.getElementById('paymentMethodModal'));
    paymentMethodModal.show();
}

document.querySelector(".pay-card").addEventListener("click", () => {
    handleCheckout("card");
});

document.querySelector(".pay-counter").addEventListener("click", () => {
    handleCheckout("counter");
});

function handleCheckout(paymentMethod) {
    closeModals();
    const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
    paymentModal.show();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("final-total").textContent = total.toFixed(2);
}

document.querySelector("#pay-now").addEventListener("click", () => {
    closeModals();
    const orderNumber = Math.floor(Math.random() * 10000);
    const orderConfirmationModal = new bootstrap.Modal(document.getElementById('orderConfirmationModal'));
    orderConfirmationModal.show();
    document.getElementById("order-number").textContent = orderNumber;
});

document.querySelector("#start-over-btn").addEventListener("click", () => {
    location.reload();
});

function closeModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        if (bootstrapModal) {
            bootstrapModal.hide();
        }
    });
}
