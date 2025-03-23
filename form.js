function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("phone").value.trim();
    let country = document.getElementById("inquery type").value.trim();

    let terms = document.getElementById("terms").checked;

    let isValid = true;
    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is Required"
        isValid = false;
    }

    if (!email.includes("@")) {
        document.getElementById("emailError").innerText = "Invalid Email"
        isValid = false;
    }

    if (isNaN(age) || age <= 0) {
        document.getElementById("ageError").innerText = "Enter a Valid Age"
        isValid = false;
    }

    if (country === "") {
        document.getElementById("countryError").innerText = "Please Select  a Country"
        isValid = false;
    }

    if (!terms) {
        document.getElementById("termsError").innerText = "Please agree Terms & Conditions"
        isValid = false;
    }

    if (isValid) {
        alert(`Submitted Data: \nName: ${name}\nEmail: ${email}\nAge: ${age}\nCountry: ${country}`);
    }
    return isValid;
}