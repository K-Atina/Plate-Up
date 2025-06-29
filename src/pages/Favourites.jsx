import React, { useState, useEffect } from 'react';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [stats, setStats] = useState({
    totalFavourites: 15,
    avgCalories: 420,
    totalCookTime: 6.5
  });

  // Mock data for demonstration - replace with actual data loading logic
  useEffect(() => {
    // This would typically load from localStorage, API, or props
    const mockFavourites = [
      {
        id: 1,
        name: "Mediterranean Quinoa Bowl",
        image: "/images/quinoa-bowl.jpg",
        calories: 380,
        cookTime: 25,
        difficulty: "Easy"
      },
      {
        id: 2,
        name: "Grilled Salmon with Vegetables",
        image: "/images/salmon.jpg",
        calories: 520,
        cookTime: 30,
        difficulty: "Medium"
      },
      {
        id: 3,
        name: "Vegetarian Pasta Primavera",
        image: "/images/pasta.jpg",
        calories: 340,
        cookTime: 20,
        difficulty: "Easy"
      }
    ];
    
    setFavourites(mockFavourites);
  }, []);

  const goRecipes = () => {
    // Navigation logic - replace with your routing solution
    console.log("Navigate to recipes page");
  };

  const handleLogout = () => {
    // Logout logic
    console.log("Logout clicked");
  };

  const handleProfile = () => {
    // Profile navigation
    console.log("Profile clicked");
  };

  const removeFavourite = (recipeId) => {
    setFavourites(prev => prev.filter(recipe => recipe.id !== recipeId));
    // Update stats accordingly
    setStats(prev => ({
      ...prev,
      totalFavourites: prev.totalFavourites - 1
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/icons/Logo.png" 
                alt="Logo" 
                className="h-10 w-10"
              />
              <span className="font-bold text-xl text-gray-900">PLATE UP</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">Recipes</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">Meal Plans</a>
              <a href="#" className="text-orange-600 font-medium px-3 py-2">Favourites</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">About</a>
            </nav>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={handleLogout}
                className="text-gray-600 hover:text-gray-900 px-3 py-2"
              >
                Log Out
              </button>
              <button 
                onClick={handleProfile}
                className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Profile
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Favourite Recipes</h1>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {stats.totalFavourites}
            </div>
            <div className="text-gray-600">Total Favourites</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {stats.avgCalories}
            </div>
            <div className="text-gray-600">Avg Calories</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {stats.totalCookTime}
            </div>
            <div className="text-gray-600">Hours of Cooking</div>
          </div>
        </div>

        {/* Favourites Grid */}
        {favourites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favourites.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-recipe.jpg';
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900 text-lg">{recipe.name}</h3>
                    <button 
                      onClick={() => removeFavourite(recipe.id)}
                      className="text-red-500 hover:text-red-700 text-xl"
                      title="Remove from favourites"
                    >
                      ♥
                    </button>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{recipe.calories} cal</span>
                    <span>{recipe.cookTime} min</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              No Favourite Recipes Yet
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Start exploring our delicious recipes and click the heart icon to save your favourites here!
            </p>
            <button 
              onClick={goRecipes}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Browse Recipes
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/icons/Logo.png" 
                  alt="Logo" 
                  className="h-10 w-10"
                />
                <span className="font-bold text-xl">PLATE UP</span>
              </div>
              <p className="text-gray-300">
                Simplify your healthy eating through personalized meal planning, 
                nutritious recipe discovery, and organized shopping lists.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Recipe Search</a></li>
                <li><a href="#" className="hover:text-white">Meal Planning</a></li>
                <li><a href="#" className="hover:text-white">Shopping Lists</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="mailto:example@gmail.com" className="hover:text-white">Email: example@gmail.com</a></li>
                <li><a href="tel:0712345678" className="hover:text-white">Call: 0712 345 678</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 «PLATE UP». All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Favourites;