
const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const iconError = document.querySelector(".icon__error");
const alertMsg = document.querySelector("#email__error");
const successMsg = document.querySelector("#email__success")
const btnSubmit = document.querySelector(".btn");

btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    const emailInput = document.querySelector("#email").value.trim();

    if (emailInput.match(emailPattern)) {
        successMsg.classList.remove("hidden");
        iconError.classList.add("hidden");
        alertMsg.classList.add("hidden")
        return true;
    }
    else {
        iconError.classList.remove("hidden");
        alertMsg.classList.remove("hidden");
        successMsg.classList.add("hidden");
        return false;
    }
})