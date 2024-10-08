const chatWindow = document.getElementById('chat-window');

function appendMessage(text, sender) {
    const message = document.createElement('div');
    message.classList.add('chat-message', `${sender}-message`);
    message.innerText = text;
    chatWindow.appendChild(message);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        sendUserMessage();
        return false;
    }
}

function sendUserMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === "") return;
    
    appendMessage(userInput, 'user');
    document.getElementById('userInput').value = '';

    processBotResponse(userInput);
}

function processBotResponse(input) {
    let botResponse = "";

    // Basic keyword matching for chatbot logic
    if (input.toLowerCase().includes('hello') || input.toLowerCase().includes('hi')) {
        botResponse = "Hello! How can I assist you with your mental health today?";
    } else if (input.toLowerCase().includes('appointment')) {
        botResponse = "Would you like to schedule a mental health appointment? Please provide your name and preferred date.";
    } else if (input.toLowerCase().includes('yes')) {
        botResponse = "Great! Please provide your preferred date and time for the appointment.";
    } else if (input.match(/\d{4}-\d{2}-\d{2}/)) {
        // Capture date and time for an appointment (basic format YYYY-MM-DD)
        const appointmentDate = input;
        botResponse = `Your appointment is scheduled for ${appointmentDate}. We will send you a confirmation email.`;
        // You can add additional code here to send this data to the backend
    } else {
        botResponse = "I'm sorry, I didn't understand that. Could you please rephrase?";
    }

    appendMessage(botResponse, 'bot');
}
