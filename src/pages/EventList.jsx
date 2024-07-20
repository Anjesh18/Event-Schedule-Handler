import React from 'react'
import Navbar from '../Components/Navbar'
import EventCard from '../Components/EventCard'
import { eventList } from '../utils/EventDataBase'

export default function EventList() {
    const renderCard=()=>{
        return eventList.map(({id,heading,location,img,date})=>{
        return <EventCard 
        key={id}
        location={location}
        date={date}
        heading={heading}
        img={img}/>
    })}
  return (
    <div>
        <Navbar/>
      {eventList.length>0?(renderCard()):<p>No events available</p>}
    </div>
  )
}
