import React from "react";
import "../Css/button.css"; 

export default function Button({ onLike, onPass }) {
  return (
    <div className="action-buttons">
      <button className="like-button" onClick={onLike}>❤️ Like</button>
      <button className="pass-button" onClick={onPass}>❌ Pass</button>
    </div>
  );
}
