import React, { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    heightUnit: "cm",
    weight: "",
    weightUnit: "kg",
    dietaryPreference: "",
    foodAllergies: "",
    healthCondition: "",
    activityLevel: "",
    cuisinePreference: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username" && /[^a-zA-Z. ]/.test(value)) {
      return;
    }
    if ((name === "height" || name === "weight") && /[^a-zA-Z0-9 ]/.test(value)) {
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setStep(4);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "linear-gradient(to bottom, #a8edea, #fed6e3, #b3e5fc)" }}>
      {step === 1 && (
        <div style={containerStyle}>
          <h1 style={headingStyle}>Welcome to Personalized AI Nutrition Assistant</h1>
          <p style={{ color: "#009688" }}>We help you find the best nutritional plan based on your preferences and needs.</p>
          <button onClick={() => setStep(2)} style={buttonStyle}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div style={containerStyle}>
          <h2 style={headingStyle}>What is your name?</h2>
          <input type="text" name="username" placeholder="Enter your name" value={username} onChange={(e) => setUsername(e.target.value)} required style={inputStyle} />
          <button onClick={() => setStep(3)} style={buttonStyle}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div style={containerStyle}>
          <h2 style={headingStyle}>Hello {username}!</h2>
          <p>Please enter your details:</p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input type="text" name="age" placeholder="Age (1-100)" pattern="[0-9]*" onChange={handleChange} required style={inputStyle} />
            
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="text" name="height" placeholder="Height" onChange={handleChange} required style={inputStyle} />
              <select name="heightUnit" onChange={handleChange} required style={inputStyle}>
                <option value="cm">cm</option>
                <option value="feet">feet</option>
              </select>
            </div>
            
            <div style={{ display: "flex", gap: "10px" }}>
              <input type="text" name="weight" placeholder="Weight" onChange={handleChange} required maxLength="6" style={inputStyle} />
              <select name="weightUnit" onChange={handleChange} required style={inputStyle}>
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
            
            <select name="dietaryPreference" onChange={handleChange} required style={inputStyle}>
              <option value="">Select Dietary Preference</option>
              <option value="keto">Keto</option>
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-Vegetarian</option>
              <option value="vegan">Vegan</option>
            </select>
            
            <input type="text" name="foodAllergies" placeholder="Food Allergies (or None)" onChange={handleChange} style={inputStyle} />
            <input type="text" name="healthCondition" placeholder="Health Conditions (or None)" onChange={handleChange} style={inputStyle} />
            
            <select name="activityLevel" onChange={handleChange} required style={inputStyle}>
              <option value="">Select Activity Level</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <select name="cuisinePreference" onChange={handleChange} required style={inputStyle}>
              <option value="">Select Cuisine Preference</option>
              <option value="north-indian">North Indian</option>
              <option value="south-indian">South Indian</option>
              <option value="western">Western</option>
              <option value="regional">Regional/Local</option>
            </select>
            <button type="submit" style={buttonStyle}>Submit</button>
          </form>
        </div>
      )}

      {step === 4 && (
        <div style={containerStyle}>
          <h2 style={headingStyle}>Thank you, {username}!</h2>
          <p>Your personalized nutrition plan is being generated...</p>
        </div>
      )}
    </div>
  );
}

const containerStyle = {
  textAlign: "center", background: "#ffffff", padding: "30px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)", border: "2px solid #87ceeb"
};

const headingStyle = {
  color: "#0077b6"
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #87ceeb",
  fontSize: "16px",
  backgroundColor: "#e0f7fa"
};

const buttonStyle = {
  backgroundColor: "#009688",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold"
};
