// const mobileProducts = [];

// for (let i = 1; i <= 30; i++) {
//   mobileProducts.push({
//     name: `Mobile Phone Model ${i}`,
//     price: 30000 + i * 1500,
//     image: `phone${i}.jpg`,
//     description: `Description for Mobile Phone Model ${i} with amazing features and quality.`,
//     rating: (Math.random() * 2 + 3).toFixed(1),
//     imageSize: `${Math.floor(Math.random() * (20 - 500 + 1) + 50)} KB`  // random size between 500KB and 2000KB
//   });
// }

const mobileProducts = [
  {
    name: "Samsung Galaxy S25 Ultra #1",
    price: 129999,
    description: "Samsung's flagship with 200MP camera, Snapdragon 8 Gen 3, and 6.8\" QHD+ AMOLED display.",
    rating: "4.8",
    imageSize: "1.5 MB",
    image: "Samsung_GalaxyS25.jpg"
  },
  {
    name: "Apple iPhone 13 Pro Max #2",
    price: 135677,
    description: "Premium iPhone with A15 Bionic chip, 6.7\" Super Retina XDR display, and ProMotion technology.",
    rating: "4.5",
    imageSize: "1.2 MB",
    image: "Realme_Narzo7_0_Pro_5G.jpg"
  },
  {
    name: "Google Pixel 6 Pro 5G #3",
    price: 36400,
    description: "Flagship Google phone with Tensor chip, 6.7\" LTPO OLED display, and powerful cameras.",
    rating: "4.5",
    imageSize: "1.3 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-pro-1.jpg"
  },
  {
    name: "OnePlus 12 5G #4",
    price: 64999,
    description: "Top-tier OnePlus phone with Snapdragon 8 Gen 3 and 120Hz AMOLED display.",
    rating: "4.6",
    imageSize: "1.4 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-12-1.jpg"
  },
  {
    name: "Realme Narzo 70 Pro 5G #5",
    price: 19999,
    description: "Mid-range with 120Hz AMOLED display and Dimensity 7050 chipset.",
    rating: "4.2",
    imageSize: "950 KB",
    image: "Realme_Narzo7_0_Pro_5G.jpg"
  },
  {
    name: "Xiaomi Redmi Note 12 Pro #6",
    price: 18999,
    description: "Affordable 120Hz AMOLED with Dimensity 1080 and 5000mAh battery.",
    rating: "4.3",
    imageSize: "1.1 MB",
    image: "Xiaomi.jpg"
  },
  {
    name: "Vivo V29 5G #7",
    price: 22999,
    description: "Stylish design with AMOLED, MediaTek Dimensity 7200+.",
    rating: "4.1",
    imageSizemoblie: "1.0 MB",
    image: "VivoV25G.jpg"
  },
  {
    name: "Motorola Edge 40 Pro #8",
    price: 69999,
    description: "Flagship-level Snapdragon 8 Gen 2 with OLED display.",
    rating: "4.5",
    imageSize: "1.3 MB",
    image: "Motorola40.jpg"
  },
  {
    name: "Sony Xperia 1 V #9",
    price: 119999,
    description: "Photography-focused 4K OLED, Snapdragon 8 Gen 2.",
    rating: "4.4",
    imageSize: "1.4 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-v-1.jpg"
  },
  {
    name: "Nokia X100 #10",
    price: 15000,
    description: "Affordable 5G with Snapdragon 480 and 6.67\" LCD.",
    rating: "4.0",
    imageSize: "900 KB",
    image: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-x100-1.jpg"
  },
  {
    name: "Samsung Galaxy A14 5G #11",
    price: 13999,
    description: "Budget 5G with Exynos 1330 and 6.6\" PLS LCD.",
    rating: "4.1",
    imageSize: "900 KB",
    image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a14-5g-1.jpg"
  },
  {
    name: "Apple iPhone SE 2022 #12",
    price: 43999,
    description: "Compact iPhone with A15 Bionic and Touch ID.",
    rating: "4.4",
    imageSize: "1.0 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-2022-1.jpg"
  },
  {
    name: "Google Pixel 7a #13",
    price: 49999,
    description: "Affordable Pixel with Tensor G2 and 90Hz OLED.",
    rating: "4.5",
    imageSize: "1.1 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-7a-1.jpg"
  },
  {
    name: "OnePlus Nord 3 #14",
    price: 29999,
    description: "Mid-range with Dimensity 9200+ and 80W charging.",
    rating: "4.3",
    imageSize: "1.2 MB",
    image: "OnePlus_Nord_3.jpg"
  },
  {
    name: "Realme GT Neo 5 #15",
    price: 27999,
    description: "High performance Dimensity 9200+ with 120W charging.",
    rating: "4.3",
    imageSize: "1.2 MB",
    image: "Realme_GT_Neo5.jpg"
  },
  {
    name: "Xiaomi Poco F5 Pro #16",
    price: 38999,
    description: "Flagship Snapdragon 8+ Gen 1 with AMOLED 120Hz.",
    rating: "4.4",
    imageSize: "1.3 MB",
    image: "Xiaomi_Poco_F5Pr.jpg"
  },
  {
    name: "Vivo X90 Pro #17",
    price: 58999,
    description: "Photography flagship with Zeiss optics and Snapdragon 8 Gen 2.",
    rating: "4.6",
    imageSize: "1.4 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-x90-pro-1.jpg"
  },
  {
    name: "Motorola Moto G73 5G #18",
    price: 14999,
    description: "Budget-friendly 5G with MediaTek Helio G73.",
    rating: "4.0",
    imageSize: "850 KB",
    image: "Motorola_Moto_G73_5G.jpg"
  },
  {
    name: "Sony Xperia 10 V #19",
    price: 34999,
    description: "Mid-range Sony with Snapdragon 695 and OLED display.",
    rating: "4.1",
    imageSize: "1.0 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-10-v-1.jpg"
  },
  {
    name: "Nokia G60 5G #20",
    price: 16999,
    description: "Affordable 5G with Snapdragon 695 and 6.5\" display.",
    rating: "4.0",
    imageSize: "900 KB",
    image: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-g60-5g-1.jpg"
  },
  {
    name: "Samsung Galaxy Z Flip5 #21",
    price: 89999,
    description: "Latest foldable with Snapdragon 8 Gen 2 and compact design.",
    rating: "4.7",
    imageSize: "1.4 MB",
    image: "Samsung_Galaxy_ZFlip5.jpg"
  },
  {
    name: "Apple iPhone 14 Pro #22",
    price: 125000,
    description: "Powerful A16 Bionic chip, 6.1\" Super Retina XDR display.",
    rating: "4.8",
    imageSize: "1.3 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-1.jpg"
  },
  {
    name: "Google Pixel 8 #23",
    price: 69999,
    description: "Newest Pixel with Tensor G3 chip and 90Hz OLED.",
    rating: "4.6",
    imageSize: "1.2 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8-1.jpg"
  },
  {
    name: " #24",
    price: 45999,
    description: "Affordable flagship with Snapdragon 8+ Gen 1.",
    rating: "4.5",
    imageSize: "1.3 MB",
    image: "OnePlus_Nord_3.jpg"
  },
  {
    name: "Realme 11x 5G #25",
    price: 15999,
    description: "Budget 5G with Dimensity 6100+ and 120Hz AMOLED.",
    rating: "4.2",
    imageSize: "900 KB",
    image: "https://fdn2.gsmarena.com/vv/pics/realme/realme-11x-5g-1.jpg"
  },
  {
    name: "Xiaomi Redmi Note 11 Pro #26",
    price: 17999,
    description: "Popular mid-range with 108MP camera and AMOLED.",
    rating: "4.3",
    imageSize: "1.1 MB",
    image: "Xiaomi_Redmi_Note.jpg"
  },
  {
    name: "Vivo Y77 5G #27",
    price: 14999,
    description: "Budget 5G with MediaTek Dimensity 930 and AMOLED.",
    rating: "4.1",
    imageSize: "1.0 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-y77-5g-1.jpg"
  },
  {
    name: "Motorola Edge 30 Fusion #28",
    price: 29999,
    description: "Mid-range Snapdragon 888+ with OLED 144Hz.",
    rating: "4.4",
    imageSize: "1.3 MB",
    image: "MotorolaEdge30Fusion.jpg"
  },
  {
    name: "Sony Xperia 5 IV #29",
    price: 84999,
    description: "Compact flagship with Snapdragon 8 Gen 1 and OLED display.",
    rating: "4.5",
    imageSize: "1.3 MB",
    image: "Sony_Xperia_5.jpg"
  },
  {
    name: "Nokia X21 5G #30",
    price: 25999,
    description: "Mid-range 5G with Snapdragon 480+ and 6.67\" display.",
    rating: "4.1",
    imageSize: "1.0 MB",
    image: "Nokia_X21_5G.jpg"
  },
  {
    name: "Samsung Galaxy M14 5G #31",
    price: 12000,
    description: "Budget 5G with Exynos 1330 and 6000mAh battery.",
    rating: "4.0",
    imageSize: "900 KB",
    image: "Samsung_Galaxy_M14.jpg"
  },
  {
    name: "Apple iPhone 12 Mini #32",
    price: 49000,
    description: "Compact phone with A14 Bionic and dual cameras.",
    rating: "4.5",
    imageSize: "1.0 MB",
    image: "Apple_iPhone_12_Mini.jpg"
  },
  {
    name: "Google Pixel 5a 5G #33",
    price: 34999,
    description: "Affordable Pixel with Snapdragon 765G and OLED display.",
    rating: "4.4",
    imageSize: "1.1 MB",
    image: "GooglePixel 5a5G.jpg"
  },
  {
    name: "OnePlus Nord CE 3 Lite #34",
    price: 15999,
    description: "Budget phone with Snapdragon 782G and AMOLED.",
    rating: "4.2",
    imageSize: "1.0 MB",
    image: "OnePlus_Nord_CE3Lite.jpg"
  },
  {
    name: "Realme C55 5G #35",
    price: 13999,
    description: "Budget 5G with MediaTek Helio G88 and 6.72\" display.",
    rating: "4.0",
    imageSize: "900 KB",
    image: "Realme_C55_5G.jpg"
  },
  {
    name: "Xiaomi Redmi 12C #36",
    price: 8999,
    description: "Entry-level phone with MediaTek Helio G85 and 6.71\" LCD.",
    rating: "3.9",
    imageSize: "850 KB",
    image: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-12c-1.jpg"
  },
  {
    name: "Vivo T2 5G #37",
    price: 18999,
    description: "Mid-range with Snapdragon 695 and AMOLED 120Hz.",
    rating: "4.2",
    imageSize: "1.1 MB",
    image: "Vivo_T2_5G.jpg"
  },
  {
    name: "Motorola Moto G200 5G #38",
    price: 27999,
    description: "Performance budget with Snapdragon 888+ and 144Hz display.",
    rating: "4.3",
    imageSize: "1.2 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g200-5g-1.jpg"
  },
  {
    name: "Sony Xperia Pro-I #39",
    price: 150000,
    description: "Professional camera phone with 1\" sensor and Snapdragon 888.",
    rating: "4.7",
    imageSize: "1.5 MB",
    image: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-pro-i-1.jpg"
  },
  {
    name: "Nokia G400 5G #40",
    price: 15999,
    description: "Affordable 5G with Snapdragon 480 and 6.58\" display.",
    rating: "4.0",
    imageSize: "900 KB",
    image: "https://fdn2.gsmarena.com/vv/pics/nokia/nokia-g400-5g-1.jpg"
  }
];

console.log(mobileProducts);

// Display all products
function loadProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  mobileProducts.forEach(product => {
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
function searchProducts() {
  const input = document.getElementById("search-input").value.trim().toLowerCase();
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  let filtered = [];
  if (!input) {
    filtered = mobileProducts;
  } else if (!isNaN(input)) {
    // If input is a number, search by price >= input
    filtered = mobileProducts.filter(product => product.price >= parseInt(input));
  } else {
    // Otherwise, search by name or description
    filtered = mobileProducts.filter(product =>
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
function clearSearch() {
  document.getElementById("search-input").value = "";
  loadProducts();
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
  // Optionally redirect to login page
  // window.location.href = "../log_in.html";
}

// Hamburger menu toggle
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

// On page load
document.addEventListener("DOMContentLoaded", loadProducts);