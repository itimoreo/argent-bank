import React, { useState, useEffect } from "react";
import EditHeader from "../components/EditHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function EditName() {
  const [userData, setUserData] = useState({
    body: {
      firstName: "",
      lastName: ""
    }
  });

  useEffect(() => {
    // Fetch user info from the database and update the state
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token') // Remplacez 'token' par votre token d'authentification
      },
      // Include any necessary data in the body of the request
      body: JSON.stringify({
        // Replace this with the actual data
      })
    })
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleNameChange = (event) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      body: {
        ...prevUserData.body,
        firstName: event.target.value
      }
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the necessary logic to update the user's username in the database
    console.log("Updated username:", userData.body.firstName);
  };

  return (
      <div>
        <EditHeader />
        <h1>Edit User Info</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.body.firstName}
            onChange={handleNameChange}
          />
          <p>First Name: {userData.body.firstName}</p>
          <p>Last Name: {userData.body.lastName}</p>
          <button type="submit">Save</button>
        </form>
        <Footer />
      </div>
  );
}

export default EditName;