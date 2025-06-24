import React, { useState, useEffect } from 'react';
import './SignUp.css'; // Assuming you have a CSS file for styles

function SignUp() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  // Effect to update password strength when password changes
  useEffect(() => {
    const calculatePasswordStrength = (pw) => {
      let strength = 0;
      if (pw.length >= 8) strength += 1;
      if (/[a-z]/.test(pw)) strength += 1;
      if (/[A-Z]/.test(pw)) strength += 1;
      if (/[0-9]/.test(pw)) strength += 1;
      if (/[^A-Za-z0-9]/.test(pw)) strength += 1;
      return Math.min(strength, 5); // Max strength 5 based on your CSS classes
    };
    setPasswordStrength(calculatePasswordStrength(password));
  }, [password]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate account creation
    const btn = e.target.querySelector(".btn-primary");
    const originalText = btn.textContent;
    btn.textContent = "Creating Account...";
    btn.style.background = "linear-gradient(135deg, #2ed573 0%, #17a2b8 100%)";

    setTimeout(() => {
      alert("Account created successfully! 🎉");
      btn.textContent = originalText;
      btn.style.background = "#41ecc2"; // Reset to original btn-primary background
      // In a real app, you'd use react-router-dom to navigate:
      // navigate('/quiz'); // Assuming '/quiz' is your quiz page route
      window.location.href = '/pages/quiz.html'; // Fallback for non-React Router setup
    }, 2000);
  };

  // Social auth functions (simulated)
  const signInWithGoogle = () => {
    alert("Redirecting to Google authentication...");
    // Implement actual Google OAuth here
  };

  const signInWithMicrosoft = () => {
    alert("Redirecting to Microsoft authentication...");
    // Implement actual Microsoft OAuth here
  };

  const signInWithApple = () => {
    alert("Redirecting to Apple authentication...");
    // Implement actual Apple OAuth here
  };

  // Particle effect (implemented using React's useEffect)
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        top: 100%;
        animation: floatUp ${3 + Math.random() * 4}s linear forwards;
      `;
      document.body.appendChild(particle);
      setTimeout(() => {
        particle.remove();
      }, 7000);
    };

    const particleInterval = setInterval(createParticle, 500);

    // Cleanup interval and style tag when component unmounts
    return () => {
      clearInterval(particleInterval);
      document.head.removeChild(style);
    };
  }, []); // Run once on component mount

  // Input animation handlers (using inline styles for simplicity, or could use CSS classes)
  const handleInputFocus = (e) => {
    e.target.parentElement.style.transform = "translateY(-2px)";
  };

  const handleInputBlur = (e) => {
    e.target.parentElement.style.transform = "translateY(0)";
  };

  return (
    <div className="signup-container">
      <div className="logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
        <div className="website-name" style={{ color: '#28e28b', fontWeight: 700, fontSize: '2.2rem' }}>PLATE UP</div>
        <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{ height: '60px', width: '60px' }} />
      </div>

      <h1>SIGN UP</h1>

      <form id="signupForm" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" required
              onFocus={handleInputFocus} onBlur={handleInputBlur} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" required
              onFocus={handleInputFocus} onBlur={handleInputBlur} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required
            onFocus={handleInputFocus} onBlur={handleInputBlur} />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <div className="password-strength">
              <div
                className={`password-strength-bar strength-${
                  passwordStrength === 1 ? 'weak' :
                  passwordStrength === 2 ? 'weak' : // Your original JS had weak for 1 and 2
                  passwordStrength === 3 ? 'fair' :
                  passwordStrength === 4 ? 'good' :
                  passwordStrength === 5 ? 'strong' : ''
                }`}
                id="strengthBar"
              ></div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>

      <div className="social-buttons">
        <a href="#" className="social-btn google-btn" onClick={signInWithGoogle}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
              <path fill="#ea4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span style={{ fontSize: '10px', fontWeight: 600 }}>Google</span>
          </div>
        </a>

        <a href="#" className="social-btn microsoft-btn" onClick={signInWithMicrosoft}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
              <path fill="#f25022" d="M0 0h11v11H0z" />
              <path fill="#00a4ef" d="M13 0h11v11H13z" />
              <path fill="#7fba00" d="M0 13h11v11H0z" />
              <path fill="#ffb900" d="M13 13h11v11H13z" />
            </svg>
            <span style={{ fontSize: '10px', fontWeight: 600 }}>Microsoft</span>
          </div>
        </a>

        <a href="#" className="social-btn apple-btn" onClick={signInWithApple}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px' }}>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span style={{ fontSize: '10px', fontWeight: 600 }}>Apple</span>
          </div>
        </a>
      </div>

      <div className="footer-links">
        <p>Already have an account? <a href="/pages/signin.html">Sign In</a></p>
        <a href="/pages/index.html">Return to Home Page</a>
      </div>
    </div>
  );
}

export default SignUp;
