import React, { useState } from 'react';
import '../styles/MealPlanner.css'; // Import your CSS styles for Meal Planner

const MealPlanner = () => {
    const [mealPlans, setMealPlans] = useState({
        monday: {
            breakfast: { title: "Greek Yogurt Berry Bowl", calories: "510 Cal Per Servings", icon: "🥣", recipeId: "greek-yogurt-bowl" },
            lunch: { title: "Mediterranean Quinoa Salad", calories: "420 Cal Per Servings", icon: "🥗", recipeId: "quinoa-salad" },
            dinner: { title: "Grilled Salmon & Vegetables", calories: "580 Cal Per Servings", icon: "🐟", recipeId: "grilled-salmon" }
        },
        tuesday: {
            breakfast: null,
            lunch: null,
            dinner: null
        },
        wednesday: {
            breakfast: { title: "Protein Pancakes Stack", calories: "450 Cal Per Servings", icon: "🥞", recipeId: "protein-pancakes" },
            lunch: { title: "Chicken Caesar Wrap", calories: "380 Cal Per Servings", icon: "🍗", recipeId: "chicken-wrap" },
            dinner: { title: "Zucchini Pasta Primavera", calories: "340 Cal Per Servings", icon: "🍝", recipeId: "zucchini-pasta" }
        },
        thursday: {
            breakfast: { title: "Avocado Toast Deluxe", calories: "320 Cal Per Servings", icon: "🥑", recipeId: "avocado-toast" },
            lunch: { title: "Buddha Bowl Supreme", calories: "480 Cal Per Servings", icon: "🥙", recipeId: "buddha-bowl" },
            dinner: { title: "Lean Beef Stir Fry", calories: "520 Cal Per Servings", icon: "🍖", recipeId: "beef-stirfry" }
        },
        friday: {
            breakfast: null,
            lunch: null,
            dinner: null
        },
        saturday: {
            breakfast: { title: "Weekend Protein Waffles", calories: "510 Cal Per Servings", icon: "🧇", recipeId: "protein-waffles" },
            lunch: { title: "Cauliflower Pizza", calories: "390 Cal Per Servings", icon: "🍕", recipeId: "cauliflower-pizza" },
            dinner: { title: "Garlic Shrimp Linguine", calories: "620 Cal Per Servings", icon: "🦐", recipeId: "shrimp-linguine" }
        },
        sunday: {
            breakfast: { title: "Sunday Veggie Omelet", calories: "380 Cal Per Servings", icon: "🍳", recipeId: "veggie-omelet" },
            lunch: { title: "Hearty Lentil Soup", calories: "290 Cal Per Servings", icon: "🍲", recipeId: "lentil-soup" },
            dinner: { title: "Herb Roasted Chicken", calories: "540 Cal Per Servings", icon: "🍗", recipeId: "roasted-chicken" }
        }
    });

    const [searchInputs, setSearchInputs] = useState({});

    const handleSearchChange = (day, mealType, value) => {
        setSearchInputs(prev => ({
            ...prev,
            [`${day}-${mealType}`]: value
        }));
    };

    const handleViewRecipe = (recipeId) => {
        // Handle view recipe functionality
        console.log('View recipe:', recipeId);
    };

    const handleRemoveMeal = (day, mealType) => {
        setMealPlans(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                [mealType]: null
            }
        }));
    };

    const handleBrowseRecipes = (mealType) => {
        // Handle browse recipes functionality
        console.log('Browse recipes for:', mealType);
    };

    const handleAddFromFavorites = (day, mealType) => {
        // Handle add from favorites functionality
        console.log('Add from favorites:', day, mealType);
    };

    const handleGetShoppingList = () => {
        // Handle get shopping list functionality
        console.log('Generate shopping list');
        // You can redirect to shopping list page or show modal
        window.location.href = '/pages/shoppinglist.html';
    };

    const getMealTypeIcon = (mealType) => {
        switch (mealType) {
            case 'breakfast': return '🍳';
            case 'lunch': return '🍽️';
            case 'dinner': return '🍛';
            default: return '🍽️';
        }
    };

    const renderMealCard = (day, mealType, meal) => {
        if (meal) {
            return (
                <div key={mealType} className="meal-card">
                    <div className="meal-image">{meal.icon}</div>
                    <div className="meal-content">
                        <div className="meal-title">{meal.title}</div>
                        <div className="meal-stats">{meal.calories}</div>
                        <div className="meal-buttons">
                            <button className="btn-view" onClick={() => handleViewRecipe(meal.recipeId)}>
                                View Recipe
                            </button>
                            <button className="btn-remove" onClick={() => handleRemoveMeal(day, mealType)}>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div key={mealType} className="empty-meal-card">
                    <div className="meal-icon">{getMealTypeIcon(mealType)}</div>
                    <div className="meal-type">Add {mealType.charAt(0).toUpperCase() + mealType.slice(1)}</div>
                    <div className="search-container">
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Search for a recipe"
                            value={searchInputs[`${day}-${mealType}`] || ''}
                            onChange={(e) => handleSearchChange(day, mealType, e.target.value)}
                        />
                        <div className="search-icon">🔍</div>
                    </div>
                    <button className="browse-btn" onClick={() => handleBrowseRecipes(mealType)}>
                        Browse Recipes
                    </button>
                    <button className="add-favorites-btn" onClick={() => handleAddFromFavorites(day, mealType)}>
                        Add From Favourites
                    </button>
                </div>
            );
        }
    };

    const renderDaySection = (day, dayData) => {
        return (
            <div key={day} className="day-section">
                <h2 className="day-title">{day.toUpperCase()}</h2>
                <div className="meals-grid">
                    {renderMealCard(day, 'breakfast', dayData.breakfast)}
                    {renderMealCard(day, 'lunch', dayData.lunch)}
                    {renderMealCard(day, 'dinner', dayData.dinner)}
                </div>
            </div>
        );
    };

    return (
        <>
            {/* Header */}
            <header className="header">
                <div className="nav-container">
                    <div className="logo">
                        <img 
                            src="/icons/Logo.png" 
                            alt="Logo" 
                            className="logo-img" 
                            style={{height: '38px', width: '38px'}}
                        />
                        PLATE UP
                    </div>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="/pages/HomePage_SignedIn.html">Home</a></li>
                            <li><a href="/pages/recipe-S.html">Recipes</a></li>
                            <li><a href="#" className="active">Meal Plans</a></li>
                            <li><a href="/pages/favourites.html">Favourites</a></li>
                            <li><a href="/pages/AboutUs.html">About</a></li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        <a href="/pages/index.html" className="btn-signin">Log Out</a>
                        <a href="/pages/Profile.html" className="btn-started">Profile</a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-container">
                {/* Page Header */}
                <div className="page-header">
                    <h1>Weekly Meal Planner</h1>
                    <button className="shopping-list-btn" onClick={handleGetShoppingList}>
                        Get Shopping List
                    </button>
                </div>

                {/* Days Sections */}
                {Object.entries(mealPlans).map(([day, dayData]) => 
                    renderDaySection(day, dayData)
                )}
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <div>
                        <div className="footer-brand">
                            <img 
                                src="/icons/Logo.png" 
                                alt="Logo" 
                                className="logo-img" 
                                style={{height: '38px', width: '38px'}}
                            />
                            PLATE UP
                        </div>
                        <p className="footer-description">
                            Simplify your healthy eating through personalized meal planning, nutritious recipe discovery, and organized shopping lists.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Features</h3>
                        <ul className="footer-links">
                            <li><a href="/pages/recipe-S.html">Recipe Search</a></li>
                            <li><a href="#">Meal Planning</a></li>
                            <li><a href="/pages/">Shopping Lists</a></li>
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
        </>
    );
};

export default MealPlanner;