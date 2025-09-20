const PProduct = JSON.parse(localStorage.getItem("sortASC"));
const TotalPrice = document.querySelector(".total-price");
const PaiedProduct = document.querySelector(".paied-products");
let sum = 0;

PProduct.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("w-100", "mb-5");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let title = document.createElement("h5");
    title.classList.add("d-flex", "justify-content-between")
    title.textContent = item.title;

    let price = document.createElement("span");
    price.textContent = item.price;
    sum += Math.round(+item.price.replace("$", ""));
    title.appendChild(price);

    cardBody.appendChild(title);

    let removeBtn = document.createElement("a");
    removeBtn.classList.add("btn", "btn-danger", 'float-end', 'd-inline-block', 'removeBtn');
    removeBtn.textContent = "Remove";

    cardBody.appendChild(removeBtn);
    card.appendChild(cardBody);

    PaiedProduct.appendChild(card);
})

TotalPrice.children[0].textContent = `${sum}$`;

let removeBtn = document.querySelectorAll(".removeBtn");
removeBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        let title = e.currentTarget.parentElement.children[0].textContent.split("$")[0];
        let price = e.currentTarget.parentElement.children[0].children[0].textContent.replace("$", '');
        console.log(title);
        let data = JSON.parse(localStorage.getItem("cart"));
        
        console.log(data)
        let removed = data.findIndex((item) => {
            if (item.title === title) return true;
        })

        data.splice(removed, 1);
        sum -= price;
        TotalPrice.children[0].textContent = `${sum}$`;
        localStorage.setItem("cart", JSON.stringify(data));
        e.currentTarget.parentElement.parentElement.remove();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Removed Successfully",
            showConfirmButton: false,
            timer: 1500
        });
    })
})
