import React from 'react'
import './index.css'

const StatusCard = (props) => {
    const {image,title,date,status}=props.item
    return (
        
        <div className='statusCard'>
            <div>
                <div className='bodyImage'>

                    <img src={image} alt="" />
                    <p>{title}</p>
                </div>
            </div>
            <p>Date: {date}</p>
            <div>
                <div className="progress-container">
                    <div style={{backgroundColor:status}} className="progress-bar" ></div>
                </div>
            </div>
        </div>
    )
}

export default StatusCard