import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Profile.css'; // Import your specific styles for the Profile page

const Profile = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            {/* Logo linking to the signed-in home page */}
            <Link to="/home-signed-in" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{height: '38px', width: '38px'}} />
              PLATE UP
            </Link>
          </div>
          <nav>
            <ul className="nav-links">
              {/* Home link - should not be active on Profile page */}
              <li><Link to="/home-signed-in">Home</Link></li>
              <li><Link to="/recipes-signed-in">Recipes</Link></li> {/* Changed from recipe-S.html */}
              {/* These were not in <li>, adding for consistency */}
              <li><Link to="/meal-planner">Meal Plans</Link></li> {/* Changed from meal-planner.html */}
              <li><Link to="/favourites">Favourites</Link></li> {/* Changed from favourites.html */}
              <li><Link to="/about-signed-in">About</Link></li> {/* Changed from AboutUs-S.html */}
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to="/" className="btn-signin">Log Out</Link> {/* Link to the public homepage for logout */}
            {/* Profile link should be active on this page */}
            <Link to="/profile" className="btn-started active">Profile</Link> {/* Changed from Profile.html */}
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
              {/* Logo in footer, linking to home page */}
              <Link to="/home-signed-in" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
              {/* Corrected structure: <p> tag removed, text directly in Link */}
              <li>
                <Link to="/recipes-signed-in" style={{textDecoration: 'none', color: '#a0aec0'}}>
                  Recipe Search
                </Link>
              </li>
              <li>
                <Link to="/meal-planner" style={{textDecoration: 'none', color: '#a0aec0'}}>
                  Meal Planning
                </Link>
              </li>
              <li>
                <Link to="/shopping-list" style={{textDecoration: 'none', color: '#a0aec0'}}>
                  Shopping Lists
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              {/* Email and Call links are external, so they remain <a> tags */}
              <li><a href="mailto:example@gmail.com">Email: example@gmail.com</a></li>
              <li><a href="tel:+254715340778">Call: 0715 340 778</a></li>
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