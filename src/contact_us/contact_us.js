document.addEventListener("DOMContentLoaded", () => {

    /* LOAD NAVBAR */
    fetch("../../nav_bar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;

            // Fix logo paths
            const logoImg = document.getElementById("logo-img");
            const hamburgerImg = document.getElementById("hamburger-img");
            const logoLink = document.querySelector(".logo");

            if (logoImg) logoImg.src = "../../images/AquaLens-Logo.png";
            if (hamburgerImg) hamburgerImg.src = "../../images/Hamburger_Menu_Nav_bar.png";
            if (logoLink) logoLink.href = "../../index.html";
        })
        .catch(err => console.error("Navbar load failed:", err));

    /* LOAD FOOTER */
    fetch("../../footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer-container").innerHTML = data;
        })
        .catch(err => console.error("Footer load failed:", err));

    /* FORM SUBMIT */
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", e => {
        e.preventDefault();

        const successMessage = document.createElement("p");
        successMessage.style.color = "lightgreen";
        successMessage.style.fontWeight = "bold";
        successMessage.textContent = "Thank you! Your message has been submitted.";

        form.appendChild(successMessage);

        console.log("Form submitted:", {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            questionType: form.questionType.value,
            phone: form.phone.value,
            message: form.message.value
        });

        form.reset();

        setTimeout(() => successMessage.remove(), 5000);
    });
});


