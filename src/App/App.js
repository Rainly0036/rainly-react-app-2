import './App.css'
import TripList from '../Components/TripList.js'
import { useState } from 'react'

function App() {
  const [showTrips, setShowTrips] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setShowTrips(false)}>Hide Trips</button>
      { showTrips && <TripList /> }
    </div>
  );
}

export default App
