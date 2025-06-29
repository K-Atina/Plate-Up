import React from 'react';
import { Heart, TrendingUp, Scale, Triangle } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900">PLATE UP</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Recipes</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Meal Plans</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Favourites</a>
              <a href="#" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">About</a>
            </nav>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors">
                Log Out
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Profile
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Us</h1>
        
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          At <span className="font-semibold text-green-600">Plate Up</span>, we believe that nourishing your body should be simple, empowering, and joyful. Our platform is designed to help you discover delicious recipes, prep smarter, and build sustainable habits that fit your unique lifestyle.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              To simplify healthy eating and meal prepping by offering personalized, practical, and inspiring solutions that support your goals—whether you're cooking for one or a whole family.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-600 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where preparing nutritious meals is second nature—a world where everyone feels confident in the kitchen, inspired by food, and supported in their wellness journey.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Story</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                The idea for <span className="font-semibold text-green-600">Plate Up</span> started with a common frustration: eating well shouldn't feel like a chore. Too often, busy schedules, limiting options, or lack of inspiration get in the way of healthy choices. We knew there had to be a better way.
              </p>
              <p>
                So, a passionate team of nutrition experts, cooks, and creatives came together with one shared goal—to remove the stress from meal prepping and make wholesome eating something to look forward to. From its start as a small project, this vision has evolved into a trusted resource for thousands of people looking to eat better, waste less, and save time.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Triangle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Simplicity</h4>
                <p className="text-gray-600 text-sm">
                  We make healthy eating easy, accessible, and stress-free for everyone.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Balance</h4>
                <p className="text-gray-600 text-sm">
                  Our platform encourages balanced nutrition and sustainable habits.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Inspiration</h4>
                <p className="text-gray-600 text-sm">
                  We provide creative ideas and tools to keep you motivated in the kitchen.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Support</h4>
                <p className="text-gray-600 text-sm">
                  Enjoy a supportive community and expert guidance every step of the way.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Join Us</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Whether you're new to meal prepping or a seasoned home chef, <span className="font-semibold text-green-600">Plate Up</span> is here to help you take the guesswork out of healthy eating. Start your journey today and discover how delicious balance can be.
            </p>
            <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Get Started Today
            </button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold">PLATE UP</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Simplify your healthy eating through personalized meal planning, nutritious recipe discovery, and organized shopping lists.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Recipe Search</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Meal Planning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shopping Lists</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Email: example@gmail.com</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Call: 0715 340 778</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Plate Up. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;