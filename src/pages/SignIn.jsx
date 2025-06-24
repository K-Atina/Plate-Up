import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function SignIn() {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'white', /* Ensure it has a background */
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h1>Sign In Page</h1>
      <p style={{marginBottom: '20px'}}>This is a placeholder for your Sign In content.</p>
      <p style={{marginBottom: '20px'}}>Please implement your sign-in form here.</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#00d2a0', fontWeight: 'bold' }}>Go to Home Page</Link>
    </div>
  );
}

export default SignIn;
