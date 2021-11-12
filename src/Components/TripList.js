import { useState } from 'react'
import { useFetch } from '../Hooks/useFetch.js'
import './TripList.css'

export default function TripList() {
  const [ url, setUrl ] = useState('http://localhost:3000/trips')
  const { data: trips, isPending } = useFetch(url)
  
  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>
          European Trips
        </button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>
          All Trips
        </button>
      </div>
      { isPending && (
        <div>
          <h2>
            <b>Loading...</b>
          </h2>
        </div>
      )}
      <ul>
        {trips && trips.map(trip => (
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}