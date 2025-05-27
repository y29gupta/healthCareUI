import React from 'react'

const Card = (props) => {
    const { appointment, logo, time, doctor, cssClass } = props.item
    const Icon = logo
    return (
        <>

            <div className={`${cssClass}`}>
                <div className='card-header'>
                    <p>{appointment&&appointment}</p>
                    <div className='sideIcon'>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <p>{time}</p>
                <p>{doctor&&doctor}</p>
            </div>

        </>
    )
}

export default Card