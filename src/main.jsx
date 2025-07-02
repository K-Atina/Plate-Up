import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Recipe from './pages/Recipe'; 
import SignUp from './pages/SignUp'
import { Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/About-Us-User" element={<AboutUs_S />} />
      <Route path="/About-Us" element={<AboutUs />} />
      <Route path="/Favourites" element={<Favourites />} />
      <Route path="/Home" element={<HomePageSignedIn />} />
      <Route path="/Meal-Planner" element={<MealPlanner />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/All-Recipes" element={<Recipe_S />} />
      <Route path="/Recipes" element={<Recipe />} />
      <Route path="/My-Recipes" element={<RecipeView />} />
      <Route path="/Shopping List" element={<ShoppingList />} />
      <Route path="/Sign-In" element={<SignIn />} />
      <Route path="/Sign-Up" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);