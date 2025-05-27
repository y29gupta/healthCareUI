import React from 'react'
import Card from './Card'
import { appointment } from '../../data/upcomingAppointment'
import './index.css'

const AppointmentCard = (props) => {
  return (
    <div className='card-container'>
        {
            props&&props.item.map((item)=>(
                <Card item={item}/>
            ))
        }
    </div>
  )
}

export default AppointmentCard