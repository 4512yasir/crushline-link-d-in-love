import React, { useState } from "react";
import "../Css/SignUp.css";

const SignUp = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    age: "",
    gender: "",
    profileImage: null, 
    bio: "",
    location: "",
    personality: "",
    description: ""
  });

  const [imagePreview, setImagePreview] = useState(null); // Stores preview URL
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", formData);
    alert(`Welcome, ${formData.username}!`);
    handleClose(); // Close modal after signup
  };

  return (
    <div className="modal-wrapper">
      <div className="signup-container">
        <h2><i>Link'd in love✨</i></h2>
        <p> ✨✨✨</p>
        <h2 className="signup-title">Sign Up</h2>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" className="signup-input" onChange={handleChange} required autoComplete="off" />
          <input type="email" name="email" placeholder="Email" className="signup-input" onChange={handleChange} required autoComplete="off" />
          <input type="tel" name="phone" placeholder="Phone Number" className="signup-input" onChange={handleChange} required />
          
          {/* Password Input with Toggle */}
          <div className="password-container">
            <input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              placeholder="Password" 
              className="signup-input" 
              onChange={handleChange} 
              required 
              autoComplete="new-password"
            />
            <button 
              type="button" 
              className="toggle-password-btn" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <input type="number" name="age" placeholder="Age" className="signup-input" onChange={handleChange} required />

          <select name="gender" className="signup-input" onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label className="upload-label">Upload Image:</label>
          <input type="file" name="profileImage" className="signup-input" onChange={handleImageUpload} accept="image/*" required />

          {imagePreview && (
            <div className="image-preview-container">
              <h4>Image Preview:</h4>
              <img src={imagePreview} alt="Profile Preview" className="image-preview" />
            </div>
          )}

          <input type="text" name="bio" placeholder="Bio" className="signup-input" onChange={handleChange} />
          <input type="text" name="location" placeholder="Location" className="signup-input" onChange={handleChange} />
          <input type="text" name="personality" placeholder="Personality Type" className="signup-input" onChange={handleChange} />
          <textarea name="description" placeholder="Describe yourself" className="signup-input" onChange={handleChange}></textarea>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <h6>Have an account? <a href="./login">Login</a></h6>
        <p className="or-text">or</p>

        <div className="social-login">
          <button className="facebook-btn">Sign up with Facebook</button>
          <button className="google-btn">Sign up with Google</button>
        </div>

        <button onClick={handleClose} className="closeModalBtn">Close</button>

        <footer className="signup-footer">
          <p><i>© 2025 Link'd in love | Connecting Hearts 💖</i></p>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
