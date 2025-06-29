import React from 'react';
import '../styles/HomePageSignedIn.css'; // Import your specific styles for this page

const HomePageSignedIn = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{height: '38px', width: '38px'}} />
            PLATE UP
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#" className="active">Home</a></li>
              <li><a href="/pages/recipe-S.html">Recipes</a></li>
              <a href="/pages/meal-planner.html">Meal Plans</a>
              <a href="/pages/favourites.html">Favourites</a>
              <li><a href="/pages/AboutUs.html">About</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <a href="/pages/index.html" className="btn-signin">Log Out</a>
            <a href="/pages/Profile.html" className="btn-started">Profile</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1 style={{marginBottom: '0px'}}>Your Perfect Meal Plans </h1>
        <h1><span className="highlight">Made Simple</span></h1>
        <p>Easily create personalized meal plans, smart shopping lists, and nutritious recipes—all in one seamless process.</p>
        <div className="hero-actions">
          <a style={{margin: '0', padding: '0'}} href="/pages/meal-planner.html">
            <button style={{height: '42px', fontSize: '16px'}} className="btn-getstarted">Start Planning</button>
          </a>
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
            <h4>Get Your Plan</h4>
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
              <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{height: '38px', width: '38px'}} />
              PLATE UP
            </div>
            <p className="footer-description">
              Simplify your healthy eating through personalized meal planning, nutritious recipe discovery, and organized shopping lists.
            </p>
          </div>
          <div className="footer-section">
            <h3>Features</h3>
            <ul className="footer-links">
              <a style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/recipe-S.html">
                <p>Recipe Search</p>
              </a>
              <a style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/meal-planner.html">
                <p>Meal Planning</p>
              </a>
              <a style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/shoppinglist.html">
                <p>Shopping Lists</p>
              </a>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#">Email: example@gmail.com</a></li>
              <li><a href="#">Call: 0715 340 778</a></li>
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

export default HomePageSignedIn;