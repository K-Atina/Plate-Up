import React, { useState, useEffect } from 'react';
import '../styles/RecipeView.css'; // Import your CSS styles for this component

const RecipeView = () => {
  const [currentServings, setCurrentServings] = useState(4);
  const [isFavorite, setIsFavorite] = useState(false);
  const [recipeData, setRecipeData] = useState({
    title: 'Mediterranean Quinoa Bowl',
    calories: 510,
    ingredients: [
      { name: 'Quinoa', amount: 1, unit: 'cup' },
      { name: 'Cucumber', amount: 1, unit: 'large' },
      { name: 'Bell pepper', amount: 1, unit: 'large' },
      { name: 'Red onion', amount: 0.5, unit: 'medium' },
      { name: 'Cherry tomatoes', amount: 1, unit: 'cup' },
      { name: 'Olive oil', amount: 3, unit: 'tbsp' },
      { name: 'Lemon juice', amount: 2, unit: 'tbsp' },
      { name: 'Tahini', amount: 2, unit: 'tbsp' },
      { name: 'Garlic', amount: 2, unit: 'cloves' },
      { name: 'Feta cheese', amount: 0.5, unit: 'cup' },
      { name: 'Kalamata olives', amount: 0.25, unit: 'cup' },
      { name: 'Fresh parsley', amount: 0.25, unit: 'cup' }
    ]
  });

  const baseServings = 4;

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const increaseServings = () => {
    setCurrentServings(prev => prev + 1);
  };

  const decreaseServings = () => {
    if (currentServings > 1) {
      setCurrentServings(prev => prev - 1);
    }
  };

  const addToPlan = () => {
    // Add to meal plan functionality
    alert('Added to meal plan!');
  };

  const getAdjustedAmount = (originalAmount) => {
    return (originalAmount * currentServings / baseServings).toFixed(2);
  };

  const formatAmount = (amount) => {
    const num = parseFloat(amount);
    return num % 1 === 0 ? num.toString() : num.toString();
  };

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
              <li><a href="/pages/index.html">Home</a></li>
              <li><a href="/pages/recipe.html" className="active">Recipes</a></li>
              <li><a href="/pages/AboutUs.html">About</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <a href="/pages/index.html" className="btn-signin">Sign In</a>
            <a href="/pages/Profile.html" className="btn-started">Get Started</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        {/* Back Link */}
        <a href="/pages/recipe.html" className="back-link">
          ← Back to Recipes
        </a>

        {/* Recipe Header Card */}
        <div className="recipe-header-card">
          <div className="recipe-image">
            <span>🥗</span>
          </div>
          <div className="recipe-details">
            <div className="recipe-title-section">
              <div>
                <h1 className="recipe-title">{recipeData.title}</h1>
                <div className="recipe-calories">Calories <span>{recipeData.calories}</span> Cal</div>
              </div>
              <button 
                className="favorite-btn" 
                onClick={toggleFavorite}
              >
                {isFavorite ? '♥' : '♡'}
              </button>
            </div>
            
            <div className="servings-section">
              <div className="servings-title">Adjust Servings</div>
              <div className="servings-control">
                <button className="servings-btn" onClick={decreaseServings}>-</button>
                <div className="servings-display">
                  <span>{currentServings}</span> Servings
                </div>
                <button className="servings-btn" onClick={increaseServings}>+</button>
              </div>
              <button className="add-to-plan-btn" onClick={addToPlan}>Add to Meal Plan</button>
            </div>
          </div>
        </div>

        {/* Ingredients Section */}
        <section className="ingredients-section">
          <div className="ingredients-header">
            <h2 className="ingredients-title">Ingredients</h2>
            <div className="ingredients-adjust">Adjust for <span>{currentServings}</span> servings</div>
          </div>
          
          <ul className="ingredients-list">
            {recipeData.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                <span className="ingredient-amount">
                  {formatAmount(getAdjustedAmount(ingredient.amount))} {ingredient.unit}
                </span>
                <span className="ingredient-name">{ingredient.name}</span>
              </li>
            ))}
          </ul>
          
          <button className="add-to-plan-btn" onClick={addToPlan}>Add to Meal Plan</button>
        </section>

        {/* Instructions Section */}
        <section className="instructions-section">
          <h2 className="instructions-title">Instructions</h2>
          <div className="cooking-guide">Step-by-step cooking guide</div>
          
          <ol className="instructions-list">
            <li className="instruction-step">Rinse quinoa under cold water until water runs clear. Cook according to package directions and let cool.</li>
            <li className="instruction-step">Dice cucumber, bell pepper, and red onion. Halve cherry tomatoes.</li>
            <li className="instruction-step">In a small bowl, whisk together olive oil, lemon juice, tahini, minced garlic, salt, and pepper to make dressing.</li>
            <li className="instruction-step">In a large bowl, combine cooked quinoa with diced vegetables.</li>
            <li className="instruction-step">Pour dressing over quinoa mixture and toss to combine.</li>
            <li className="instruction-step">Top with crumbled feta cheese, olives, and fresh parsley.</li>
            <li className="instruction-step">Serve immediately or chill for 30 minutes for flavors to meld.</li>
          </ol>
        </section>
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
              <a style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/recipe.html">
                <p>Recipe Search</p>
              </a>
              <a style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/signin.html">
                <p>Meal Planning</p>
              </a>
              <a style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/signin.html">
                <p>Shopping Lists</p>
              </a>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#">Email: example@gmail.com</a></li>
              <li><a href="#">Call: 0712 345 678</a></li>
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

export default RecipeView;