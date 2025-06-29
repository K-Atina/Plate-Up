import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './index.css'; // Import your common styles globally

/*Public pages */
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Recipes from './pages/Recipe';

/*Signed-in pages */
import HomePageSignedIn from './pages/HomePageSignedIn';
import AboutUsSignedIn from './pages/AboutUs_S';
import Quiz from './pages/Quiz';
import RecipesSignedIn from './pages/Recipe_S';
import MealPlanner from './pages/MealPlanner';
import Favourites from './pages/Favourites';
import Profile from './pages/Profile';
import RecipeView from './pages/RecipeView';

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recipes" element={<Recipes />} />

        {/* Signed-In Routes */}
        <Route path="/home-signed-in" element={<HomePageSignedIn />} />
        <Route path="/about-signed-in" element={<AboutUsSignedIn />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/recipes-signed-in" element={<RecipesSignedIn />} />
        <Route path="/meal-planner" element={<MealPlanner />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipe-view" element={<RecipeView />} />
        <Route path="/shopping-list" element={<ShoppingList />} />


        {/* Catch-all for 404 Not Found */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;