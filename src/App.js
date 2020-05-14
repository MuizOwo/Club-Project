import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar'
import Clubs from './Components/Clubs/Clubs'
import AddClubs from './Components/AddClub/AddClubs'
import './App.css'


function App() {
  const [clubs, setClubs] = useState([])
  const addClub = (club) => {
    setClubs([...clubs, club])
    console.log(clubs)
  }
  return (
        <div className='app-body'>     
            <Navbar /> 
              <div className='about-clubs'>
                  <div className='app-club'>
                    <Clubs clubs={clubs}/>
                  </div>
                    <div className='app-add'>
                        <AddClubs add={addClub}/>
                    </div>
                </div>
        </div>
  );
}

export default App;
