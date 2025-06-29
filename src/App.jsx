import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css'; // Import your common styles globally
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';  
function App() {
  return (
    <>
      {/* You can put a common Header component here if it's the same for all pages,
          otherwise, include it within each page component */}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe-view" element={<RecipeView />} /> {/* Adjust this for dynamic IDs */}

        {/* Signed-In Routes */}
        <Route path="/home-signed-in" element={<HomePageSignedIn />} />
        <Route path="/about-signed-in" element={<AboutUsSignedIn />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/recipes-signed-in" element={<RecipesSignedIn />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipe-view-signed-in" element={<RecipeViewSignedIn />} /> {/* Adjust for dynamic IDs */}
        <Route path="/shopping-list" element={<ShoppingList />} />


        {/* Catch-all for 404 Not Found */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

      {/* You can put a common Footer component here */}
    </>
  );
}

export default App;