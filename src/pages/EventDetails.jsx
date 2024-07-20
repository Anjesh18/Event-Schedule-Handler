
import {useParams } from 'react-router-dom'
import { eventList } from '../utils/EventDataBase'

const EventDetails=()=>{

const {id}=useParams()
const numId=Number(id)

  const filteredEvent=eventList.find(
    eventDetail=>eventDetail.id===numId
  )
  
  return (
    <div>
      <p>{filteredEvent.heading}</p>
      <span><img src={filteredEvent.img}/></span>
      <p><span>{filteredEvent.date.month}</span>
      <span>{filteredEvent.date.year}</span></p>
      <p>{filteredEvent.location}</p>
      <p>{filteredEvent.description}</p>
    </div>
  )
}

export default EventDetails
