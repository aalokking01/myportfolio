
const contactForm = document.getElementById("contactform");

contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const submitButton = contactForm.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: new FormData(contactForm)
            }
        );

        const result = await response.json();

        if (response.ok && result.success) {
            contactForm.reset();
            alert("Message sent successfully!");
        } else {
            alert(result.message || "Failed to send message.");
        }
    } catch (error) {
        alert("Network error! Please try again.");
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
    }
});


const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");

if (hamburger && navlinks) {
    hamburger.addEventListener("click", () => {
        navlinks.classList.toggle("active");
    });

    navlinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navlinks.classList.remove("active");
        });
    });
}
