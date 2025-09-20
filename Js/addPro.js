
const NewProductName = document.querySelector("#productName");
const NewProductImage = document.querySelector("#productImage");
const NewProductPrice = document.querySelector("#productPrice");
const NewProductCate = document.querySelector("#productCate");
const AddProduct = document.querySelector("#submit-pro");

AddProduct.addEventListener("click", (e) => {
  e.preventDefault();
  const NewProduct = {
    name: NewProductName.value,
    image: NewProductImage.value,
    price: NewProductPrice.value,
    category: NewProductCate.value,
  };

    let result = JSON.parse(localStorage.getItem("products"));
    if (result) {
        localStorage.setItem("products", JSON.stringify([...result,JSON.stringify(NewProduct)]));
    }else localStorage.setItem("products", [JSON.stringify(NewProduct)]);


    Swal.fire({
        position: "center",
        icon: "success",
        title: "Product Added Successfully",
        showConfirmButton: false,
        timer: 1500
    });
});


/*

*/