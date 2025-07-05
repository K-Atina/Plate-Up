import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  //UseNavigate hook
  const navigate = useNavigate(); //Initialises useNavigate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update password strength when password changes
    if (name === 'password') {
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1; //Special characters
    return Math.min(strength, 5);
  };

  
  const getStrengthClass = (strength) => {
    switch (strength) {
      case 1:
        return 'strength-weak';
      case 2:
        return 'strength-fair';
      case 3:
        return 'strength-good';
      case 4:
        return 'strength-strong'; 
      case 5:
        return 'strength-very-strong'; 
      default:
        return '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //Will prevent the page from reloading

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    //NO backend --> Figure out how to do auth/o without backend
    // Simulate account creation (doesn't actually do anything cause there is no backend)
    setIsSubmitting(true);

    setTimeout(() => { //Waits for two seconds then shows a success alert and resets the isSubmitting state
      alert('Account created successfully!');
      setIsSubmitting(false); //Resets the loading state
      // Navigate to quiz page
      navigate('/Quiz');
    }, 2000);
  };


  const simulateAuthAction = (provider) => {
    alert(`Signing up with ${provider}...`);
  };

  const signInWithGoogle = () => {
    simulateAuthAction('Google');
  };

  const signInWithMicrosoft = () => {
    simulateAuthAction('Microsoft');
  };

  const signInWithApple = () => {
    simulateAuthAction('Apple');
  };

  return (
    <div className="signup-container">
      <style jsx>{`
        body {
          font-family: "Segoe UI", sans-serif;
          background: #9df0db;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          margin: 0;
        }
        
        .signup-container {
          background: white;
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 40px;
          width: 100%;
          max-width: 600px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
          animation: slideIn 0.8s ease-out;
          max-height: 90vh;
          overflow-y: auto;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .logo {
          text-align: center;
          margin-bottom: 30px;
          position: relative;
          z-index: 2;
        }

        h1 {
          text-align: center;
          color: black;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 40px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          position: relative;
          z-index: 2;
        }

        .form-row {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .form-group {
          flex: 1;
          margin-bottom: 20px;
          position: relative;
        }

        label {
          display: block;
          color: rgba(0, 0, 0, 0.9);
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 8px;
          position: relative;
          z-index: 2;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          color: black;
          font-size: 16px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: relative;
          z-index: 2;
          box-sizing: border-box;
        }

        input[type="text"]::placeholder,
        input[type="email"]::placeholder,
        input[type="password"]::placeholder {
          color: rgba(0, 0, 0, 0.6);
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="password"]:focus {
          outline: none;
          border-color: #00d4ff;
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.2),
            0 8px 25px rgba(0, 212, 255, 0.3);
          transform: translateY(-2px);
        }

        .btn {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-bottom: 15px;
          position: relative;
          overflow: hidden;
          z-index: 2;
        }

        .btn-primary {
          background: #41ecc2;
          color: black;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.6);
        }

        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .social-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 30px 0;
          position: relative;
          z-index: 2;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          cursor: pointer;
        }

        .social-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .google-btn {
          background: rgba(234, 67, 53, 0.1);
          border-color: rgba(234, 67, 53, 0.2);
          color: #ea4335;
        }

        .google-btn:hover {
          background: rgba(234, 67, 53, 0.15);
          border-color: #ea4335;
          box-shadow: 0 8px 25px rgba(234, 67, 53, 0.3);
        }

        .microsoft-btn {
          background: rgba(0, 164, 241, 0.1);
          border-color: rgba(0, 164, 241, 0.2);
          color: #00a4f1;
        }

        .microsoft-btn:hover {
          background: rgba(0, 164, 241, 0.15);
          border-color: #00a4f1;
          box-shadow: 0 8px 25px rgba(0, 164, 241, 0.3);
        }

        .apple-btn {
          background: rgba(0, 0, 0, 0.1);
          border-color: rgba(0, 0, 0, 0.2);
          color: #000;
        }

        .apple-btn:hover {
          background: rgba(0, 0, 0, 0.15);
          border-color: #000;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .footer-links {
          text-align: center;
          margin-top: 30px;
          position: relative;
          z-index: 2;
        }

        .footer-links a {
          color: rgba(0, 0, 0, 0.8);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
        }

        .footer-links a:hover {
          color: #00d4ff;
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }

        .footer-links p {
          color: rgba(0, 0, 0, 0.7);
          font-size: 14px;
          margin-bottom: 10px;
        }

        .password-strength {
          height: 4px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 2px;
          margin-top: 8px;
          overflow: hidden;
          position: relative;
        }

        .password-strength-bar {
          height: 100%;
          width: 0%;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .strength-weak {
          background: #ff4757;
          width: 20%;
        }
        .strength-fair {
          background: #ffa502;
          width: 40%;
        }
        .strength-good {
          background: #2ed573;
          width: 60%;
        }
        .strength-strong {
          background: #5b86e5;
          width: 80%;
        }

        .strength-very-strong{
          background: #1abc9c;
          width: 100%;
        }

        @media (max-width: 600px) {
          .signup-container {
            padding: 30px 20px;
            margin: 10px;
            max-height: calc(100vh - 20px);
          }

          .form-row {
            flex-direction: column;
            gap: 0;
          }

          h1 {
            font-size: 28px;
          }

          .social-buttons {
            gap: 15px;
          }

          .social-btn {
            width: 70px;
            height: 70px;
          }
        }
      `}</style>
      
      <div className="logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
        <div className="website-name" style={{ color: '#28e28b', fontWeight: '700', fontSize: '2.2rem' }}>
          PLATE UP
        </div>
        <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{ height: '60px', width: '60px' }} />
      </div>
      
      <h1 style={{color: `rgb(52,235,143)`}}>SIGN UP</h1>
      
      <div id="signupForm">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div className="password-strength">
              <div 
                className={`password-strength-bar ${getStrengthClass(passwordStrength)}`}
                id="strengthBar"
                style={{ width: passwordStrength === 0 ? '0%' : undefined }}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <button 
          onClick={handleSubmit}
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </button>
      </div>
      
      <div className="social-buttons">
        <div className="social-btn google-btn" onClick={signInWithGoogle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
              <path fill="#ea4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span style={{ fontSize: '10px', fontWeight: '600' }}>Google</span>
          </div>
        </div>
        
        <div className="social-btn microsoft-btn" onClick={signInWithMicrosoft}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
              <path fill="#f25022" d="M0 0h11v11H0z"/>
              <path fill="#00a4ef" d="M13 0h11v11H13z"/>
              <path fill="#7fba00" d="M0 13h11v11H0z"/>
              <path fill="#ffb900" d="M13 13h11v11H13z"/>
            </svg>
            <span style={{ fontSize: '10px', fontWeight: '600' }}>Microsoft</span>
          </div>
        </div>
        
        <div className="social-btn apple-btn" onClick={signInWithApple}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span style={{ fontSize: '10px', fontWeight: '600' }}>Apple</span>
          </div>
        </div>
      </div>
      
      <div className="footer-links">
        <p>Already have an account? <Link to="/Sign-In">Sign In</Link></p>
        <Link to="/">Return to Home Page</Link>
      </div>
    </div>
  );
};

export default SignUp;