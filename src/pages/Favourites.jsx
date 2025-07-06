import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link

import '../styles/Favourites.css'; // Your specific styles for Favourites page

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [stats, setStats] = useState({
    totalFavourites: 0,
    avgCalories: 0,
    totalCookTime: 0
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Mock data for demonstration - replace with actual data loading logic from Firebase
  useEffect(() => {
    const mockFavourites = [
      {
        id: 1,
        name: "Mediterranean Quinoa Bowl",
        image: "/images/quinoa-bowl.jpg",
        calories: 380,
        cookTime: 25,
        difficulty: "Easy"
      },
      {
        id: 2,
        name: "Grilled Salmon with Vegetables",
        image: "/images/salmon.jpg",
        calories: 520,
        cookTime: 30,
        difficulty: "Medium"
      },
      {
        id: 3,
        name: "Vegetarian Pasta Primavera",
        image: "/images/pasta.jpg",
        calories: 340,
        cookTime: 20,
        difficulty: "Easy"
      }
    ];

    setFavourites(mockFavourites);
    updateStats(mockFavourites); // Calculate stats based on initial data
  }, []);

  // Function to recalculate stats whenever favourites change
  const updateStats = (currentFavourites) => {
    const totalFavs = currentFavourites.length;
    const totalCals = currentFavourites.reduce((sum, recipe) => sum + recipe.calories, 0);
    const avgCals = totalFavs > 0 ? Math.round(totalCals / totalFavs) : 0;
    const totalTime = currentFavourites.reduce((sum, recipe) => sum + recipe.cookTime, 0);
    const totalHours = totalTime / 60;

    setStats({
      totalFavourites: totalFavs,
      avgCalories: avgCals,
      totalCookTime: parseFloat(totalHours.toFixed(1))
    });
  };

  const removeFavourite = (recipeId) => {
    const updatedFavourites = favourites.filter(recipe => recipe.id !== recipeId);
    setFavourites(updatedFavourites);
    updateStats(updatedFavourites); // Recalculate stats immediately after updating favourites
  };

  // Helper for programmatic navigation (e.g., for buttons that trigger actions before navigating)
  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  return (
    <div className="favourites-page">
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            {/* Logo linked to home page */}
            <Link to="/HomePage_SignedIn" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{height: '38px', width: '38px'}} />
              <span>PLATE UP</span>
            </Link>
          </div>

          <nav> 
            <ul className="nav-links"> 
              <li><Link to="/Home">Home</Link></li>
              <li><Link to="/recipe">Recipes</Link></li> 
              <li><Link to="/Meal-Planner">Meal Plans</Link></li>
              <li><Link to="/Favourites" className="active">Favourites</Link></li> 
              <li><Link to="/About-Us-User">About</Link></li> 
            </ul>
          </nav>

          <div className="auth-buttons">
            {/* Log Out button (can trigger actual logout function) */}
            <button onClick={() => handleNavigation('/')} className="btn-signin">Log Out</button>
            {/* Profile link */}
            <Link to="/Profile" className="btn-started">Profile</Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Your Favourite Recipes</h1>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">{stats.totalFavourites}</div>
            <div className="stat-label">Total Favourites</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.avgCalories}</div>
            <div className="stat-label">Avg Calories</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{stats.totalCookTime}</div>
            <div className="stat-label">Hours of Cooking</div>
          </div>
        </div>

        {/* Favourites Grid */}
        {favourites.length > 0 ? (
          <div className="favourites-grid">
            {favourites.map((recipe, index) => (
              <div key={recipe.id} className="favourite-card" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                <div className="favourite-badge">♥</div>
                <div className="recipe-image">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                  />
                </div>
                <div className="recipe-content">
                  <h3 className="recipe-title">{recipe.name}</h3>
                  <div className="recipe-stats">
                    {recipe.calories} cal • {recipe.cookTime} min • {recipe.difficulty}
                  </div>
                  <div className="recipe-buttons">
                    <button
                      onClick={() => handleNavigation(`/recipe/${recipe.id}`)} 
                      className="btn-view"
                    >
                      View Recipe
                    </button>
                    <button
                      onClick={() => removeFavourite(recipe.id)}
                      className="btn-remove"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="empty-state">
            <div className="empty-state-icon">💔</div>
            <h2>No Favourite Recipes Yet</h2>
            <p>
              Start exploring our delicious recipes and click the heart icon to save your favourites here!
            </p>
            <button
              onClick={() => handleNavigation('/recipe')}
              className="btn-browse"
            >
              Browse Recipes
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <div className="footer-brand">
              {/* Logo in footer, linking to home page */}
              <Link to="/HomePage_SignedIn" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{height: '38px', width: '38px'}} />
                <span>PLATE UP</span>
              </Link>
            </div>
            <p className="footer-description">
              Simplify your healthy eating through personalized meal planning,
              nutritious recipe discovery, and organized shopping lists.
            </p>
          </div>

          <div className="footer-section">
            <h3>Features</h3>
            <ul className="footer-links">
              <li><Link to="/recipe" style={{textDecoration: 'none', color: '#a0aec0'}}>Recipe Search</Link></li> {/* Consistent /recipe path */}
              <li><Link to="/Meal-Planner" style={{textDecoration: 'none', color: '#a0aec0'}}>Meal Planning</Link></li>
              <li><Link to="/Shopping-list" style={{textDecoration: 'none', color: '#a0aec0'}}>Shopping Lists</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="mailto:example@gmail.com">Email: example@gmail.com</a></li>
              <li><a href="tel:+254712345678">Call: 0712 345 678</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 «PLATE UP». All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Favourites;