import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Map from "./components/Map"



const App = () => {
 // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
  useEffect(() => {
      axios.get(`https://swapi.dev/api/people/`)
           .then ( res => 

           setPeople(res.data)
           )
           .catch( err => console.log(err))

  }, [setPeople])

  

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <Map people={people}/>
      
    </div>
  );
}

export default App;
