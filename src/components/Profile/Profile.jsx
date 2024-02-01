import React, { useState } from 'react'
import './Profile.css'
import profile from '../../profile.jpg'
import { showDetails } from '../../functions/showDetails'

const Profile = () => {
    const [name, setName] = useState("John Doe");
    const [position, setPosition] = useState("Intern, Delivery");
    const [compName, setCompName] = useState("JMAN Group");
    return (
        <>
            <img id="profile" src={profile} alt="profile" onClick={ showDetails } />
            <div id="profile-info">
                <p>{ name }</p>
                <p>{ position }</p>
                <p>{ compName }</p>
            </div>
        </>
    )
}

export default Profile