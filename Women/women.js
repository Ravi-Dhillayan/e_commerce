// Function to toggle the navigation menu
function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('show');
}

// Function to close the navigation menu
function closeMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.remove('show');
}

// Product data for women
const womenProducts = [
  {
    name: "Floral Dress",
    price: 999,
    image: "floral_dress.jpg",
    description: "Beautiful floral dress perfect for casual outings and summer days.",
    category: "Women_Fashion",
    rating: 4.6
  },
  {
    name: "Denim Jacket",
    price: 1499,
    image: "denim_jacket.jpg",
    description: "Trendy denim jacket for layering with any outfit.",
    category: "Outerwear",
    rating: 4.7
  },
  {
    name: "Kurti",
    price: 799,
    image: "kurti.jpg",
    description: "Elegant kurti for traditional and semi-formal occasions.",
    category: "Ethnic Wear",
    rating: 4.5
  },
  {
    name: "Leggings",
    price: 499,
    image: "leggings.avif",
    description: "Comfortable and stretchable leggings for daily wear.",
    category: "Bottom Wear",
    rating: 4.4
  },
  {
    name: "High Heels",
    price: 1999,
    image: "high_heels.jpg",
    description: "Stylish high heels for parties and formal events.",
    category: "Footwear",
    rating: 4.8
  },
  {
    name: "Handbag",
    price: 1199,
    image: "handbag.jpg",
    description: "Spacious and elegant handbag for everyday use.",
    category: "Accessories",
    rating: 4.6
  },
  {
    name: "Anarkali Suit",
    price: 2499,
    image: "anarkali_suit.webp",
    description: "Gorgeous Anarkali suit for festive occasions.",
    category: "Ethnic Wear",
    rating: 4.9
  },
  {
    name: "Sandals",
    price: 899,
    image: "sandals.jpg",
    description: "Comfortable sandals perfect for summer.",
    category: "Footwear",
    rating: 4.3
  },
  {
    name: "Saree",
    price: 1999,
    image: "saree.webp",
    description: "Traditional saree with intricate designs.",
    category: "Ethnic Wear",
    rating: 4.7
  },
  {
    name: "Crop Top",
    price: 599,
    image: "crop_top.jpg",
    description: "Trendy crop top for stylish casual wear.",
    category: "Women_Fashion",
    rating: 4.5
  }
];

// Function to load products into the product list
function loadProducts() {
  let cart = document.getElementById("product-list");
  cart.innerHTML = "";

  womenProducts.forEach((product) => {
    let Div = document.createElement("div");
    Div.classList.add("product-card", "col-sm-3", "border");
    Div.innerHTML = `
      <img class="product-image" src="${product.image}" height="150px" alt="${product.name}">
      <h5 class="product-name"><strong>${product.name}</strong></h5>
      <p class="product-price">₹${product.price}</p>
      <p class="product-description">${product.description}</p>
      <p class="product-rating"><strong>Rating:</strong> ${product.rating} ⭐</p>
      <button class="product-button" onclick="CartTOAdd('${product.name}', ${product.price}, '${product.image}')">Buy</button>
    `;
    cart.appendChild(Div);
  });
}

// Function to check login status
function checkLoginStatus() {
  const isLoggedIn = sessionStorage.getItem("user") === "true";
  const logoutButton = document.querySelector(".logout");

  if (logoutButton) {
    if (isLoggedIn) {
      logoutButton.style.display = "block";
    } else {
      logoutButton.style.display = "none";
    }
  }
}

// Function to log out the user
function Logout() {
  sessionStorage.removeItem("user");
  alert("You have been logged out.");
  checkLoginStatus();
}

// Function to add a product to the cart
function CartTOAdd(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingItem = cart.find(item => item.image === image);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1, image });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

// Function to view the cart
function viewCart() {
  window.location.href = "../cart.html";
}

// Function to go back to the home page
function goBack() {
  window.location.href = "../index.html";
}

// Run functions on page load
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("product-list")) {
    loadProducts();
  }
  checkLoginStatus();
});

// Example user registration (for testing)
let users = JSON.parse(localStorage.getItem("users")) || [];
let email = "test@example.com";
let fname = "Jane";
let lname = "Doe";
let password = "password123";
let number = "9876543210";

let new_email = users.find(user => user.email === email);
if (new_email) {
  console.log("This user already exists!");
} else {
  users.push({ fname, lname, email, password, number });
  localStorage.setItem("users", JSON.stringify(users));
  console.log("Registration Successful!");
}
