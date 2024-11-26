// Panggil fungsi saat halaman dimuat
window.onload = displayProducts;


function addToCart(productName, productPrice) {
    // Ambil keranjang dari localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Tambahkan produk ke keranjang
    cart.push({ name: productName, price: productPrice });

    // Simpan kembali ke localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${productName} berhasil ditambahkan ke keranjang!`);
}

function displayCart() {
    // Ambil keranjang dari localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cartItems");

    // Kosongkan kontainer keranjang sebelum ditampilkan
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Keranjang Anda kosong.</p>";
    } else {
        cart.forEach((item, index) => {
            let cartItem = document.createElement("div");
            cartItem.innerHTML = `<p>${item.name} - Rp${item.price}</p>`;
            cartContainer.appendChild(cartItem);
        });
    }
}

const products = [
    { id: 1, name: "Produk 1", price: 100000, image: "product1.jpg" },
    { id: 2, name: "Produk 2", price: 200000, image: "product2.jpg" },
    { id: 3, name: "Produk 3", price: 300000, image: "product3.jpg" },
];

// Fungsi untuk menampilkan katalog produk
function displayProducts() {
    const productContainer = document.getElementById("productCatalog");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Harga: Rp${product.price.toLocaleString()}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Tambah ke Keranjang</button>
        `;

        productContainer.appendChild(productCard);
    });
}

//fungsi menghapus produk dari chart
document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const emptyMessage = document.getElementById("empty-message");

    // Fungsi untuk mengecek apakah keranjang kosong
    function checkEmptyCart() {
        if (cartItemsContainer.children.length === 0) {
            emptyMessage.style.display = "block"; // Tampilkan pesan jika keranjang kosong
        } else {
            emptyMessage.style.display = "none"; // Sembunyikan pesan jika ada item
        }
    }

    // Tambahkan event listener untuk tombol hapus
    cartItemsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-button")) {
            const cartItem = event.target.closest(".cart-item"); // Ambil elemen item
            if (cartItem) {
                cartItem.remove(); // Hapus elemen item
                checkEmptyCart(); // Periksa kembali status keranjang
            }
        }
    });

    // Periksa status keranjang saat halaman pertama kali dimuat
    checkEmptyCart();
});

