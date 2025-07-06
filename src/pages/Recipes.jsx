import React, { useState, useEffect } from 'react';
import '../styles/Recipe.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//For searchbar icon
import {RiSearchLine} from 'react-icons/ri';

const Recipes = () => {

    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState('');
    const [dietFilter, setDietFilter] = useState('');
    const [recipes, setRecipes] = useState([]);

    //States for API calls
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    //replace this with your actual recipe data or API call
    useEffect(() => {
        
        setRecipes([]);
    }, []);

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleDietFilterChange = (e) => {
        setDietFilter(e.target.value);
    };

    function Redirect(){
        navigate("/Sign-Up")
    }

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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="#" className="active">Recipes</Link></li>
                            <li><Link to="/About-Us">About</Link></li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        <Link to ="/Sign-In" className="btn-signin">Sign In</Link>
                        <Link to ="/Sign-Up" className="btn-started">Get Started</Link>
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
                    <div className='search-box'>
                        <input 
                        type="text" 
                        className="search-input" 
                        placeholder="Search for recipes..." 
                        value={searchInput}
                        onChange={handleSearchChange}
                        />
                        <RiSearchLine className="search-icon" onClick={Redirect}/>
                        
                    </div>

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
                            <Link to style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/recipe.html">
                                <p>Recipe Search</p>
                            </Link>
                            <Link to style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/signin.html">
                                <p>Meal Planning</p>
                            </Link>
                            <Link to style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/signin.html">
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

export default Recipes;