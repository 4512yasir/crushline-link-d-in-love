import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import "../Css/profile.css";


export default function Profile() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/user/${id}`);
        setData(response.data);
      } catch (err) {
        setError(err.message);
        console.log("Error fetching data")
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
    <p className="description"><strong>Description: </strong>{data.description}</p>

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
