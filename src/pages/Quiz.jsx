import React, { useState, useEffect } from 'react';
import '../styles/Quiz.css'; // Ensure you have the correct path to your CSS file

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    diet: '',
    allergies: [],
    activity: '',
    cooking: '',
    householdSize: 1,
    dislikes: '',
    budget: ''
  });

  const totalQuestions = 7;

  // Update progress bar
  useEffect(() => {
    const progressPercentage = (currentQuestion / totalQuestions) * 100;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
      progressBar.style.width = `${progressPercentage}%`;
    }
  }, [currentQuestion]);

  const handleOptionSelect = (questionType, value) => {
    if (questionType === 'allergies') {
      // Handle multiple selection for allergies
      if (value === 'none') {
        setAnswers(prev => ({ ...prev, allergies: ['none'] }));
      } else {
        setAnswers(prev => {
          const newAllergies = prev.allergies.includes('none') 
            ? [value] 
            : prev.allergies.includes(value)
              ? prev.allergies.filter(item => item !== value)
              : [...prev.allergies, value];
          return { ...prev, allergies: newAllergies };
        });
      }
    } else {
      setAnswers(prev => ({ ...prev, [questionType]: value }));
    }
  };

  const handleInputChange = (field, value) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const isQuestionAnswered = () => {
    switch (currentQuestion) {
      case 1: return answers.goal !== '';
      case 2: return answers.diet !== '';
      case 3: return answers.allergies.length > 0;
      case 4: return answers.activity !== '';
      case 5: return answers.cooking !== '';
      case 6: return answers.householdSize >= 1;
      case 7: return answers.budget !== '';
      default: return false;
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions && isQuestionAnswered()) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="step-indicator">
        {[...Array(totalQuestions)].map((_, index) => (
          <div 
            key={index} 
            className={`step-dot ${index + 1 <= currentQuestion ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    );
  };

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 1:
        return (
          <div className="question active">
            <h2 className="question-title">What's your main goal?</h2>
            <p className="question-subtitle">Select your primary reason for wanting a meal plan</p>
            
            <div className="options-grid goals-grid">
              <div 
                className={`option ${answers.goal === 'weight-loss' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('goal', 'weight-loss')}
              >
                <span className="option-icon">⚖️</span>
                <div className="option-title">Weight Loss</div>
                <div className="option-description">Lose weight with healthy, balanced meals</div>
              </div>
              <div 
                className={`option ${answers.goal === 'muscle-gain' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('goal', 'muscle-gain')}
              >
                <span className="option-icon">💪</span>
                <div className="option-title">Muscle Gain</div>
                <div className="option-description">Build muscle with protein-rich nutrition</div>
              </div>
              <div 
                className={`option ${answers.goal === 'healthy-living' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('goal', 'healthy-living')}
              >
                <span className="option-icon">🌱</span>
                <div className="option-title">Healthy Living</div>
                <div className="option-description">Maintain overall health and wellness</div>
              </div>
              <div 
                className={`option ${answers.goal === 'save-time' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('goal', 'save-time')}
              >
                <span className="option-icon">⏰</span>
                <div className="option-title">Save Time</div>
                <div className="option-description">Streamline meal planning and shopping</div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="question active">
            <h2 className="question-title">Dietary Preferences</h2>
            <p className="question-subtitle">What best describes your eating style?</p>
            
            <div className="options-grid diet-grid">
              <div 
                className={`option ${answers.diet === 'omnivore' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('diet', 'omnivore')}
              >
                <span className="option-icon">🍖</span>
                <div className="option-title">Omnivore</div>
                <div className="option-description">Everything</div>
              </div>
              <div 
                className={`option ${answers.diet === 'vegetarian' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('diet', 'vegetarian')}
              >
                <span className="option-icon">🥬</span>
                <div className="option-title">Vegetarian</div>
                <div className="option-description">No meat</div>
              </div>
              <div 
                className={`option ${answers.diet === 'vegan' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('diet', 'vegan')}
              >
                <span className="option-icon">🌱</span>
                <div className="option-title">Vegan</div>
                <div className="option-description">Plant-based</div>
              </div>
              <div 
                className={`option ${answers.diet === 'keto' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('diet', 'keto')}
              >
                <span className="option-icon">🥑</span>
                <div className="option-title">Keto</div>
                <div className="option-description">Low carb, high fat</div>
              </div>
              <div 
                className={`option ${answers.diet === 'paleo' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('diet', 'paleo')}
              >
                <span className="option-icon">🦴</span>
                <div className="option-title">Paleo</div>
                <div className="option-description">Whole foods</div>
              </div>
              <div 
                className={`option ${answers.diet === 'mediterranean' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('diet', 'mediterranean')}
              >
                <span className="option-icon">🫒</span>
                <div className="option-title">Mediterranean</div>
                <div className="option-description">Fish, olive oil</div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="question active">
            <h2 className="question-title">Food Allergies & Restrictions</h2>
            <p className="question-subtitle">Select all that apply to you</p>
            <p className="multiple-select-info">You can select multiple options</p>
            
            <div className="options-grid">
              {[
                { value: 'none', title: 'No allergies or restrictions' },
                { value: 'nuts', title: 'Tree nuts or peanuts' },
                { value: 'dairy', title: 'Dairy/Lactose' },
                { value: 'gluten', title: 'Gluten/Wheat' },
                { value: 'eggs', title: 'Eggs' },
                { value: 'shellfish', title: 'Shellfish' },
                { value: 'soy', title: 'Soy' }
              ].map((allergy) => (
                <div 
                  key={allergy.value}
                  className={`option checkbox-option ${answers.allergies.includes(allergy.value) ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect('allergies', allergy.value)}
                >
                  <div className={`checkbox ${answers.allergies.includes(allergy.value) ? 'checked' : ''}`}></div>
                  <div>
                    <div className="option-title">{allergy.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="question active">
            <h2 className="question-title">Activity Level</h2>
            <p className="question-subtitle">How active are you on a typical week?</p>
            
            <div className="options-grid activity-grid">
              <div 
                className={`option ${answers.activity === 'sedentary' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('activity', 'sedentary')}
              >
                <span className="option-icon">🛋️</span>
                <div className="option-title">Sedentary</div>
                <div className="option-description">Little to no exercise, desk job</div>
              </div>
              <div 
                className={`option ${answers.activity === 'lightly-active' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('activity', 'lightly-active')}
              >
                <span className="option-icon">🚶</span>
                <div className="option-title">Lightly Active</div>
                <div className="option-description">Light exercise 1-3 days/week</div>
              </div>
              <div 
                className={`option ${answers.activity === 'moderately-active' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('activity', 'moderately-active')}
              >
                <span className="option-icon">🏃</span>
                <div className="option-title">Moderately Active</div>
                <div className="option-description">Moderate exercise 3-5 days/week</div>
              </div>
              <div 
                className={`option ${answers.activity === 'very-active' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('activity', 'very-active')}
              >
                <span className="option-icon">🏋️</span>
                <div className="option-title">Very Active</div>
                <div className="option-description">Hard exercise 6-7 days/week</div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="question active">
            <h2 className="question-title">Cooking Experience</h2>
            <p className="question-subtitle">How comfortable are you in the kitchen?</p>
            
            <div className="options-grid activity-grid">
              <div 
                className={`option ${answers.cooking === 'beginner' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('cooking', 'beginner')}
              >
                <span className="option-icon">🥄</span>
                <div className="option-title">Beginner</div>
                <div className="option-description">Basic skills, simple recipes preferred</div>
              </div>
              <div 
                className={`option ${answers.cooking === 'intermediate' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('cooking', 'intermediate')}
              >
                <span className="option-icon">👨‍🍳</span>
                <div className="option-title">Intermediate</div>
                <div className="option-description">Comfortable with most cooking techniques</div>
              </div>
              <div 
                className={`option ${answers.cooking === 'advanced' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('cooking', 'advanced')}
              >
                <span className="option-icon">👩‍🍳</span>
                <div className="option-title">Advanced</div>
                <div className="option-description">Love complex recipes and experimenting</div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="question active">
            <h2 className="question-title">Household Information</h2>
            <p className="question-subtitle">Help us size your meal plans correctly</p>
            
            <div className="input-group">
              <label className="input-label">How many people are you cooking for?</label>
              <input 
                type="number" 
                className="form-input" 
                min="1" 
                max="10" 
                value={answers.householdSize}
                onChange={(e) => handleInputChange('householdSize', parseInt(e.target.value) || 1)}
                placeholder="Number of people"
              />
            </div>
            
            <div className="input-group">
              <label className="input-label">Any specific foods you dislike? (Optional)</label>
              <input 
                type="text" 
                className="form-input" 
                value={answers.dislikes}
                onChange={(e) => handleInputChange('dislikes', e.target.value)}
                placeholder="e.g., mushrooms, spicy food, fish..."
              />
            </div>
          </div>
        );

      case 7:
        return (
          <div className="question active">
            <h2 className="question-title">Budget Preferences</h2>
            <p className="question-subtitle">What's your typical weekly grocery budget per person?</p>
            
            <div className="options-grid activity-grid">
              <div 
                className={`option ${answers.budget === 'budget' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('budget', 'budget')}
              >
                <span className="option-icon">💰</span>
                <div className="option-title">Budget-Friendly</div>
                <div className="option-description">Ksh.300-500 per person/week</div>
              </div>
              <div 
                className={`option ${answers.budget === 'moderate' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('budget', 'moderate')}
              >
                <span className="option-icon">💳</span>
                <div className="option-title">Moderate</div>
                <div className="option-description">Ksh.500-800 per person/week</div>
              </div>
              <div 
                className={`option ${answers.budget === 'premium' ? 'selected' : ''}`}
                onClick={() => handleOptionSelect('budget', 'premium')}
              >
                <span className="option-icon">💎</span>
                <div className="option-title">Premium</div>
                <div className="option-description">Ksh.800 per person/week</div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="quiz-container">
        <div className="quiz-header">
          <div className="logo">
            <img src="/icons/Logo.png" alt="Logo" className="logo-img" style={{ height: '40px', width: '40px' }} />
            PLATE UP
          </div>
          <h1 className="quiz-title">Let's Personalize Your Experience</h1>
          <p className="quiz-subtitle">Help us create the perfect meal plan just for you</p>
          
          <div className="progress-container">
            <div className="progress-bar" id="progressBar"></div>
          </div>
          
          {renderStepIndicator()}
        </div>

        <div className="question-container">
          {renderQuestion()}
        </div>

        <div className="navigation-buttons">
          <button 
            className="btn-back" 
            onClick={previousQuestion}
            style={{ display: currentQuestion > 1 ? 'block' : 'none' }}
          >
            ← Previous
          </button>
          <button 
            className={`btn-next ${!isQuestionAnswered() ? 'disabled' : ''}`}
            onClick={nextQuestion}
            disabled={!isQuestionAnswered()}
          >
            {currentQuestion === totalQuestions ? 'Complete' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;