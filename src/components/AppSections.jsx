import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

export const HeroSection = () => (
  <section className="hero">
    <h1 style={{ marginBottom: '0px' }}>Your Perfect Meal Plans </h1>
    <h1><span className="highlight">Made Simple</span></h1>
    <p>
      Easily create personalized meal plans, smart shopping lists, and nutritious recipes—all in one seamless process.
    </p>
    <div className="hero-actions">
      <input type="email" placeholder="Enter your email to get started" />
      {/* Changed to Link component for React Router navigation */}
      <Link to="/signup" style={{ margin: 0, padding: 0 }}>
        <button style={{ height: '100%', fontSize: '16px' }} className="btn-getstarted">
          Start Planning
        </button>
      </Link>
    </div>
  </section>
);

export const FeaturesSection = () => (
  <section className="section">
    <h2>Your Guide to Easy Healthy Eating</h2>
    <p className="section-desc">
      Our platform offers an all-in-one solution that seamlessly integrates recipe discovery, personalized meal planning, and organized shopping lists, making your cooking experience effortless and enjoyable.
    </p>
    <div className="features">
      {[
        {
          src: '/icons/search-icon.png',
          title: 'Smart Recipe Search',
          text: 'Find recipes that match your dietary preferences and restrictions'
        },
        {
          src: '/icons/calendar-icon.png',
          title: 'Meal planning',
          text: 'Create personalized weekly meal plans with ease'
        },
        {
          src: '/icons/shopping-cart.png',
          title: 'Auto Shopping Lists',
          text: 'Generate organized shopping lists from your meal plans'
        },
        {
          src: '/icons/black heart.png',
          title: 'Favorite Recipes',
          text: 'Save and organize your favorite healthy recipes'
        }
      ].map(({ src, title, text }, index) => (
        <div className="card" key={index}>
          <img src={src} alt={title} className="feature-icon" />
          <h4 style={{ color: '#28e28b' }}>{title}</h4>
          <p>{text}</p>
        </div>
      ))}
    </div>
  </section>
);

export const BenefitsSection = () => (
  <section className="section">
    <h2>Why Choose MealCraft?</h2>
    <p className="section-desc">
      Join a community of users who have transformed their eating habits with our platform.
    </p>
    <div className="benefits">
      {[
        {
          title: 'Saves Time',
          text: 'Reduce meal planning time from hours to minutes with our smart automation'
        },
        {
          title: 'Healthier Eating',
          text: 'Make better food choices with personalized nutrition recommendations'
        },
        {
          title: 'Reduce Food Waste',
          text: 'Smart shopping lists help you buy exactly what you need'
        }
      ].map(({ title, text }, index) => (
        <div className="card" key={index}>
          <h4 className="benefit-title" style={{ color: '#28e28b' }}>{title}</h4>
          <p>{text}</p>
        </div>
      ))}
    </div>
  </section>
);

// This section needs to be exported for App.jsx to import it
export const StepsSection = () => (
  <section className="section">
    <h2>How MealCraft Works</h2>
    <p className="section-desc">
      Get started with healthy meal planning in just three simple steps.
    </p>
    <div className="steps">
      {[
        {
          number: 1,
          title: 'Set Your Preferences',
          text: 'Tell us about your dietary preferences, food restrictions, and health goals.'
        },
        {
          number: 2,
          title: 'Get Your Plan',
          text: 'Receive a personalized weekly meal plan with recipes and nutrition info.'
        },
        {
          number: 3,
          title: 'Shop & Cook',
          text: 'Use our auto-generated shopping list and start cooking delicious meals.'
        }
      ].map(({ number, title, text }, index) => (
        <div className="card" key={index}>
          <div className="step-number">{number}</div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      ))}
    </div>
  </section>
);


