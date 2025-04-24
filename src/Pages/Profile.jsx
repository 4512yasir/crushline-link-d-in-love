import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Css/profile.css";
import Header from "../Components/Header";

export default function Profile({ id }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/user/${id}`);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    
    <>
 <div className="nav">

 </div>
    <div className="profile-container">

<div className="profile-card">
  <img
    src={data.profileImage}
    alt={data.username}
    className="profile-image"
  />
  <h2 className="username">{data.username}</h2>
  <p className="bio">{data.bio}</p>

  <div className="details">
    <p className="detailsP">
      <strong>Location:</strong> {data.location}
    </p>
    <p className="detailsP">
      <strong>Personality:</strong> {data.personality}
    </p>
    <p className="detailsP">
      <strong>Age:</strong> {data.age}
    </p>
    <p className="description">{data.description}</p>
    <div className="interests">
      <strong>Interests:</strong>
      <ul>
        {data.interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </div>
  </div>
</div>
</div>
    
    
    </>
  );
}
