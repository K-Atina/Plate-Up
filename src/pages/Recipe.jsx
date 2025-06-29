import React, { useState, useEffect } from 'react';
import '../styles/Recipe.css'; // Ensure you have the correct path to your CSS file

const Recipes = () => {
    const [searchInput, setSearchInput] = useState('');
    const [dietFilter, setDietFilter] = useState('');
    const [recipes, setRecipes] = useState([]);

    // You can replace this with your actual recipe data or API call
    useEffect(() => {
        // This is where you would typically load your recipes
        // For now, it's empty but the structure is ready
        setRecipes([]);
    }, []);

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleDietFilterChange = (e) => {
        setDietFilter(e.target.value);
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
                            <li><a href="/pages/index.html">Home</a></li>
                            <li><a href="#" className="active">Recipes</a></li>
                            <li><a href="/pages/AboutUs.html">About</a></li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        <a href="/pages/signin.html" className="btn-signin">Sign In</a>
                        <a href="/pages/Sign-up.html" className="btn-started">Get Started</a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="main-container">
                {/* Hero Section */}
                <section className="hero-section">
                    <h1>Explore Nutritious Recipes</h1>
                    <p>Discover recipes that suit your dietary preferences and nutritional goals.</p>
                </section>

                {/* Search Section */}
                <section className="search-section">
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search for recipes..." 
                        value={searchInput}
                        onChange={handleSearchChange}
                    />
                    <select 
                        className="diet-filter" 
                        value={dietFilter}
                        onChange={handleDietFilterChange}
                    >
                        <option value="">Diet Type</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="keto">Keto</option>
                        <option value="paleo">Paleo</option>
                        <option value="gluten-free">Gluten-Free</option>
                        <option value="low-carb">Low-Carb</option>
                    </select>
                </section>

                {/* Recipes Grid */}
                <section className="recipes-grid" id="recipesGrid">
                    {/* Recipe cards will be generated here */}
                    {recipes.length === 0 ? (
                        <p>No recipes found. Add your recipe data to display them here.</p>
                    ) : (
                        recipes.map((recipe, index) => (
                            <div key={index} className="recipe-card">
                                {/* Recipe card content would go here */}
                            </div>
                        ))
                    )}
                </section>
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
                            <li><a href="#">Call: 0715 340 778</a></li>
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

export default Recipes;