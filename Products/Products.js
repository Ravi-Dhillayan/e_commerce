const products = [
  {
    name: "Bluetooth Headphones",
    price: 1599,
    image: "PHOTOS/headphones.jpg",
    description: "Wireless headphones with noise cancellation.",
    category: "Electronics",
    section: "electronics"
  },
  {
    name : "Portable Bluetooth Speaker",
    price : 1299,
    image : "Photos/speaker.jpg",
    description: "Compact speaker with powerful sound.",
    category : "Electronics",
    section : "electronics"
  },
  {
   name : "Over-Ear Bluetooth Headphones",
   price: 1899,
   image : "Photos/overear.jpg",
   description: "Comfortable headphones with HD audio.",
   category : "Electronics",
   section : "elctronics"
  },
  {
    name: "Smart Audio Picks",
    price: 1599,
    image : "Photos/overear.jpg",
    description: "Wireless smart audio with deep bass.",
    category: "Electronics",
    section: "electronics"
  },
  {
    name: "Smart Speaker",
    price: 2999,
    image: "Photos/speaker.jpg",
    description: "Voice-controlled smart speaker for your home.",
    category: "Electronics",
    section: "electronics"
  },
  {
    name: "Toy Car",
    price: 299,
    image: "Photos/toy_car.jpg",
    description: "Remote control toy car.",
    category: "Toys",
    section: "beauty"
  },
  {
    name: "Soft Teddy Bear",
    price: 499,
    image: "Photos/teddy.jpg",
    description: "Super soft and cuddly teddy bear.",
    category: "Toys",
    section: "beauty"
  },
  {
    name: "Men's Cotton Shirt",
    price: 499,
    image: "../men/photo1.jpg",
    description: "Regular-fit shirt with classic collar and full sleeves.",
    category: "Fashion",
    section: "fashion"
  },
  {
    name: "Women's Handbag",
    price: 1299,
    image: "Photos/handbag.avif",
    description: "Trendy and spacious handbag for women.",
    category: "Fashion",
    section: "fashion"
  },
  {
    name: "Wired Mouse",
    price: 299,
    image: "Photos/mouse.jpg",
    description: "High precision USB wired mouse.",
    category: "Electronics",
    section: "electronics"
  },
  {
    name: "Laptop Stand",
    price: 899,
    image: "Photos/stand.jpg",
    description: "Adjustable aluminum laptop stand.",
    category: "Electronics",
    section: "electronics"
  },
  {
    name: "Kids Puzzle Set",
    price: 399,
    image: "Photos/puzzle.jpg",
    description: "Educational puzzle for kids 5+.",
    category: "Toys",
    section: "beauty"
  },
  {
    name: "Action Figure",
    price: 349,
    image: "Photos/action_figure.jpg",
    description: "Popular superhero action figure.",
    category: "Toys",
    section: "beauty"
  },
  {
    name: "Men's Sports Shoes",
    price: 1499,
    image: "Photos/shoes.jpg",
    description: "Comfortable and durable running shoes.",
    category: "Fashion",
    section: "fashion"
  },
  {
    name: "Women's Sunglasses",
    price: 699,
    image: "Photos/sunglasses.jpg",
    description: "Stylish UV-protected sunglasses.",
    category: "Fashion",
    section: "fashion"
  },
  {
    name: "Hair Dryer",
    price: 799,
    image: "Photos/hairdryer.jpg",
    description: "Compact and fast-drying hair dryer.",
    category: "Beauty",
    section: "beauty"
  },
  {
    name: "Lipstick Set",
    price: 599,
    image: "Photos/lipstick.jpg",
    description: "Pack of 5 matte finish lipsticks.",
    category: "Beauty",
    section: "beauty"
  },
  {
    name: "Smartphone Stand",
    price: 249,
    image: "Photos/phone_stand.jpg",
    description: "Multi-angle adjustable phone stand.",
    category: "Electronics",
    section: "electronics"
  },
  {
    name: "Wireless Charger",
    price: 1099,
    image: "Photos/wireless_charger.jpg",
    description: "Fast wireless charging pad for all phones.",
    category: "Electronics",
    section: "electronics"
  },
  {
    name: "Boys T-shirt",
    price: 349,
    image: "Photos/boys_tshirt.jpg",
    description: "Cotton T-shirt with cartoon print.",
    category: "Toys",
    section: "beauty"
  },
  {
    name: "Girls Frock",
    price: 499,
    image: "Photos/frock.jpg",
    description: "Floral printed frock for girls.",
    category: "Toys",
    section: "beauty"
  },
  {
    name: "Men's Leather Wallet",
    price: 799,
    image: "Photos/wallet.jpg",
    description: "Genuine leather wallet with coin pocket.",
    category: "Fashion",
    section: "fashion"
  },
  {
    name: "Women's Earrings Set",
    price: 599,
    image: "Photos/earrings.jpg",
    description: "Elegant earrings combo pack.",
    category: "Fashion",
    section: "fashion"
  }
];

