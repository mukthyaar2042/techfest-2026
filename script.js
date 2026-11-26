const form = document.getElementById("registrationForm");

if (form) {
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const college = document.getElementById("college").value.trim();
        const selectedEvent = document.getElementById("event").value;

        if (!name || !email || !phone || !college || !selectedEvent) {
            alert("Please fill in all required fields.");
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Hide the form after successful validation
        form.style.display = "none";

        // Display confirmation
        const confirmation = document.getElementById("confirmation");
        const details = document.getElementById("confirmationDetails");

        details.textContent =
            "Name: " + name +
            " | Event: " + selectedEvent;

        confirmation.hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}