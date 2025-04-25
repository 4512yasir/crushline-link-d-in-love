import { useNavigate } from 'react-router-dom';
import '../Css/personCard.css';
import Button from './Button';

export default function PersonCard({ user, onLike, onPass } ) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/profile/${user.id}`); 
  };
  const handleLike = () => {
    console.log("User liked the profile!");
   
  };

  const handlePass = () => {
    console.log("User passed on the profile!");
  };

  return (
    <div className="card-area">
      <div className="profile-image-container">
        <img src={user.profileImage} alt={user.username} />
        <span className={`status-indicator ${user.isOnline ? 'online' : 'offline'}`}></span>
      </div>
      <h2>{user.username}</h2>
      <p>{user.location}</p>
      <p>{user.bio}</p>
      <button onClick={handleViewProfile}>View Profile</button>
      <Button
        onLike={() => onLike(user)}
        onPass={() => onPass(user)}
      />
    </div>
  );
}
