import React from 'react'
import './index.css'
import { calenderAppointments } from '../../data/calenderAppointment'

const CalenderView = () => {
    return (
        <div className='calender-container'>
            <div className='heading'>
                <h4>October 2025</h4>
                <div className="arrows">
                    &#8592; &#8594;
                </div>
            </div>
            <div>
                <div className='calender-week'>
                    {
                        calenderAppointments && calenderAppointments.flatMap((item) => {
                            const selected=item.selected
                            return (
                                <div className={`${selected?"calender-map":""}`} >

                                    <div className="day">{item.day}</div>
                                    <div className='dates'>

                                        <div className="date">{item.date}</div>
                                        <div className="times">
                                            {item.time.map((time,index) => (
                                                <p className={`${selected&&index===1 ?"selectedTime":""} time`}>{time}</p>

                                            ))}

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                   
                </div>


            </div>
        </div>
    )
}

export default CalenderView