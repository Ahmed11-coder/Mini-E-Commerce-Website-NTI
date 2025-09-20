const products = [
    {
        image:
        "https://hatif.net/wp-content/uploads/2021/10/Infinix-Zero-X-Pro-min-1-600x600.jpg",
        name: "Smartphone X Pro",
        price: 899.99,
        category: "Electronics",
    },
    {
        image: "https://i.ebayimg.com/images/g/2YEAAOSwz6pmvC-N/s-l1200.jpg",
        name: "AirPulse Running Shoes",
        price: 89.99,
        category: "Footwear",
    },
    {
        image:
        "https://cdn.everythingkitchens.com/media/catalog/product/cache/1e92cb92f6cdc27d285ff0da8b2b8583/7/1/71xnpssizdl._ac_sl1500_.jpg",
        name: "Deluxe Coffee Machine",
        price: 149.99,
        category: "Appliances",
    },
    {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarTGcOLHF0ydcgpQjcxXxswOhJfcyI1Gigg&s",
        name: "Wireless Headphones",
        price: 129.99,
        category: "Electronics",
    },
    {
        image:
        "https://aviation.travelpro.com/cdn/shop/files/430245801_1-min_286x286.jpg?v=1727726169",
        name: "TravelPro Backpack",
        price: 69.99,
        category: "Accessories",
    },
    {
        image: "https://m.media-amazon.com/images/I/71-Fe8L2+KL.jpg",
        name: "UltraBook Pro 15",
        price: 1299.99,
        category: "Electronics",
    },
    {
        image:
        "https://ksns.shop/cdn/shop/files/02_65b585c0-f17f-44ee-882e-5071111bc46b.jpg?v=1741850015",
        name: "Urban Trek SneakersUrban Trek Sneakers",
        price: 99.99,
        category: "Footwear",
    },
    {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfzMInnXEFKdVfdqqO2s7bqCONslZTHwnrg&s",
        name: "Smart Refrigerator",
        price: 1999.99,
        category: "Appliances",
    },
    {
        image:
        "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad,format=webp,quality=70/images/S400899936_1?1754811993",
        name: "Smartwatch Elite",
        price: 249.99,
        category: "Accessories",
    },
    {
        image:
        "https://cdn.media.amplience.net/i/canon/eos-5d-mark-iv-frt-w-ef-50mm_cbe4f7204ac24bf9bc8f79fb6cce4179?$block-media-1by1-dt-jpg$",
        name: "DSLR Camera Pro",
        price: 799.99,
        category: "Electronics",
    },
    {
        image: "https://m.media-amazon.com/images/I/61taJrJsmbL.jpg",
        name: "Electric Kettle Pro",
        price: 59.99,
        category: "Appliances",
    },
    {
        image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgI8UsXPbHXCbMifxo1qEwCcxenZpWnYy1JQ&s",
        name: "Tablet Air 12",
        price: 599.99,
        category: "Electronics",
    },
    {
        image:
        "https://www.themandagies.com/wp-content/uploads/2021/01/How-To-Layer-Winter-Clothing-The-Mandagies-1-scaled.jpg",
        name: "Rugged Hiking Boots",
        price: 119.99,
        category: "Footwear",
    },
    {
        image:
        "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/7/6772504622432-2.jpg",
        name: "Smart Microwave Oven",
        price: 179.99,
        category: "Appliances",
    },
    {
        image: "https://m.media-amazon.com/images/I/61Zb9zQtBKL._UY1000_.jpg",
        name: "Polarized Sunglasses",
        price: 49.99,
        category: "Accessories",
    },
    {
        image:
        "https://assets.bosecreative.com/transform/2f5c9310-dc99-4cb1-a60c-ee709bbdc461/sf_pdp_SLMPS_gallery_black_600x450_x2-1?quality=90",
        name: "Bluetooth Speaker Max",
        price: 89.99,
        category: "Electronics",
    },
];

const ProductsSection = document.querySelector("#products .pro-content");

const Products = JSON.parse(localStorage.getItem("products"));

products.forEach((item, i) => {
    if (i == 0) localStorage.setItem("products", []);
    let result = localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products"))
        : [];
        result.push(JSON.stringify(item));
        localStorage.setItem("products", JSON.stringify(result));
    });

Products.forEach((obj) => {
    let item = JSON.parse(obj);
    const card = document.createElement("div");
    card.classList.add("card", "col", "p-0");
    card.style.width = "18rem";

    const cardImg = document.createElement("img");
    cardImg.src = item.image;
    cardImg.classList.add("card-img-top");
    cardImg.alt = "...";
    cardImg.style.height = "280px";
    cardImg.style.objectFit = "cover";

    card.appendChild(cardImg);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const productName = document.createElement("h5");
    productName.classList.add("card-title");
    productName.textContent = item.name;

    cardBody.appendChild(productName);

    const productText = document.createElement("p");
    productText.classList.add("card-text");
    productText.textContent = "Lorem ipsum dolor sit.";

    cardBody.appendChild(productText);

    const payBtn = document.createElement("a");
    payBtn.href = "#";
    payBtn.classList.add(
        "btn",
        "border",
        "w-100",
        "d-flex",
        "justify-content-between",
        "pay-list"
    );
    payBtn.textContent = "Add To Cart";

    const price = document.createElement("span");
    price.textContent = `$${item.price}`;

    payBtn.appendChild(price);

    cardBody.appendChild(payBtn);

    card.appendChild(cardBody);

    ProductsSection.appendChild(card);
});
