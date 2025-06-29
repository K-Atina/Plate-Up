import React, { useState } from 'react';
import '../styles/ShoppingList.css'; // Import your specific styles for the Shopping List page

const ShoppingList = () => {
  const [ingredients, setIngredients] = useState([
    { id: 1, name: 'Quinoa', quantity: '1 bag', checked: false },
    { id: 2, name: 'Cherry tomatoes', quantity: '1 packet', checked: false },
    { id: 3, name: 'Cucumber', quantity: '1 piece', checked: false },
    { id: 4, name: 'Red bell pepper', quantity: '1 piece', checked: false },
    { id: 5, name: 'Red onion', quantity: '3 pieces', checked: false },
    { id: 6, name: 'Feta cheese', quantity: '1 packet', checked: false },
    { id: 7, name: 'Kalamata olives', quantity: '1 packet', checked: false },
    { id: 8, name: 'Lemon Juice', quantity: '1 bottle', checked: false },
    { id: 9, name: 'Fresh parsley', quantity: '1 bag', checked: false },
    { id: 10, name: 'Olive oil', quantity: '2 bottle', checked: false },
    { id: 11, name: 'Tahini', quantity: '1 bottle', checked: false },
    { id: 12, name: 'Garlic', quantity: '2 cloves', checked: false }
  ]);

  const toggleIngredient = (id) => {
    setIngredients(ingredients.map(ingredient =>
      ingredient.id === id
        ? { ...ingredient, checked: !ingredient.checked }
        : ingredient
    ));
  };

  const clearCheckedItems = () => {
    setIngredients(ingredients.filter(ingredient => !ingredient.checked));
  };

  const addNewItem = (name, quantity) => {
    if (name.trim() && quantity.trim()) {
      const newItem = {
        id: Math.max(...ingredients.map(i => i.id)) + 1,
        name: name.trim(),
        quantity: quantity.trim(),
        checked: false
      };
      setIngredients([...ingredients, newItem]);
    }
  };

  return (
    <div>
      <header className="header">
        <div className="nav-container">
          <div className="logo">
            <div>
              <img className="logo-icon" src="/icons/Logo.png" alt="" />
            </div>
            PLATE UP
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to ="/HomePage_SignedIn">Home</Link></li>
              <li><Link to="/recipe-S">Recipes</Link></li>
              <li><Link to="/meal-planner">Meal Plans</Link></li>
              <li><Link to="/favourites">Favourites</Link></li>
              <li><Link to="/AboutUs-S">About</Link></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <Link to ="/index" className="btn-signin">Log Out</Link>
            <Link to ="/Profile" className="btn-started">Profile</Link>
          </div>
        </div>
      </header>

      <main>
        <div>
          <p className="title">Shopping List</p>
        </div>
        
        <div className="ingredients-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>Ingredients</h2>
            {ingredients.some(item => item.checked) && (
              <button 
                onClick={clearCheckedItems}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                Clear Checked
              </button>
            )}
          </div>
          
          <ul className="ingredients-list">
            {ingredients.map((ingredient) => (
              <li 
                key={ingredient.id}
                style={{
                  textDecoration: ingredient.checked ? 'line-through' : 'none',
                  opacity: ingredient.checked ? 0.6 : 1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer'
                }}
                onClick={() => toggleIngredient(ingredient.id)}
              >
                <input
                  type="checkbox"
                  checked={ingredient.checked}
                  onChange={() => toggleIngredient(ingredient.id)}
                  style={{ cursor: 'pointer' }}
                />
                <span style={{ flex: 1 }}>{ingredient.name}</span>
                <span>{ingredient.quantity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link to="/meal-planner" className="back-button">Back to Meal Planner</Link>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div>
            <div className="footer-brand">
              <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{height: '38px', width: '38px'}} />
              PLATE UP
            </div>
            <p className="footer-description">
              Simplify your healthy eating through personalized meal planning, nutritious recipe discovery, and organized shopping lists.
            </p>
          </div>
          <div className="footer-section">
            <h3>Features</h3>
            <ul className="footer-links">
              <a style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/recipe-S.html">
                <p>Recipe Search</p>
              </a>
              <a style={{textDecoration: 'none', color: '#a0aec0'}} href="/pages/meal-planner.html">
                <p>Meal Planning</p>
              </a>
              <a style={{textDecoration: 'none', color: '#a0aec0'}} href="#">
                <p>Shopping Lists</p>
              </a>
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
          <p>© 2025 Plate Up. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ShoppingList;