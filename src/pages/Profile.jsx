import React from 'react';
import '../styles/Profile.css'; // Import your specific styles for the Profile page

const Profile = () => {
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
              <li><a href="/pages/AboutUs-S.html">About</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <a href="/pages/index.html" className="btn-signin">Log Out</a>
            <a href="/pages/Profile.html" className="btn-started">Profile</a>
          </div>
        </div>
      </header>

      {/* Profile Main */}
      <main className="profile-main">
        <h1 className="profile-title">Profile</h1>
        <div className="profile-card">
          <div className="profile-picture-section">
            <div className="profile-initials-wrapper" title="Online">
              <div className="profile-initials">JD</div>
              {/* <span className="profile-status" title="Online"></span> */}
            </div>
            <div className="profile-user-details">
              <span className="profile-user-name">John Doe</span>
              <span className="profile-user-role">Premium Member</span>
            </div>
          </div>
          <div className="profile-info-section">
            <h2>Welcome, <span className="profile-highlight">John</span></h2>
            <div className="profile-info-list">
              <div><strong>First Name</strong> John</div>
              <div><strong>Last Name</strong> Doe</div>
              <div><strong>Email</strong> johndoe@gmail.com</div>
            </div>
            <h2>Dietary Preferences</h2>
            <div className="profile-preferences-list">
              <span className="preference-tag">Vegetarian</span>
              <span className="preference-tag">Low Carb</span>
              <span className="preference-tag">Nut-Free</span>
            </div>
            <button className="btn btn-edit-profile">Edit Profile</button>
          </div>
        </div>
      </main>

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

export default Profile;