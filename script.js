
<script>
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
</script>
