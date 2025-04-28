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
    profileImage: "",
    bio: "",
    location: "",
    personality: "",
    description: ""
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Handles form processing

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  // Handle image upload (Save filename only)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({ ...formData, profileImage: file.name });
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  // Handle form submission and send data to JSON Server
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading state

    const userData = { ...formData };

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        alert(`Welcome, ${formData.username}! Your account has been created.`);

        // Reset form fields after successful signup
        setFormData({
          username: "",
          email: "",
          phone: "",
          password: "",
          age: "",
          gender: "",
          profileImage: "",
          bio: "",
          location: "",
          personality: "",
          description: ""
        });

        setImagePreview(null); // Clear preview
        setIsLoading(false); // Hide loading state

        // Redirect after signup (Change route as needed)
        window.location.href = "/PeopleList";
      } else {
        alert("Signup failed! Please try again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please check your server connection.");
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-wrapper">
      <div className="signup-container">
        <h2><i>Link'd in love✨</i></h2>
        <h2 className="signup-title">Sign Up</h2>

        {isLoading && <p>Processing...</p>} {/* Show loading message */}

        <form className="signup-form" onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" className="signup-input" value={formData.username} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="signup-input" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" className="signup-input" value={formData.phone} onChange={handleChange} required />

          {/* Password Input with Toggle */}
          <div className="password-container">
            <input 
              type={showPassword ? "text" : "password"} 
              name="password" 
              placeholder="Password" 
              className="signup-input" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
            <button 
              type="button" 
              className="toggle-password-btn" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <input type="number" name="age" placeholder="Age" className="signup-input" value={formData.age} onChange={handleChange} required />

          <select name="gender" className="signup-input" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label className="upload-label">Upload Image:</label>
          <input type="file" name="profileImage" className="signup-input" onChange={handleImageUpload} accept="image/*" required />

          {/* {imagePreview && (
            <div className="image-preview-container">
              <h4>Image Preview:</h4>
              <img src={imagePreview} alt="Profile Preview" className="image-preview" />
            </div>
          )} */}

          <input type="text" name="bio" placeholder="Bio" className="signup-input" value={formData.bio} onChange={handleChange} />
          <input type="text" name="location" placeholder="Location" className="signup-input" value={formData.location} onChange={handleChange} />
          <input type="text" name="personality" placeholder="Personality Type" className="signup-input" value={formData.personality} onChange={handleChange} />
          <textarea name="description" placeholder="Describe yourself" className="signup-input" value={formData.description} onChange={handleChange}></textarea>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        {/* <p className="or-text">or</p> */}

        {/* <div className="social-login">
          <button className="facebook-btn">Sign up with Facebook</button>
          <button className="google-btn">Sign up with Google</button>
        </div> */}

        <button onClick={handleClose} className="closeModalBtn">Close</button>

        <footer className="signup-footer">
          <p><i>© 2025 Link'd in love | Connecting Hearts 💖</i></p>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
