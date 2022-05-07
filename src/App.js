import './App.css';
import Profile from "./profile/Profile"
import profilePhoto from './images/photo.jpg'


export default function App() {
  // handleName function
  function handleName(name) {
    alert(`Greetings developers it's me ${name}`)
  }

  return (
    <div className="App">
      <Profile
        fullName='Mohamed Amine Terbah'
        profession='Full-Stack js Developer'
        bio="Passioned with IT, in love of the Web and living to develop, i Mohamed Amine Terbah an ambitious Full-Stack Developer fully charged with motivation and will to improve."
        handleName={handleName}
      >
        <img
        style={{borderRadius : "100%", width : "200px", height : "200px"}}
          src={profilePhoto}
          alt="avatar"
        />
      </Profile>
      
      <Profile>
      <h3>Profile card when no data in.</h3>
      </Profile>

    </div>
  );
}


