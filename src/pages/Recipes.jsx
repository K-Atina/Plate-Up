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
    const [recipes, setRecipes] = useState([]); //To hold fetched recipe data

    //States for API calls
    //True when fetching data , false otherwise
    const [loading , setLoading] = useState(true);
    //null if no error, otherwise will hold error message
    const [error , setError] = useState(null);

    //API
    const fetchInitialRecipes = async () =>{
        //Set loading state to true since we are fetching data
        setLoading(true);
        //Resets any previous error messages
        setError(null);

        try{
            //Used MealDB.com --> Will change to spoonacular
            //Target APi endpoint
            const randomApiURl = 'https://www.themealdb.com/api/json/v1/1/random.php';
            const numRandomRecipes = 10

            const fetchedRandomRecipes = [];
            for (let i = 0; i < numRandomRecipes; i++){
                //we fetch the URL nad return a promise that will resolve promise
                const response= await fetch (randomApiURl); //Initiates the request to the apiUrl and returns a Promise
                if (!response.ok){
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data= await response.json();
                if (data.meals && data.meals.length > 0){
                    fetchedRandomRecipes.push (data.meals[0]);
                }

            }

            if (fetchedRandomRecipes.length>0){
                setRecipes(fetchedRandomRecipes);
            }else {
                setRecipes([]); //If no meals have been found
                setError("No recipes fetched. The API might be temporarily unvailable");
            }
              
        } catch (err){
            console.error("Failed to fetch recipes:", err);
            setError("Failed to load recipes. Please check your internet conncetion or try again later.");
            setRecipes([])
        } finally {
            setLoading(false)
        }
    }
    
    //To call fetchInitialRecipes
    useEffect(() => {
        fetchInitialRecipes();//Calling our fetching function
    }, []) //Ensures that it only runs once

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
        //Updates 'searchInput' state
    };

    const handleDietChange = (e) =>{
        setDietFilter(e.target.value);
        navigate("/Sign-Up")
    }


    function Redirect(){
        navigate("/Sign-Up")
    }

    return (
        <div style={{backgroundColor: '#f7f7f7'}}>
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
                        onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                Redirect() //When enter key on kenyboard is pressed, user redirected to sign-up
                            }
                        }}
                        />
                        <RiSearchLine className="search-icon" onClick={Redirect}/>
                        
                    </div>

                    <select 
                        className="diet-filter" 
                        value={dietFilter}
                        onChange={Redirect}
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
                    {loading && <p>Loading delicious recipes...</p>}
                    {error && <p className="error-message">Error: {error}</p>}

                    {!loading && !error && recipes.length === 0 && (
                        <p>No recipes found. Please try again later or check your network.</p>
                    )}

                    {!loading && !error && recipes.length > 0 && (
                        recipes.map((recipe) => (
                            <div key={recipe.idMeal} className="recipe-card">
                                {/* Display Recipe Image */}
                                {recipe.strMealThumb && (
                                    <img
                                        src={recipe.strMealThumb}
                                        alt={recipe.strMeal}
                                        className="recipe-image"
                                    />
                                )}
                                {/* Display Recipe Name */}
                                <h3>{recipe.strMeal}</h3>
                                <p>Category: {recipe.strCategory}</p>

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
        </div>
    );
};

export default Recipes;