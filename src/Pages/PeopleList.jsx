import React, { useState, useEffect } from "react";
import PersonCard from "../Components/PersonCard";
import useFetch from "../useFetch";
import '../Css/peopleList.css';

export default function PeopleList() {

  // console.log(users,"yeee")

  const { data: users, loading, error } = useFetch("api/user");
  

  // Assuming you have a way to determine the current user's gender (you could get this from localStorage, context, or from the backend)
  const currentUserGender = users.gender; // or "female", based on your app's logic (this would typically be dynamic)

  const handleLike = (user) => {
    console.log("❤️ Liked:", user.username);
  };

  const handlePass = (user) => {
    console.log("❌ Passed:", user.username);
  };

  // If the data is loading, show a loading message
  if (loading) return <p>Loading users...</p>;

  // If there's an error, display the error message
  if (error) return <p>Error: {error}</p>;

  // Filter users based on the current user's gender
  const filteredUsers = users.filter(user => 
    user.gender !== currentUserGender
  );

  return (
    <>
      <div className="matches">
        <h1>Matches</h1>
      </div>
      <div className="list">
        {/* Map through the filtered users and display them */}
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <PersonCard
              key={user.id}
              user={user}
              onLike={handleLike}
              onPass={handlePass}
            />
          ))
        ) : (
          <p>No users found.</p> // Display a message if no users are found
        )}
      </div>
    </>
  );
}
