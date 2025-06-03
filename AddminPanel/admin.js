// Sidebar navigation
function showSection(sectionId) {
  document.querySelectorAll('.admin-section').forEach(sec => {
    sec.classList.add('d-none');
  });
  document.getElementById(sectionId).classList.remove('d-none');
  document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
  const sidebarItems = document.querySelectorAll('.sidebar-menu li');
  if (sectionId === 'dashboard') sidebarItems[0].classList.add('active');
  if (sectionId === 'products') sidebarItems[1].classList.add('active');
  if (sectionId === 'users') sidebarItems[2].classList.add('active');
  if (sectionId === 'orders') sidebarItems[3].classList.add('active');
  if (sectionId === 'settings') sidebarItems[4].classList.add('active');
}

// Dummy data for demonstration
let products = [
  { name: "iPhone 15", category: "Mobile", price: 79999, stock: 12 },
  { name: "Men's Shoes", category: "Fashion", price: 2999, stock: 30 }
];
let users = [
  { name: "Ravi Kumar", email: "ravi@email.com", role: "Admin" },
  { name: "Priya Sharma", email: "priya@email.com", role: "Customer" }
];
let orders = [
  { user: "Priya Sharma", product: "iPhone 15", status: "Delivered", date: "2024-05-01" }
];

// Populate dashboard stats
function updateDashboard() {
  document.getElementById('userCount').textContent = users.length;
  document.getElementById('productCount').textContent = products.length;
  document.getElementById('orderCount').textContent = orders.length;
  document.getElementById('revenueCount').textContent = "₹" + (orders.length * 10000);
}

// Populate products table
function renderProducts() {
  const tbody = document.getElementById('productTable');
  tbody.innerHTML = "";
  products.forEach((p, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${p.name}</td>
        <td>${p.category}</td>
        <td>₹${p.price}</td>
        <td>${p.stock}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editProduct(${i})"><i class="fa fa-edit"></i></button>
          <button class="btn btn-sm btn-danger" onclick="deleteProduct(${i})"><i class="fa fa-trash"></i></button>
        </td>
      </tr>
    `;
  });
}

// Populate users table
function renderUsers() {
  const tbody = document.getElementById('userTable');
  tbody.innerHTML = "";
  users.forEach((u, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${u.name}</td>
        <td>${u.email}</td>
        <td>${u.role}</td>
        <td>
          <button class="btn btn-sm btn-danger" onclick="deleteUser(${i})"><i class="fa fa-trash"></i></button>
        </td>
      </tr>
    `;
  });
}

// Populate orders table
function renderOrders() {
  const tbody = document.getElementById('orderTable');
  tbody.innerHTML = "";
  orders.forEach((o, i) => {
    tbody.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${o.user}</td>
        <td>${o.product}</td>
        <td>${o.status}</td>
        <td>${o.date}</td>
        <td>
          <button class="btn btn-sm btn-success" onclick="markOrderDelivered(${i})"><i class="fa fa-check"></i></button>
        </td>
      </tr>
    `;
  });
}

// Product Modal logic
function showProductModal(editIndex = null) {
  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  document.getElementById('productForm').reset();
  document.getElementById('productModalLabel').textContent = editIndex === null ? "Add Product" : "Edit Product";
  document.getElementById('productForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = +document.getElementById('productPrice').value;
    const stock = +document.getElementById('productStock').value;
    if (editIndex === null) {
      products.push({ name, category, price, stock });
    } else {
      products[editIndex] = { name, category, price, stock };
    }
    modal.hide();
    renderProducts();
    updateDashboard();
  };
  if (editIndex !== null) {
    const p = products[editIndex];
    document.getElementById('productName').value = p.name;
    document.getElementById('productCategory').value = p.category;
    document.getElementById('productPrice').value = p.price;
    document.getElementById('productStock').value = p.stock;
  }
  modal.show();
}
function editProduct(i) { showProductModal(i); }
function deleteProduct(i) {
  if (confirm("Delete this product?")) {
    products.splice(i, 1);
    renderProducts();
    updateDashboard();
  }
}

// User logic
function deleteUser(i) {
  if (confirm("Delete this user?")) {
    users.splice(i, 1);
    renderUsers();
    updateDashboard();
  }
}

// Order logic
function markOrderDelivered(i) {
  orders[i].status = "Delivered";
  renderOrders();
}

// Logout
function logoutAdmin() {
  alert("Logged out!");
  window.location.href = "../index.html";
}

// Initial render
document.addEventListener("DOMContentLoaded", function() {
  showSection('dashboard');
  updateDashboard();
  renderProducts();
  renderUsers();
  renderOrders();
});