
const Email = document.querySelector("#exampleInputEmail1");
const Password = document.querySelector("#exampleInputPassword1");
const LoginBtn = document.querySelector("#login-btn");


LoginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (Email.value.toLowerCase() !== "ahmed@example.com") {
        Swal.fire({
            icon: "error",
            title: "Error : Wrong Input Value",
            text: "Email Is Not Exist, Please Write The Valid Email",
        })
    } else if (Password.value !== "1234") {
        Swal.fire({
            icon: "error",
            title: "Error : Wrong Input Value",
            text: "Password Is Wrong",
        })
    }
    
    if (Email.value.toLowerCase() === "ahmed@example.com" && Password.value === "1234") {
        window.location.pathname = "pages/home.html";
    }
})

