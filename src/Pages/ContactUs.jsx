import React, { useState } from "react";
import "../Css/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes in the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle message submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleString(),
    };

    try {
      const response = await fetch("http://localhost:3001/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      });

      if (!response.ok) {
        throw new Error("Failed to save message");
      }

      alert(`Thank you for reaching out, ${formData.name}! We've saved your message.`);

      setFormData({ name: "", email: "", message: "" }); // Reset the form

    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong, please try again.");
    }
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
    </div>
  );
};

export default ContactUs;
