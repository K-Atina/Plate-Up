import React from 'react';
// For actual navigation in a React app, you'd use react-router-dom's Link component
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          {/* Image paths are relative to the public folder */}
          <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{ height: '38px', width: '38px' }} />
          PLATE UP
        </div>
        <nav>
          <ul className="nav-links">
            {/*
              IMPORTANT: In a full React app with routing, these 'a' tags
              would be replaced by <Link> components from react-router-dom.
              For example: <li><Link to="/home-signed-in">Home</Link></li>
              For now, they retain original href for reference.
              Consider using `NavLink` from react-router-dom for active class highlighting.
            */}
            <li><a href="/pages/HomePage_SignedIn.html">Home</a></li>
            <li><a href="/pages/recipe-S.html">Recipes</a></li>
            <li><a href="/pages/meal-planner.html">Meal Plans</a></li>
            <li><a href="/pages/favourites.html">Favourites</a></li>
            <li><a href="#" className="active">About</a></li> {/* 'About' typically handled by React Router */}
          </ul>
        </nav>
        <div className="auth-buttons">
          <a href="/pages/index.html" className="btn-signin">Log Out</a>
          <a href="/pages/Profile.html" className="btn-started">Profile</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
