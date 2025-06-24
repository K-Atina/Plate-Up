import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div className="footer-brand">
            <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{ height: '38px', width: '38px' }} />
            PLATE UP
          </div>
          <p className="footer-description">
            Simplify your healthy eating through personalized meal planning, nutritious recipe discovery, and organized shopping lists.
          </p>
        </div>
        <div className="footer-section">
          <h3>Features</h3>
          <ul className="footer-links">
            {/*
              IMPORTANT: In a full React app with routing, these 'a' tags
              would be replaced by <Link> components from react-router-dom.
            */}
            <a style={{ textDecoration: 'none', color: '#a0aec0' }} href="/pages/recipe-S.html">
              <p>Recipe Search</p>
            </a>
            <a style={{ textDecoration: 'none', color: '#a0aec0' }} href="/pages/meal-planner.html">
              <p>Meal Planning</p>
            </a>
            <a style={{ textDecoration: 'none', color: '#a0aec0' }} href="/pages/shoppinglist.html">
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
  );
}

export default Footer;