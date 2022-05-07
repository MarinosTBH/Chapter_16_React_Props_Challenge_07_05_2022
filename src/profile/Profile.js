import React from 'react'
import './Profile.css'
import PropTypes from "prop-types"

//1_ The profile component gets data (fullName, bio, profession) as props, and gets image as children props, and the function handleName functions as a prop that sends an alert message with the name of the profile user.
export default function Profile(props) {
  return (
    <div className='profile-card'>
      <div className='profile-photo'>{props.children}</div>
      <div className='info-container'>
        
        <h3>
          <span className="label">Name : </span>
          {props.fullName}
          {" "}
        </h3> 
        
        <p>
          {" "}
          <span className="label">Profession : </span>
          {props.profession}
        </p> 

        <p>
          {" "}
          <span className="label">Bio : </span>
          {props.bio}
        </p>

        <button 
          id='btnIsShit'
          className='btn btn-profile' 
          onClick={() => props.handleName(props.fullName)}
          >
          Greetings! 
        </button> 

      </div>

    </div>
  );
}

//2_ Define the default props for Profile component. 

//Use PropsType to check props.  
Profile.propTypes = {
  fullName : PropTypes.string,
  profession : PropTypes.string,
  bio : PropTypes.string,
  handleName : PropTypes.func
};

//defaultProps
Profile.defaultProps = {
  fullName : "No Data ",
  profession: "No Data ",
  bio: "No Data ",
  handleName : () => {
    alert("There is no Props ");
  }
};