// Render a section by sectionId and sectionName
function renderSection(sectionId, sectionName) {
    console.log(`${sectionId} and ${sectionName}`);
    
  const section = document.getElementById(sectionId);
  section.innerHTML = "";
  products.filter(p => p.section === sectionName).forEach(product => {
    // Escape single quotes for JS string in onclick
    const safeName = product.name.replace(/'/g, "\\'");
    section.innerHTML += `
      <div class="col-8 col-md-3">
        <div class="card mb-3">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">₹${product.price}</p>
            <p class="card-text">${product.description}</p>
            <button class="btn btn-success" onclick="addToCart('${safeName}', ${product.price}, '${product.image}')">Buy</button>
          </div>
        </div>
      </div>
    `;
  });
}

// Search products by name, category, or price
function searchProducts() {
  const input = document.getElementById("search-input").value.trim().toLowerCase();
  // Show all sections if search is empty
  if (!input) {
    renderAllSections();
    return;
  }
  // Otherwise, show filtered products in a single section
  const allSections = ["electronics-section", "beauty-section", "fashion-section"];
  allSections.forEach(id => document.getElementById(id).innerHTML = "");
  let filtered = [];
  if (!isNaN(input)) {
    filtered = products.filter(product => product.price >= parseInt(input));
  } else {
    filtered = products.filter(product =>
      product.name.toLowerCase().includes(input) ||
      product.category.toLowerCase().includes(input) ||
      product.description.toLowerCase().includes(input)
    );
  }
  const section = document.getElementById("electronics-section");
  if (filtered.length === 0) {
    section.innerHTML = "<p>No products found.</p>";
    return;
  }
  filtered.forEach(product => {
    const safeName = product.name.replace(/'/g, "\\'");
    section.innerHTML += `
      <div class="col-8 col-md-3">
        <div class="card mb-3">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">₹${product.price}</p>
            <p class="card-text">${product.description}</p>
            <button class="btn btn-success" onclick="addToCart('${safeName}', ${product.price}, '${product.image}')">Buy</button>
          </div>
        </div>
      </div>
    `;
  });
}

// Clear search and reload all sections
function clearSearch() {
  document.getElementById("search-input").value = "";
  renderAllSections();
}

// Add product to cart
function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existing = cart.find(item => item.name === name && item.image === image);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, image, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
}

// View cart
function viewCart() {
  window.location.href = "../cart.html";
}

// Logout function
function Logout() {
  sessionStorage.removeItem("user");
  alert("You have been logged out.");
}

// Hamburger menu toggle
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

// Render all sections
function renderAllSections() {
  renderSection("electronics-section", "electronics");
  renderSection("beauty-section", "beauty");
  renderSection("fashion-section", "fashion");
}

// On page load
document.addEventListener("DOMContentLoaded", renderAllSections);