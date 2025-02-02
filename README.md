# Chatbot Frontend

## Overview
The Chatbot Frontend is a React-based application that allows users to manage organizations and integrate a chatbot into their workflows. It provides a user-friendly interface for authentication, organization management, and chatbot integration.

## Features
- **User Authentication**: Users can sign up, log in, reset their passwords, and manage their profiles.
- **Organization Management**: Users can add, update, and delete organizations.
- **Chatbot Integration**: Provides a simple method for integrating a chatbot into user applications.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive UI.

## Installation
To get started with this application, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

## Usage

1. **Start the Application**: Run the following command to start the application:
    ```bash
    npm run dev
    ```

2. **Access the Application**: Open your web browser and navigate to `https://chatbot-delta-lac.vercel.app` to view the application.

## Key Components

### App Component
- **Routing**: Manages navigation between different pages using `react-router-dom`.
- **Toast Notifications**: Implements notifications using `react-hot-toast`.

### Authentication Components
- **Signup**: Handles user registration and input validation.
- **Reset Password**: Allows users to reset their passwords with validation.

### Organization Management
- **OrganizationSetup**: Manages the list of organizations, allowing users to add, update, and delete entries.
- **Details**: Displays detailed information about selected organizations.

### Chatbot Integration
- **ChatbotIntegration**: Provides instructions and code snippets for integrating a chatbot into user applications.

### Navbar
- **Navigation**: Displays links for navigation and manages user authentication state.

## Configuration

### Dependencies
The project relies on several key libraries:
- React
- Supabase
- Tailwind CSS
- React Router DOM
- React Hot Toast

### Environment Variables
Ensure to set up your `.env` file with the necessary configurations for Supabase. Required variables include:
```plaintext
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
