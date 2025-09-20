const AllBtn = document.querySelectorAll(".pay-list");

AllBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        let title = e.currentTarget.parentElement.children[0].textContent;
        let price = e.currentTarget.children[0].textContent.split(' ')[0];

        let data = JSON.parse(localStorage.getItem("cart"));

        
        if (data) {
            localStorage.setItem("cart", JSON.stringify([...data, {title, price}]));
        } else localStorage.setItem("cart", JSON.stringify([{title, price}]));

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added Successfully To Cart",
            showConfirmButton: false,
            timer: 1500
        });
    })
})

