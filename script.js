header = document.querySelector(".header");
navbar = document.querySelector(".header .navbar");
menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () =>{
    menuBtn.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}

window.onscroll = () =>{
    menuBtn.classList.remove("fa-xmark");
    navbar.classList.remove("active");

    if(window.scrollY > 0){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
}

var dateoffset = (24*60*60*1000) * 213; //offset by 213 days
let countdate = new Date().getTime() + dateoffset;

function countdown(){

    let now=new Date().getTime();
    let gap=countdate-now;

    let second=1000;
    let minute=second*60;
    let hour=minute*60;
    let day= hour*24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById("day").innerText=d;
    document.getElementById("hour").innerText=h;
    document.getElementById("minute").innerText=m;
    document.getElementById("second").innerText=s;
}

setInterval(() => {
    countdown();
}, 1000);


<!--order summary-->
let orderItems = [];
let totalAmount = 0;

// Function to update the Order Summary
function updateOrderSummary() {
    const orderList = document.getElementById("order-items");
    const orderTotal = document.getElementById("order-total");

    // Clear previous items
    orderList.innerHTML = "";

    orderItems.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        orderList.appendChild(li);
    });

    orderTotal.textContent = `₹${totalAmount.toFixed(2)}`;
}

// Function to add items to the order
function addToOrder(itemName, itemPrice) {
    orderItems.push({ name: itemName, price: itemPrice });
    totalAmount += itemPrice;
    updateOrderSummary();
}

// Attach event listeners to "Add to Order" buttons
document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", function() {
        let itemName = this.getAttribute("data-name");
        let itemPrice = parseFloat(this.getAttribute("data-price"));
        addToOrder(itemName, itemPrice);
    });
});

// Place Order Button
document.getElementById("place-order").addEventListener("click", function() {
    if (orderItems.length === 0) {
        alert("Your order is empty!");
        return;
    }

    alert("Order placed successfully!");
    orderItems = [];
    totalAmount = 0;
    updateOrderSummary();
});

//contact validation starts

function sendMessage(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Name Validation
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    // Number Validation (exactly 10 digits)
    let number = document.getElementById("number").value.trim();
    if (!/^\d{10}$/.test(number)) {
        document.getElementById("numberError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("numberError").style.display = "none";
    }

    // Email Validation
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Message Validation
    let message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("messageError").style.display = "none";
    }

    // If all fields are valid, show success message
    if (isValid) {
        document.getElementById("successMessage").innerText = "Form submitted successfully!";
        document.getElementById("successMessage").style.display = "block";
    }
}
//contact validation ends








