import React, { useState, useEffect } from "react";
import "../Css/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
// store submited massage
  const [messages, setMessages] = useState([]);

  // Load stored messages when component mounts
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing messages or create a new array
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];

    // Add the new message
    savedMessages.push(formData);

    // Store the updated messages back in localStorage
    localStorage.setItem("messages", JSON.stringify(savedMessages));

    // Update state to display the new message
    setMessages(savedMessages);

    // Alert the user
    alert(`Thank you for reaching out, ${formData.name}! We've saved your message.`);

    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };
//   handle massage deletion
  const handleDelete = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);
  
    // Update local storage
    localStorage.setItem("messages", JSON.stringify(updatedMessages));
  
    // Update state
    setMessages(updatedMessages);
  };
  

  return (
    <div className="contact-page">
      <h1>Contact Us 📩</h1>
      <p>We'd love to hear from you! Reach us through the contact form or directly using the details below.</p>

      {/* Contact Details */}
      <div className="contact-details">
        <p><strong>Email:</strong> support@gmail.com</p>
        <p><strong>Phone:</strong> +223 456 7890</p>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        
        <textarea 
          name="message" 
          placeholder="Your Message..." 
          value={formData.message} 
          onChange={handleChange} 
          required
        ></textarea>

        <button type="submit" className="send-btn">Send Message</button>
      </form>

      {/* Display stored messages */}
      <div className="messages-container">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="message-box">
              <p><strong>{msg.name}:</strong> {msg.message}</p>
              <button className="delete-btn" onClick={() => handleDelete(index)}>❌</button>
            </div>
          ))
        ) : (
          <p className="no-messages">No messages yet.</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
