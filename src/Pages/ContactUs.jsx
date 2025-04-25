import React, { useState, useEffect } from "react";
import "../Css/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Store submitted messages
  const [messages, setMessages] = useState([]);

  // Load stored messages when component mounts
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  // Handle input changes in the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle message submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing messages or create a new array
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];

    // Add the new message with timestamp
    const newMessage = { ...formData, date: new Date().toLocaleString(), replies: [] };
    savedMessages.push(newMessage);

    // Store the updated messages in localStorage
    localStorage.setItem("messages", JSON.stringify(savedMessages));

    // Update state to display the new message
    setMessages(savedMessages);

    // Alert the user
    alert(`Thank you for reaching out, ${formData.name}! We've saved your message.`);

    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  // Handle message deletion
  const handleDelete = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);

    // Update local storage
    localStorage.setItem("messages", JSON.stringify(updatedMessages));

    // Update state
    setMessages(updatedMessages);
  };

  // Handle reply input changes
  const handleReplyChange = (e, index) => {
    const newMessages = [...messages];
    newMessages[index].newReply = e.target.value;
    setMessages(newMessages);
  };

  // Handle sending a reply
  const handleReply = (index) => {
    const newMessages = [...messages];

    if (!newMessages[index].replies) {
      newMessages[index].replies = []; // Initialize replies if empty
    }

    if (newMessages[index].newReply) {
      newMessages[index].replies.push(newMessages[index].newReply); // Store reply
      newMessages[index].newReply = ""; // Clear reply input

      // Update local storage
      localStorage.setItem("messages", JSON.stringify(newMessages));
      setMessages(newMessages);
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

      {/* Display stored messages */}
      <div className="messages-container">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="message-box">
              <p><strong>{msg.name}:</strong> {msg.message}</p>
              <p className="message-date">{msg.date}</p>

              {/* Reply Section */}
              <input
                type="text"
                placeholder="Reply..."
                value={msg.newReply || ""}
                onChange={(e) => handleReplyChange(e, index)}
              />
              <button className="reply-btn" onClick={() => handleReply(index)}>Reply</button>

              {/* Show Replies */}
              {msg.replies && msg.replies.length > 0 && (
                <div className="replies">
                  {msg.replies.map((reply, i) => (
                    <p key={i} className="reply-text">🔁 {reply}</p>
                  ))}
                </div>
              )}

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
