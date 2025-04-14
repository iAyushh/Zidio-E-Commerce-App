import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18+
import { GoogleOAuthProvider } from '@react-oauth/google';  // If you're using Google OAuth
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap styling

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap the App in GoogleOAuthProvider if using Google OAuth, or remove it if not
root.render(
  <GoogleOAuthProvider clientId="YOUR_GOOGLE_OAUTH_CLIENT_ID">
    <App />
  </GoogleOAuthProvider>
);
