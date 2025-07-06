import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Recipe.css';
import { Link } from 'react-router-dom';

const Recipe_S = () => {
    const [searchInput, setSearchInput] = useState('');
    const [dietFilter, setDietFilter] = useState(''); // For single diet choice (e.g., Vegetarian, Vegan)
    const [selectedCuisine, setSelectedCuisine] = useState('');
    const [maxReadyTime, setMaxReadyTime] = useState(''); // For time taken
    const [minServings, setMinServings] = useState(''); // For number of people
    const [selectedIntolerances, setSelectedIntolerances] = useState([]); // For multiple dietary restrictions

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Replace with your actual Spoonacular API key
    const SPOONACULAR_API_KEY = '6b1da363213c48ec9de381ce55b71039';

    // Function to fetch recipes from Spoonacular API
    const fetchRecipes = useCallback(async () => {
        setLoading(true);
        setError(null); // Clear any previous errors

        const queryParams = new URLSearchParams({
            apiKey: SPOONACULAR_API_KEY,
            query: searchInput,
            number: 20, // You can adjust the number of recipes to fetch
            addRecipeInformation: true,
            instructionsRequired: true,
            fillIngredients: true
        });

        // Add filters if they are selected
        if (dietFilter) {
            queryParams.append('diet', dietFilter);
        }
        if (selectedCuisine) {
            queryParams.append('cuisine', selectedCuisine);
        }
        if (maxReadyTime) {
            queryParams.append('maxReadyTime', maxReadyTime);
        }
        if (minServings) {
            queryParams.append('minServings', minServings);
        }
        if (selectedIntolerances.length > 0) {
            queryParams.append('intolerances', selectedIntolerances.join(','));
        }

        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${queryParams.toString()}`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch recipes.');
            }
            const data = await response.json();
            setRecipes(data.results);
        } catch (err) {
            console.error("Error fetching recipes:", err);
            setError("Failed to load recipes. Please try again later.");
        } finally {
            setLoading(false);
        }
    }, [searchInput, dietFilter, selectedCuisine, maxReadyTime, minServings, selectedIntolerances]); // Dependencies for useCallback

    // Initial fetch when component mounts, and re-fetch when searchInput or any filter changes
    useEffect(() => {
        // Debounce search input to avoid too many API calls
        const handler = setTimeout(() => {
            fetchRecipes();
        }, 500); //

        return () => {
            clearTimeout(handler);
        };
    }, [fetchRecipes]); 

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleDietFilterChange = (e) => {
        setDietFilter(e.target.value);
    };

    const handleCuisineChange = (e) => {
        setSelectedCuisine(e.target.value);
    };

    const handleMaxReadyTimeChange = (e) => {
        setMaxReadyTime(e.target.value);
    };

    const handleMinServingsChange = (e) => {
        setMinServings(e.target.value);
    };

    const handleIntoleranceChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedIntolerances((prev) => [...prev, value]);
        } else {
            setSelectedIntolerances((prev) => prev.filter((item) => item !== value));
        }
    };

    // Dietary Restriction options that map to Spoonacular's `diet` and `intolerances`
    const allDietaryRestrictions = [
        { label: 'None', value: 'none', type: 'special' }, // Special handling for 'None'
        { label: 'Vegetarian', value: 'vegetarian', type: 'diet' },
        { label: 'Vegan', value: 'vegan', type: 'diet' },
        { label: 'Gluten-free', value: 'gluten', type: 'intolerance' }, // Maps to 'gluten' intolerance
        { label: 'Keto', value: 'ketogenic', type: 'diet' }, // Spoonacular uses 'ketogenic'
        { label: 'Paleo', value: 'paleo', type: 'diet' },
        { label: 'Dairy-free', value: 'dairy', type: 'intolerance' }, // Maps to 'dairy' intolerance
        { label: 'Nut-free', value: 'peanut,tree nut', type: 'intolerance' } // Maps to multiple intolerances
    ];


    return (
        <div style={{backgroundColor: 'white'}}>
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
                            <li><Link to ="/Home">Home</Link></li>
                            <li><Link to ="#" className="active">Recipes</Link></li>
                            <li><Link to ="/Meal-Planner">Meal Plans</Link></li>
                            <li><Link to="/Favourites">Favourites</Link></li>
                            <li><Link to="/About-Us-User">About</Link></li>
                        </ul>
                    </nav>
                    <div className="auth-buttons">
                        <Link to ="/" className="btn-signin">Log Out</Link>
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

                {/* Search and Filters Section */}
                <section className="search-filters-section">
                    <div className="search-input-container">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search for recipes..."
                            value={searchInput}
                            onChange={handleSearchChange}
                        />
                    </div>

                    <div className="filters-container">
                        <select
                            className="filter-select"
                            value={maxReadyTime}
                            onChange={handleMaxReadyTimeChange}
                        >
                            <option value="">Time to Cook</option>
                            <option value="30">Under 30 min</option>
                            <option value="60">30-60 min</option>
                            <option value="120">1-2 hours</option>
                            <option value="240">2+ hours</option>
                        </select>

                        <select
                            className="filter-select"
                            value={selectedCuisine}
                            onChange={handleCuisineChange}
                        >
                            <option value="">Cuisine</option>
                            <option value="Italian">Italian</option>
                            <option value="Mexican">Mexican</option>
                            <option value="Asian">Asian</option>
                            <option value="Mediterranean">Mediterranean</option>
                            <option value="American">American</option>
                            <option value="Indian">Indian</option>
                            <option value="Middle Eastern">Middle Eastern</option>
                            <option value="French">French</option>
                            <option value="Thai">Thai</option>
                            <option value="Japanese">Japanese</option>
                        </select>

                        <select
                            className="filter-select"
                            value={minServings}
                            onChange={handleMinServingsChange}
                        >
                            <option value="">Number of Servings</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="5">5+</option>
                        </select>

                        {/* Dietary Restrictions - Checkboxes */}
                        <div className="dietary-restrictions-checkboxes">
                            <h4>Dietary Restrictions:</h4>
                            {allDietaryRestrictions.map((restriction) => (
                                <div key={restriction.value}>
                                    <input
                                        type="checkbox"
                                        id={`diet-${restriction.value}`}
                                        value={restriction.value}
                                        checked={selectedIntolerances.includes(restriction.value)}
                                        onChange={handleIntoleranceChange}
                                        // Disable other checkboxes if 'None' is selected
                                        disabled={restriction.value !== 'none' && selectedIntolerances.includes('none')}
                                    />
                                    <label htmlFor={`diet-${restriction.value}`}>{restriction.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Recipes Grid */}
                <section className="recipes-grid" id="recipesGrid">
                    {loading && <p>Loading recipes...</p>}
                    {error && <p className="error-message">{error}</p>}
                    {!loading && !error && recipes.length === 0 ? (
                        <p>No recipes found. Try a different search or filter.</p>
                    ) : (
                        recipes.map((recipe) => (
                            <div key={recipe.id} className="recipe-card">
                                <img src={recipe.image} alt={recipe.title} className="recipe-card-image" />
                                <h3 className="recipe-card-title">{recipe.title}</h3>
                                <p>Ready in: {recipe.readyInMinutes} minutes</p>
                                <p>Servings: {recipe.servings}</p>
                                <Link to={`/recipe/${recipe.id}`} className="view-recipe-button">View Recipe</Link>
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
        </div>
    );
};

export default Recipe_S;