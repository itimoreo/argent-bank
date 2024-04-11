import React, { useState, useEffect } from "react";
import EditHeader from "../components/EditHeader";
import Footer from "../components/Footer";
import Transaction from "../components/Transaction";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUsername } from "../redux/actions/update-usernameAction";

function EditName() {
  const [userData, setUserData] = useState({
    body: {
      firstName: "",
      lastName: ""
    }
  });
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');

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
        setUserName(data.body.userName);
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const url = "http://localhost:3001/api/v1/user/profile";
    const token = localStorage.getItem("token"); // Assurez-vous d'avoir le token d'authentification de l'utilisateur
  
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Utilisez le token dans l'en-tête d'autorisation
      },
      body: JSON.stringify({
        userName: userName // Mettez à jour le prénom de l'utilisateur
      })
    });
  
    if (response.ok) {
      const data = await response.json();
      setUserData(prevState => ({
        ...prevState,
        body: {
          ...prevState.body,
          userName: data.body.userName
        }
      }));
      setUserName(data.body.userName);
      dispatch(updateUsername(data.body.userName));
      localStorage.setItem('userName', data.body.userName);
    } else {
      console.error("Failed to update username");
    }
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
            value={userName}
            onChange={handleNameChange}
          />
          <p>First Name: {userData.body.firstName}</p>
          <p>Last Name: {userData.body.lastName}</p>
          <button type="submit">Save</button>
        </form>

        <Transaction />

        <Footer />
      </div>
  );
}

export default EditName;