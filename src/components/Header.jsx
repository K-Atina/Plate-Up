import React from ' react';
//To do; Enable actual navigation

function Header(){
    return (
        <header className="header">
      <div className="nav-container">
        <div className="logo">
          <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{ height: '38px', width: '38px' }} />
          PLATE UP
        </div>
        <nav>
          <ul className="nav-links">
            {/*
              IMPORTANT: In a full React app with routing, these 'a' tags
              would be replaced by <Link> components from react-router-dom.
            */}
            <li><a href="/pages/HomePage_SignedIn.html">Home</a></li>
            <li><a href="/pages/recipe-S.html">Recipes</a></li>
            <li><a href="/pages/meal-planner.html">Meal Plans</a></li>
            <li><a href="/pages/favourites.html">Favourites</a></li>
            <li><a href="#" className="active">About</a></li>
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

export default Header