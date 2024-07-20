import React from 'react'

import EventCard from './EventCard'
import { eventList } from '../utils/EventDataBase'

export default function SearchEventList({monthYear}) {
    const {selectedMonth,selectedYear}=monthYear
    const filteredEvent=eventList.filter((e)=>{
        return( 
            e.date.month==selectedMonth &&
        e.date.year==selectedYear)
    })
    const filterCard=()=>{
        return filteredEvent.map(({id,date,location,heading,img})=>{
         return (
            <EventCard
            key={id}
            date={date}
            location={location}
            heading={heading}
            img={img}
            />
         )
        })
    }
  return (
    <div>
      {filteredEvent.length>0?(filterCard()):<p>No events on this date</p>}
    </div>
  )
}
