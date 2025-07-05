import React, { useState, useEffect } from 'react';
import '../styles/Favourites.css';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [stats, setStats] = useState({
    totalFavourites: 0,
    avgCalories: 0,
    totalCookTime: 0
  });

  // Mock data for demonstration - replace with actual data loading logic
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
    
    // Calculate stats based on actual data
    const totalFavs = mockFavourites.length;
    const totalCals = mockFavourites.reduce((sum, recipe) => sum + recipe.calories, 0);
    const avgCals = totalFavs > 0 ? Math.round(totalCals / totalFavs) : 0;
    const totalTime = mockFavourites.reduce((sum, recipe) => sum + recipe.cookTime, 0);
    const totalHours = totalTime / 60;
    
    setStats({
      totalFavourites: totalFavs,
      avgCalories: avgCals,
      totalCookTime: parseFloat(totalHours.toFixed(1))
    });
  }, []);

  const removeFavourite = (recipeId) => {
    const updatedFavourites = favourites.filter(recipe => recipe.id !== recipeId);
    setFavourites(updatedFavourites);
    
    // Recalculate stats
    const totalFavs = updatedFavourites.length;
    const totalCals = updatedFavourites.reduce((sum, recipe) => sum + recipe.calories, 0);
    const avgCals = totalFavs > 0 ? Math.round(totalCals / totalFavs) : 0;
    const totalTime = updatedFavourites.reduce((sum, recipe) => sum + recipe.cookTime, 0);
    const totalHours = totalTime / 60;
    
    setStats({
      totalFavourites: totalFavs,
      avgCalories: avgCals,
      totalCookTime: parseFloat(totalHours.toFixed(1))
    });
  };


  const handleNavigation = (path) => {
    // In a real application, this would use React Router
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div className="favourites-page">
      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <div className="logo" onClick={() => handleNavigation('/home')}>
            <span>PLATE UP</span>
          </div>
          
          <nav className="nav-links">
            <a href="#" onClick={() => handleNavigation('/Home')}>Home</a>
            <a href="#" onClick={() => handleNavigation('/My-Recipes')}>Recipes</a>
            <a href="#" onClick={() => handleNavigation('/Meal-Planner')}>Meal Plans</a>
            <a href="#" onClick={() => handleNavigation('/Favourites')} className="active">Favourites</a>
            <a href="#" onClick={() => handleNavigation('/About-Us-User')}>About</a>
          </nav>
          
          <div className="auth-buttons">
            <a href="#" onClick={() => handleNavigation('/')} className="btn-signin">Log Out</a>
            <a href="#" onClick={() => handleNavigation('/Profile')} className="btn-started">Profile</a>
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
              onClick={() => handleNavigation('/recipes')}
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
              <div className="logo-icon"></div>
              <span>PLATE UP</span>
            </div>
            <p className="footer-description">
              Simplify your healthy eating through personalized meal planning, 
              nutritious recipe discovery, and organized shopping lists.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Features</h3>
            <ul className="footer-links">
              <li><a href="#" onClick={() => handleNavigation('/recipes')}>Recipe Search</a></li>
              <li><a href="#" onClick={() => handleNavigation('/meal-planner')}>Meal Planning</a></li>
              <li><a href="#" onClick={() => handleNavigation('/shopping-list')}>Shopping Lists</a></li>
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