import React, { useState, useEffect } from 'react';
import '../styles/Recipe.css';
import { Link } from 'react-router-dom';

const Recipes_S = () => {
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
                            <li><Link to ="/HomePage_SignedIn">Home</Link></li>
                            <li><Link to ="#" className="active">Recipes</Link></li>
                            <li><Link to ="/meal-planner">Meal Plans</Link></li>
                            <li><Link to="/favourites">Favourites</Link></li>
                            <li><Link to="/AboutUs-S">About</Link></li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        <Link to ="/index" className="btn-signin">Log Out</Link>
                        <Link to="/Profile" className="btn-started">Profile</Link>
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
                            <Link to style={{textDecoration: 'none', color: '#a0aec0'}} href="#">
                                <p>Recipe Search</p>
                            </Link>
                            <Link to style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/meal-planner.html">
                                <p>Meal Planning</p>
                            </Link>
                            <Link to style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/shoppinglist.html">
                                <p>Shopping Lists</p>
                            </Link>
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

export default Recipes_S;