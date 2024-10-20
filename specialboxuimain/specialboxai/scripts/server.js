// chatbot.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key
const genAI = new GoogleGenerativeAI("AIzaSyBDGrL9k8U6YKdv2OYNOrZg6CifYE01VLk");

// Initialize event listener
export function initializeChat() {
    document.getElementById('sendButton').addEventListener('click', async () => {
        const userInput = document.getElementById('userInput').value;
        if (!userInput) return;

        // Display user message
        displayMessage(userInput, 'user');

        // Clear input
        document.getElementById('userInput').value = '';

        // Check if the user is asking about the model name
        const modelInquiryRegex = /what['’]?s the name of the model|what is the model name|name of the chatbot model|what model are you using|which model are you based on|tell me the model name/i;

        if (modelInquiryRegex.test(userInput)) {
            const responseText = "Special BOX AI Created Using Gemini";
            displayMessage(responseText, 'bot'); // Display the predefined response
            return; // Exit early to avoid calling the generative model
        }

        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b-exp-0924" });
        const result = await model.generateContent(userInput);
        const response = await result.response;
        const text = await response.text();

        // Enhance the text with formatting
        const enhancedText = enhanceText(text);

        // Display bot message
        displayMessage(enhancedText, 'bot', true); // Use innerHTML for enhanced text
    });
}

function enhanceText(text) {
    // (Your existing enhanceText function implementation)
}

function displayMessage(text, sender, isHTML = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    if (isHTML) {
        messageDiv.innerHTML = text; // Use innerHTML for enhanced text
    } else {
        messageDiv.textContent = text;
    }
    document.getElementById('messages').appendChild(messageDiv);
    document.getElementById('chatContainer').scrollTop = document.getElementById('chatContainer').scrollHeight; // Scroll to bottom
}
