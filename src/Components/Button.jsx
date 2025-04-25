import React, { useState } from "react";
import "../Css/button.css";

export default function Button({ onLike, onPass }) {
  const [action, setAction] = useState(null); // null, 'liked', or 'passed'

  const handleLike = () => {
    if (action === null) {
      setAction("liked");
      if (onLike) onLike();
    }
  };

  const handlePass = () => {
    if (action === null) {
      setAction("passed");
      if (onPass) onPass();
    }
  };

  return (
    <div className="action-buttons">
      <button
        className="like-button"
        onClick={handleLike}
        disabled={action !== null}
      >
        {action === "liked" ? "✅ Liked" : "❤️ Like"}
      </button>

      <button
        className="pass-button"
        onClick={handlePass}
        disabled={action !== null}
      >
        {action === "passed" ? "❌ Passed" : "❌ Pass"}
      </button>
    </div>
  );
}
