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

// Product data
const menProducts = [
  {
    name: "Cotton Shirt",
    price: 399,
    image: "photo1.jpg",
    description: "Regular-fit shirt featuring a regular collar, full sleeves, a single chest pocket, and a standard length for a clean, classic look.",
    category: "Men_Fashion",
    rating: 4.5
  },
  {
    name: "Casual Shirt",
    price: 499,
    image: "men_photo1.jpg",
    description: "Stylish and comfortable casual shirt for everyday wear.",
    category: "Men_Fashion",
    rating: 4.6
  },
  {
    name: "Formal Shirt",
    price: 599,
    image: "men_photo2.jpg",
    description: "Elegant formal shirt for business and special occasions.",
    category: "Elegant Fashion",
    rating: 4.7
  },
  {
    name: "T-Shirt",
    price: 299,
    image: "men_photo3.jpg",
    description: "Comfortable and stylish t-shirt for casual outings.",
    category: "Casual Wear",
    rating: 4.5
  },
  {
    name: "Polo T-Shirt",
    price: 399,
    image: "polo_tshirt.jpg",
    description: "Classic polo t-shirt with a collar and button placket.",
    category: "Casual Wear",
    rating: 4.6
  },
  {
    name: "Hoodie",
    price: 799,
    image: "hoodie.jpg",
    description: "Warm and stylish hoodie for chilly weather.",
    category: "Winter Wear",
    rating: 4.8
  },
  {
    name: "Sweater",
    price: 899,
    image: "Sweater.jpg",
    description: "Cozy sweater for layering in winter.",
    category: "Winter Wear",
    rating: 4.7
  },
  {
    name: "Shirt",
    price: 2000,
    image: "men_photo6.jpg",
    description: "Premium quality shirt with smooth fabric and tailored fit.",
    category: "Men_Fashion",
    rating: 4.7
  },
  {
    name: "Nike Running Shoes",
    price: 3999,
    image: "men_photo19.jpg",
    description: "Durable and lightweight running shoes for all terrains.",
    category: "Shoes",
    rating: 4.8
  },
  {
    name: "Casual Shoes",
    price: 2999,
    image: "men_photo20.jpg",
    description: "Stylish and comfortable casual shoes for everyday wear.",
    category: "Shoes",
    rating: 4.6
  },
  {
    name: "Leather Jacket",
    price: 2499,
    image: "leather_jacket.jpg",
    description: "Trendy leather jacket for a rugged look.",
    category: "Winter Wear",
    rating: 4.9
  },
  {
    name: "Track Pants",
    price: 699,
    image: "track_pants.jpg",
    description: "Comfortable track pants for workouts and casual wear.",
    category: "Sports Wear",
    rating: 4.4
  },
  {
    name: "Denim Jeans",
    price: 999,
    image: "denim_jeans.jpg",
    description: "Slim-fit denim jeans for a modern look.",
    category: "Bottom Wear",
    rating: 4.5
  },
  {
    name: "Cargo Pants",
    price: 1099,
    image: "cargo_pants.jpg",
    description: "Utility cargo pants with multiple pockets.",
    category: "Bottom Wear",
    rating: 4.3
  },
  {
    name: "Joggers",
    price: 799,
    image: "joggers.jpg",
    description: "Casual joggers for everyday comfort.",
    category: "Bottom Wear",
    rating: 4.6
  },
  {
    name: "Blazer",
    price: 2999,
    image: "blazer.jpg",
    description: "Elegant blazer for formal and party wear.",
    category: "Elegant Fashion",
    rating: 4.7
  },
  {
    name: "Cap",
    price: 199,
    image: "cap.jpg",
    description: "Trendy cap for sun protection and style.",
    category: "Accessories",
    rating: 4.4
  },
  {
    name: "Sunglasses",
    price: 499,
    image: "sunglasses.jpg",
    description: "Stylish sunglasses with UV protection.",
    category: "Accessories",
    rating: 4.5
  },
  {
    name: "Wrist Watch",
    price: 1499,
    image: "watch.jpg",
    description: "Analog wrist watch with leather strap.",
    category: "Accessories",
    rating: 4.6
  },
  {
    name: "Wallet",
    price: 399,
    image: "wallet.jpg",
    description: "Genuine leather wallet with multiple compartments.",
    category: "Accessories",
    rating: 4.7
  },
  {
    name: "White Sneakers",
    price: 1999,
    image: "white_sneakers.jpg",
    description: "Trendy white sneakers for a clean street look.",
    category: "Shoes",
    rating: 4.8
  },
  {
    name: "Flip Flops",
    price: 299,
    image: "flip_flops.jpg",
    description: "Comfortable flip-flops for home and beach wear.",
    category: "Footwear",
    rating: 4.2
  },
  {
    name: "Suit",
    price: 3999,
    image: "suit.jpg",
    description: "Formal suit for weddings and business meetings.",
    category: "Elegant Fashion",
    rating: 4.9
  },
  {
    name: "Raincoat",
    price: 799,
    image: "raincoat.jpg",
    description: "Waterproof raincoat with hood.",
    category: "Seasonal Wear",
    rating: 4.3
  },
  {
    name: "Sports T-Shirt",
    price: 499,
    image: "sports_tshirt.jpg",
    description: "Breathable t-shirt for sports and gym sessions.",
    category: "Sports Wear",
    rating: 4.6
  },
  {
    name: "Sleeveless Jacket",
    price: 999,
    image: "sleeveless_jacket.jpg",
    description: "Stylish sleeveless winter jacket.",
    category: "Winter Wear",
    rating: 4.5
  },
  {
    name: "Thermal Set",
    price: 699,
    image: "thermal.jpg",
    description: "Full sleeve thermal wear for cold days.",
    category: "Winter Wear",
    rating: 4.4
  },
  {
    name: "Gym Shorts",
    price: 499,
    image: "gym_shorts.jpg",
    description: "Flexible and lightweight gym shorts.",
    category: "Sports Wear",
    rating: 4.3
  },
  {
    name: "Beanie",
    price: 299,
    image: "beanie.jpg",
    description: "Warm woolen beanie for winter.",
    category: "Accessories",
    rating: 4.5
  },
  {
    name: "Checked Shirt",
    price: 599,
    image: "checked_shirt.jpg",
    description: "Casual checked shirt for stylish looks.",
    category: "Men_Fashion",
    rating: 4.6
  }
];


