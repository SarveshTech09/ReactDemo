import React from 'react'
import UserContext from '../Context/UserContext';
import { useContext, useState } from 'react';

function Profile() {
    const { user } = useContext(UserContext);
    
    if (!user) {
        return <div>Please log in to view your profile.</div>;
    }
    const { username } = user;

  return (
    <div>Welcom{user.username}</div>
  )
}

export default Profile