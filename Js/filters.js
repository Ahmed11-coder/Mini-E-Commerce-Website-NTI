const asc = document.querySelector(".sortASC");
const dsc = document.querySelector(".sortDSC");

function getAllProducts() {
    let result = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
    return result.map((item) => JSON.parse(item));
}

const AllProducts = getAllProducts();

function sortProductsASC() {
    let products = [...AllProducts].sort((a, b) => {
        return a.price - b.price;
    })

    localStorage.setItem("products", JSON.stringify(products.map((item) => JSON.stringify(item))));
    window.location.reload();
}

function sortProductsDSC() {
    let products = [...AllProducts].sort((a, b) => {
        return +b.price - +a.price;
    });

    localStorage.setItem("products", JSON.stringify(products.map((item) => JSON.stringify(item))));
    window.location.reload();
}

asc.addEventListener("click", (e) => {
    e.preventDefault();
    sortProductsASC();
})

dsc.addEventListener("click", (e) => {
    e.preventDefault();
    sortProductsDSC();
})

const categories = document.querySelectorAll(".category");

function saveCategories() {
    const state = {};
    categories.forEach(cate => {
        state[cate.name] = cate.checked;
    })

    localStorage.setItem("categories", JSON.stringify(state));
}

function loadCategories() {
    const saved = localStorage.getItem("categories");

    if (saved) {
        const state = JSON.parse(saved);
        categories.forEach(cate => {
            console.log(cate);
            if (state.hasOwnProperty(cate.name)) {
                cate.checked = state[cate.name];
            }
        })
    }
}

function filterProducts() {
    const selectedCategories = [...categories]
        .filter(cat => cat.checked)
        .map(cat => cat.name.toLowerCase());

    let filteredProducts = AllProducts;
    if (selectedCategories.length > 0) {
        filteredProducts = AllProducts.filter(product => 
            selectedCategories.includes(product.category.toLowerCase())
        );
    }

    localStorage.setItem(
        "products",
        JSON.stringify(filteredProducts.map(item => JSON.stringify(item)))
    );
    window.location.reload();
}
loadCategories();

[...categories].forEach((item) => {
    item.addEventListener("change", () => {
        saveCategories();
        filterProducts();
        window.location.reload();
    })
})