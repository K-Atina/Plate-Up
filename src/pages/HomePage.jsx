import React, { useState } from 'react';
import '../styles/HomepageSignedIn.css';
import { Link, useNavigate } from "react-router-dom";

const SignedInHomepage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    // Mock data - in real app, this would come from API/database
    const todaysMeals = {
        breakfast: { title: "Greek Yogurt Berry Bowl", calories: "510 Cal", icon: "🥣", recipeId: "greek-yogurt-bowl" },
        lunch: { title: "Mediterranean Quinoa Salad", calories: "420 Cal", icon: "🥗", recipeId: "quinoa-salad" },
        dinner: { title: "Grilled Salmon & Vegetables", calories: "580 Cal", icon: "🐟", recipeId: "grilled-salmon" }
    };

    const recentFavorites = [
        { title: "Protein Pancakes Stack", calories: "450 Cal", icon: "🥞", recipeId: "protein-pancakes" },
        { title: "Chicken Caesar Wrap", calories: "380 Cal", icon: "🍗", recipeId: "chicken-wrap" },
        { title: "Zucchini Pasta Primavera", calories: "340 Cal", icon: "🍝", recipeId: "zucchini-pasta" },
        { title: "Avocado Toast Deluxe", calories: "320 Cal", icon: "🥑", recipeId: "avocado-toast" }
    ];

    const quickStats = {
        savedRecipes: 42,
        mealsPlanned: 18,
        completedMeals: 15,
        streakDays: 7
    };

    const recommendedRecipes = [
        { title: "Quinoa Buddha Bowl", calories: "380 Cal", icon: "🥙", tag: "Vegetarian", recipeId: "quinoa-buddha" },
        { title: "Teriyaki Chicken", calories: "520 Cal", icon: "🍗", tag: "High Protein", recipeId: "teriyaki-chicken" },
        { title: "Veggie Stir Fry", calories: "290 Cal", icon: "🥬", tag: "Low Calorie", recipeId: "veggie-stirfry" }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Navigate to recipes with search query
            console.log('Searching for:', searchQuery);
            // In real app: navigate(`/All-Recipes?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    const handleViewRecipe = (recipeId) => {
        console.log('Viewing recipe:', recipeId);
        // In real app: navigate(`/My-Recipes/${recipeId}`);
    };

    const navigate =useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    const getTodaysDate = () => {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return today.toLocaleDateString('en-US', options);
    };

    return (
        <div className="signed-in-homepage">
            {/* Header */}
            <header className="header">
                <div className="nav-container">
                    <div className="logo">
                        <div className="logo-link" onClick={() => handleNavigate('/home')}>
                          <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{height: '38px', width: '38px'}} />
                          Plate Up
                        </div>
                    </div>
                    <nav>
                        <ul className="nav-links">
                            <li><span className="nav-link active" onClick={() => handleNavigate('/Home')}>Home</span></li>
                            <li><span className="nav-link" onClick={() => handleNavigate('/All-Recipes')}>Recipes</span></li>
                            <li><span className="nav-link" onClick={() => handleNavigate('/Meal-Planner')}>Meal Plans</span></li>
                            <li><span className="nav-link" onClick={() => handleNavigate('/Favourites')}>Favourites</span></li>
                            <li><span className="nav-link" onClick={() => handleNavigate('/About-Us-User')}>About</span></li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        <span className="btn-signin" onClick={() => handleNavigate('/')}>Log Out</span>
                        <span className="btn-started" onClick={() => handleNavigate('/Profile')}>Profile</span>
                    </div>
                </div>
            </header>

            {/* Main Dashboard Content */}
            <main className="main-content">
                {/* Welcome Section */}
                <div className="welcome-section">
                    <h1 className="welcome-title" style={{textAlign:'center'}}>
                        Welcome back!👋
                    </h1>
                    <p className="welcome-subtitle">
                        {getTodaysDate()} • <Link to="/All-Recipes">Ready to plan your healthy meals?</Link>
                    </p>
                </div>

                
                {/* Quick Stats */}
                <div className="quick-stats">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">{quickStats.savedRecipes}</div>
                            <div className="stat-label">Saved Recipes</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">{quickStats.mealsPlanned}</div>
                            <div className="stat-label">Meals Planned</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">{quickStats.completedMeals}</div>
                            <div className="stat-label">Completed Meals</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">{quickStats.streakDays}</div>
                            <div className="stat-label">Day Streak</div>
                        </div>
                    </div>
                </div>

                {/* Today's Meals */}
                <div className="section">
                    <div className="section-header">
                        <h2 className="section-title">Today's Meals</h2>
                        <span className="section-link" onClick={() => handleNavigate('/Meal-Planner')}>
                            View Full Plan →
                        </span>
                    </div>
                    <div className="meals-grid"  style={{backgroundColor: '#f7f7f7'}}>
                        {Object.entries(todaysMeals).map(([mealType, meal]) => (
                            <div key={mealType} className="meal-card">
                                <div className="meal-info">
                                    <div className="meal-icon">{meal.icon}</div>
                                    <div>
                                        <div className="meal-type">{mealType}</div>
                                        <div className="meal-title">{meal.title}</div>
                                        <div className="meal-calories">{meal.calories}</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleViewRecipe(meal.recipeId)}
                                    className="meal-button"
                                >
                                    View Recipe
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Favorites */}
                <div className="section">
                    <div className="section-header">
                        <h2 className="section-title">Recent Favorites</h2>
                        <span className="section-link" onClick={() => handleNavigate('/Favourites')}>
                            View All →
                        </span>
                    </div>
                    <div className="favorites-grid" style={{display:'flex',flexDirection: 'row', justifyContent:'center', gap:'1rem'}}>
                        {recentFavorites.map((recipe, index) => (
                            <div key={index} className="favorite-card" onClick={() => handleViewRecipe(recipe.recipeId)}>
                                <div className="favorite-info">
                                    <div className="favorite-icon">{recipe.icon}</div>
                                    <div>
                                        <div className="favorite-title">{recipe.title}</div>
                                        <div className="favorite-calories">{recipe.calories}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recommended Recipes */}
                <div className="section">
                    <div className="section-header">
                        <h2 className="section-title">Recommended For You</h2>
                        <span className="section-link" onClick={() => handleNavigate('/All-Recipes')}>
                            Browse All →
                        </span>
                    </div>
                    <div className="recommended-grid" style={{display:'flex',flexDirection: 'row', justifyContent:'center', gap:'1rem'}}>
                        {recommendedRecipes.map((recipe, index) => (
                            <div key={index} className="recommended-card">
                                <div className="recommended-info">
                                    <div className="recommended-icon">{recipe.icon}</div>
                                    <div>
                                        <div className="recommended-title">{recipe.title}</div>
                                        <div className="recommended-calories">{recipe.calories}</div>
                                        <div className="recommended-tag">{recipe.tag}</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleViewRecipe(recipe.recipeId)}
                                    className="recommended-button"
                                >
                                    View Recipe
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="section">
                    <h2 className="section-title">Quick Actions</h2>
                    <div className="actions-grid" style={{display:'flex',flexDirection: 'row', justifyContent:'center', gap:'1rem'}}>
                        <div className="action-link" onClick={() => handleNavigate('/Meal-Planner')}>
                            <div className="action-card">
                                <div className="action-icon">📅</div>
                                <div className="action-title">Plan This Week</div>
                            </div>
                        </div>
                        <div className="action-link" onClick={() => handleNavigate('/All-Recipes')}>
                            <div className="action-card">
                                <div className="action-icon">🔍</div>
                                <div className="action-title">Find Recipes</div>
                            </div>
                        </div>
                        <div className="action-link" onClick={() => handleNavigate('/Shopping-List')}>
                            <div className="action-card">
                                <div className="action-icon">🛒</div>
                                <div className="action-title">Shopping List</div>
                            </div>
                        </div>
                        <div className="action-link" onClick={() => handleNavigate('/Favourites')}>
                            <div className="action-card">
                                <div className="action-icon">❤️</div>
                                <div className="action-title">My Favorites</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div>
                        <div className="footer-brand">
                            <div className="footer-brand-link" onClick={() => handleNavigate('/home')}>
                                PLATE UP
                            </div>
                        </div>
                        <p className="footer-description">
                            Simplify your healthy eating through personalized meal planning, nutritious recipe discovery, and organized shopping lists.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Features</h3>
                        <ul className="footer-links">
                            <li><span onClick={() => handleNavigate('/All-Recipes')}>Recipe Search</span></li>
                            <li><span onClick={() => handleNavigate('/Meal-Planner')}>Meal Planning</span></li>
                            <li><span onClick={() => handleNavigate('/shopping-list')}>Shopping Lists</span></li>
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

export default SignedInHomepage;