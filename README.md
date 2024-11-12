# chatbot
##This project is a full-stack chatbot application designed for personalized user interaction, with a focus on handling user queries related to depression and mental health support. The backend manages user authentication, chat history, and user profile updates, while the frontend provides a simple interface for communication.

#Table of Contents
Motivation
Features
Tech Stack
Schema
Setup and Installation
API Design
Endpoints
Usage

#Motivation
##The goal of this project is to create a chatbot that can provide personalized emotional support, store chat history, and allow users to manage their profile. The application leverages modern technologies to offer a seamless and secure experience.

#Features
User Registration & Authentication: Users can sign up, log in, and securely authenticate using JWT tokens.
Chat Interaction: Users can send and receive messages with the chatbot.
Chat History: Users can view, delete, and manage their chat history.
Profile Management: Users can update their name and personal information.
Secure Authentication: Ensures the safety of user data with hashed passwords and JWT authentication.
Responsive UI: Mobile-optimized and user-friendly interface for an enhanced experience.

##Tech Stack
Frontend: React with Vite for optimized and fast development.
Backend: Node.js, Express.js for REST API development.
Database: MongoDB for storing user data and chat history.
Authentication: JWT tokens for secure login and session management.


##Schema
User Schema
The User schema stores essential information, such as name, email, and password, for each user.
Chat History Schema
Stores chat history, linking each message to a specific user and allowing retrieval of past conversations.


##Setup and Installation
Prerequisites
MongoDB must be installed and running.
Node.js and npm must be installed.
Steps
Clone the repository and navigate to the project directory.

Set up the backend:

Navigate to the server folder.
Install dependencies and create a .env file with the necessary environment variables.
Start the backend server.
Set up the frontend:

Navigate to the client folder.
Install dependencies and start the development server.
Open your browser and go to http://localhost:3000.


##API Design
Authentication APIs
POST /signup: Registers a new user.

Input: name, email, password.
Output: JWT token and refresh token.
POST /login: Authenticates a user.

Input: email, password.
Output: JWT token and refresh token.
Chat History APIs
GET /chatHistory: Retrieves all chat messages for a user.

Input: JWT token.
Output: Array of chat messages.
DELETE /chatHistory: Deletes a user's chat history.

Input: JWT token.
Output: Success or error message.
Profile Management API
POST /updateName: Updates the user's name.

Input: JWT token, newName.
Output: Success message.
POST /verifyUser: Verifies the user's token.

Input: JWT token.
Output: User's details or an error message if the token is expired.

##Usage
Sign Up: Create a new account using the /signup endpoint.
Login: Authenticate and retrieve tokens via /login.
Chat with Bot: Interact with the chatbot to receive emotional support.
Manage Chat History: View, delete, or manage your chat history with the /chatHistory and /deleteHistory endpoints.
Update Profile: Change your name using the /updateName endpoint.