// Function to load products into the product list
function loadProducts() {
  let cart = document.getElementById("product-list");
  cart.innerHTML = "";

  menProducts.forEach((product) => {
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

  if (logoutButton) { // Check if the logoutButton exists
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
  checkLoginStatus(); // Update UI
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

// Example user data for testing
let users = JSON.parse(localStorage.getItem("users")) || [];
console.log(users);

let email = "test@example.com";
let fname = "John";
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

// Search products by price
function SearchMenProducts() {
  let input = document.getElementById("search-button").value.trim();
  let productList = document.getElementById("product-list");
  productList.innerHTML = "";

  // Validate input
  if (isNaN(input) || input === "") {
    productList.innerHTML = "<p>Please enter a valid price.</p>";
    return;
  }

  let inputPrice = parseFloat(input);
  let matchFound = false;

  menProducts.forEach((product) => {
    if (product.price >= inputPrice) {
      matchFound = true;
      let div = document.createElement("div");
      div.classList.add("product-card", "col-sm-3", "border");
      div.innerHTML = `
        <img class="product-image" src="${product.image}" height="150px" alt="${product.name}">
        <h5 class="product-name"><strong>${product.name}</strong></h5>
        <p class="product-price">₹${product.price}</p>
        <p class="product-description">${product.description}</p>
        <p class="product-rating"><strong>Rating:</strong> ${product.rating} ⭐</p>
        <button class="product-button" onclick="CartTOAdd('${product.name}', ${product.price}, '${product.image}')">Buy</button>
      `;
      productList.appendChild(div);
    }
  });

  // Show message if no matching product found
  if (!matchFound) {
    productList.innerHTML = `<p>No products found with price ₹${inputPrice} or more.</p>`;
  }
}

// Clear search and reload all products
function ClearMenSearch(){
  document.getElementById("search-button").value = "";
  loadProducts();
}


