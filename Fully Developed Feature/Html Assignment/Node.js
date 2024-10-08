document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Simple validation (could be expanded)
    if (name && email && date && time) {
        // Display a confirmation message
        document.getElementById('confirmationMessage').innerText = `Thank you, ${name}. Your appointment is booked for ${date} at ${time}. We will send a confirmation to ${email}.`;
    }
});
