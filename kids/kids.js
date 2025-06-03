const kidsProducts = [
  {
    name: "Kids T-Shirt",
    price: 299,
    image: "kids_photoes/T_shirt.avif",
    description: "Colorful cotton t-shirt for kids.",
    rating: 4.7
  },
  {
    name: "Toy Car",
    price: 499,
    image: "kids_photoes/Toy_Car.webp",
    description: "Remote control toy car for fun playtime.",
    rating: 4.8
  },
  {
    name: "School Bag",
    price: 699,
    image: "kids_photoes/Bag.jpg",
    description: "Spacious and lightweight school bag.",
    rating: 4.6
  },
  {
    name: "Kids Sneakers",
    price: 899,
    image: "kids_photoes/Sneakers.jpg",
    description: "Comfortable sneakers for active kids.",
    rating: 4.9
  },
  {
    name: "Coloring Book",
    price: 199,
    image: "kids_photoes/coloring_book.jpg",
    description: "Fun and educational coloring book.",
    rating: 4.5
  },
  {
    name: "Building Blocks",
    price: 599,
    image: "kids_photoes/building_blocks.jpg",
    description: "Creative building blocks for early learning.",
    rating: 4.7
  },
  {
    name: "Kids Watch",
    price: 349,
    image: "kids_photoes/kids_watch.jpg",
    description: "Digital waterproof watch for kids.",
    rating: 4.6
  },
  {
    name: "Story Book",
    price: 249,
    image: "kids_photoes/story_book.jpg",
    description: "Illustrated bedtime story book.",
    rating: 4.8
  },
  {
    name: "Kids Cap",
    price: 199,
    image: "kids_photoes/kids_cap.jpg",
    description: "Stylish and sun-protective cap.",
    rating: 4.4
  },
  {
    name: "Puzzle Game",
    price: 299,
    image: "kids_photoes/puzzle_game.jpg",
    description: "Brain-teasing puzzle game for children.",
    rating: 4.7
  },
  {
    name: "Kids Sunglasses",
    price: 299,
    image: "kids_photoes/kids_sunglasses.jpg",
    description: "UV-protection sunglasses for kids.",
    rating: 4.3
  },
  {
    name: "Water Bottle",
    price: 199,
    image: "kids_photoes/kids_water_bottle.jpg",
    description: "Leak-proof and colorful water bottle.",
    rating: 4.6
  },
  {
    name: "Crayons Set",
    price: 149,
    image: "kids_photoes/crayons_set.jpg",
    description: "Non-toxic colorful crayons for art time.",
    rating: 4.5
  },
  {
    name: "Kids Hoodie",
    price: 599,
    image: "kids_photoes/kids_hoodie.jpg",
    description: "Warm and cozy hoodie for cold days.",
    rating: 4.8
  },
  {
    name: "Drawing Pad",
    price: 129,
    image: "kids_photoes/drawing_pad.jpg",
    description: "High-quality paper drawing pad.",
    rating: 4.6
  },
  {
    name: "Musical Toy",
    price: 499,
    image: "kids_photoes/musical_toy.jpg",
    description: "Fun musical toy with lights and sounds.",
    rating: 4.9
  },
  {
    name: "Lunch Box",
    price: 299,
    image: "kids_photoes/lunch_box.jpg",
    description: "Microwave-safe kids lunch box.",
    rating: 4.6
  },
  {
    name: "Kids Gloves",
    price: 149,
    image: "kids_photoes/kids_gloves.jpg",
    description: "Soft woolen gloves for winter.",
    rating: 4.4
  },
  {
    name: "Educational Tablet Toy",
    price: 899,
    image: "kids_photoes/tablet_toy.jpg",
    description: "Interactive learning tablet for kids.",
    rating: 4.7
  },
  {
    name: "Jump Rope",
    price: 179,
    image: "kids_photoes/jump_rope.jpg",
    description: "Colorful jump rope for fun exercise.",
    rating: 4.5
  }
];


// Display all products
function loadKidsProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  kidsProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card col-sm-3 border p-3 m-2";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="img-fluid mb-2" height="150">
      <h5>${product.name}</h5>
      <p>₹${product.price}</p>
      <p>${product.description}</p>
      <p><strong>Rating:</strong> ${product.rating} ⭐</p>
      <button class="btn btn-success" onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Buy</button>
    `;
    productList.appendChild(div);
  });
}

// Search products by name, description, or price
function searchKidsProducts() {
  const input = document.getElementById("search-input").value.trim().toLowerCase();
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  let filtered = [];
  if (!input) {
    filtered = kidsProducts;
  } else if (!isNaN(input)) {
    filtered = kidsProducts.filter(product => product.price >= parseInt(input));
  } else {
    filtered = kidsProducts.filter(product =>
      product.name.toLowerCase().includes(input) ||
      product.description.toLowerCase().includes(input)
    );
  }

  if (filtered.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  filtered.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card col-sm-3 border p-3 m-2";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="img-fluid mb-2" height="150">
      <h5>${product.name}</h5>
      <p>₹${product.price}</p>
      <p>${product.description}</p>
      <p><strong>Rating:</strong> ${product.rating} ⭐</p>
      <button class="btn btn-success" onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Buy</button>
    `;
    productList.appendChild(div);
  });
}

// Clear search and reload all products
function clearKidsSearch() {
  document.getElementById("search-input").value = "";
  loadKidsProducts();
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
  window.location.href = "cart.html";
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

// On page load
document.addEventListener("DOMContentLoaded", loadKidsProducts);