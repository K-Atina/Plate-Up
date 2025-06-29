import React from 'react';
import '../styles/HomePage.css'; // Ensure you have the correct path to your CSS file
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            {/* Logo linking to the public home page */}
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{height: '38px', width: '38px'}} />
              PLATE UP
            </Link>
          </div>
          <nav>
            <ul className="nav-links">
              {/* Home link, active on this page */}
              <li><Link to ="/" className="active">Home</Link></li> {/* Changed from /index */}
              {/* Recipes link */}
              <li><Link to="/recipes">Recipes</Link></li> {/* Changed from /recipe */}
              {/* About link */}
              <li><Link to="/about">About</Link></li> {/* Changed from /AboutUs */}
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to="/signin" className="btn-signin">Sign In</Link>
            <Link to="/signup" className="btn-started">Get Started</Link> {/* Changed from /Sign-up */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 style={{marginBottom: '0px'}}>Your Perfect Meal Plans </h1>
        <h1><span className="highlight">Made Simple</span></h1>
        <p>Easily create personalized meal plans, smart shopping lists, and nutritious recipes—all in one seamless process.</p>
        <div className="hero-actions">
          <input type="email" placeholder="Enter your email to get started" />
          {/* Start Planning button linking to signup */}
          <Link to="/signup" style={{margin: '0', padding: '0', display: 'inline-block'}}> {/* Added inline-block for Link styling */}
            <button style={{height: '100%', fontSize: '16px'}} className="btn-getstarted">Start Planning</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2>Your Guide to Easy Healthy Eating</h2>
        <p className="section-desc">
          Our platform offers an all-in-one solution that seamlessly integrates recipe discovery, personalized meal planning, and organized shopping lists, making your cooking experience effortless and enjoyable.
        </p>
        <div className="features">
          <div className="card">
            <img src="/icons/search-icon.png" alt="Search Icon" className="feature-icon" />
            <h4 style={{color: '#28e28b'}}>Smart Recipe Search</h4>
            <p>Find recipes that match your dietary preferences and restrictions</p>
          </div>
          <div className="card">
            <img src="/icons/calendar-icon.png" alt="Calendar Icon" className="feature-icon" />
            <h4 style={{color: '#28e28b'}}>Meal planning</h4>
            <p>Create personalized weekly meal plans with ease</p>
          </div>
          <div className="card">
            <img src="/icons/shopping-cart.png" alt="Shopping Cart" className="feature-icon" />
            <h4 style={{color: '#28e28b'}}>Auto Shopping Lists</h4>
            <p>Generate organized shopping lists from your meal plans</p>
          </div>
          <div className="card">
            <img src="/icons/black heart.png" alt="Heart Icon" className="feature-icon" />
            <h4 style={{color: '#28e28b'}}>Favorite Recipes</h4>
            <p>Save and organize your favorite healthy recipes</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section">
        <h2>Why Choose MealCraft?</h2>
        <p className="section-desc">
          Join a community of users who have transformed their eating habits with our platform.
        </p>
        <div className="benefits">
          <div className="card">
            <h4 className="benefit-title" style={{color: '#28e28b'}}>Saves Time</h4>
            <p>Reduce meal planning time from hours to minutes with our smart automation</p>
          </div>
          <div className="card">
            <h4 className="benefit-title" style={{color: '#28e28b'}}>Healthier Eating</h4>
            <p>Make better food choices with personalized nutrition recommendations</p>
          </div>
          <div className="card">
            <h4 className="benefit-title" style={{color: '#28e28b'}}>Reduce Food Waste</h4>
            <p>Smart shopping lists help you buy exactly what you need</p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section">
        <h2>How MealCraft Works</h2>
        <p className="section-desc">
          Get started with healthy meal planning in just three simple steps.
        </p>
        <div className="steps">
          <div className="card">
            <div className="step-number">1</div>
            <h4>Set Your Preferences</h4>
            <p>Tell us about your dietary preferences, food restrictions, and health goals.</p>
          </div>
          <div className="card">
            <div className="step-number">2</div>
            <h4 >Get Your Plan</h4>
            <p>Receive a personalized weekly meal plan with recipes and nutrition info.</p>
          </div>
          <div className="card">
            <div className="step-number">3</div>
            <h4>Shop & Cook</h4>
            <p>Use our auto-generated shopping list and start cooking delicious meals.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <div className="footer-brand">
              {/* Footer logo linking to public home page */}
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{height: '38px', width: '38px'}} />
                PLATE UP
              </Link>
            </div>
            <p className="footer-description">
              Simplify your healthy eating through personalized meal planning, nutritious recipe discovery, and organized shopping lists.
            </p>
          </div>
          <div className="footer-section">
            <h3>Features</h3>
            <ul className="footer-links">
              {/* Recipe Search linking to public recipes */}
              <li>
                <Link to="/recipes" style={{textDecoration: 'none', color: '#a0aec0'}}>
                  Recipe Search
                </Link>
              </li>
              {/* Meal Planning for public users leads to signin */}
              <li>
                <Link to="/signin" style={{textDecoration: 'none', color: '#a0aec0'}}>
                  Meal Planning
                </Link>
              </li>
              {/* Shopping Lists for public users leads to signin */}
              <li>
                <Link to="/signin" style={{textDecoration: 'none', color: '#a0aec0'}}>
                  Shopping Lists
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              {/* External links should remain <a> tags with proper hrefs */}
              <li><a href="mailto:example@gmail.com">Email: example@gmail.com</a></li>
              <li><a href="tel:0715340778">Call: 0715 340 778</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Plate Up. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;