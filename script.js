const form1 = document.getElementById('form');
const submitBtn = form1.querySelector('button[type="submit"]');

form1.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form1);
    formData.append("access_key", "21308d4a-a3f2-494c-a005-62b2306298b9");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Thanks for joining!.");
            form1.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
