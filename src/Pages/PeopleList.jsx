import React from "react";
import PersonCard from "../Components/PersonCard";
import useFetch from "../useFetch";
import '../Css/peopleList.css'
import Header from "../Components/Header";

export default function PeopleList() {
  const { data: users, loading, error } = useFetch("http://localhost:3000/user");
console.log(users)
  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <> 
      
    <div className="matches"><h1>Matches</h1></div>
     <div className="list">
   
    {users.map((user) => (
      <PersonCard key={user.id} user={user} />
    ))}
  </div></>
  
  );
}
