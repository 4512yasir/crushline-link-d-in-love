import './personCard.css';

export default function PersonCard({ user }) {
  return (
    <div className="card-area">
      <div className="profile-image-container">
        <img src={user.profileImage} alt={user.username} />
        <span className={`status-indicator ${user.isOnline ? 'online' : 'offline'}`}></span>
      </div>
      <h2>{user.username}</h2>
      <p>{user.location}</p>
      <p>{user.bio}</p>
      <button>View Profile</button>
    </div>
  );
}
