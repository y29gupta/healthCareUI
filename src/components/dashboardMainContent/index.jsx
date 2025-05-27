import React from 'react'
import "./index.css"
import { BellRing, ChevronDown } from 'lucide-react'
import anatomy from "../../assets/anatomy.png"
import StatusCard from '../statuscard'
import { status } from '../../data/healthStatus'
import WeekChart from './WeekChart'

const DashboardContent = () => {
  return (
    <>

      <div className='dashboard' >
        <div>
          <div className="search-container">
            <i className="fas fa-search search-icon"></i>
            <input type="search" className="search-input" placeholder="Search..." />
            <BellRing size={30} style={{
              color: "gray"
            }} />

          </div>

        </div>
        <div className='title'>
          <h3>Dashboard</h3>
          <p>This week <span><ChevronDown size={14} /></span></p>
        </div>
        <div>
          <div className='human-parts'>
            <div className='human-anatomy' >
              <img src={anatomy} alt="" style={{ width: "100%", height: "100%" }} />
            </div>
            <div className='status'>
              {
                status && status.map((item) => (
                  <>
                    <StatusCard item={item} />
                  </>
                ))
              }

            </div>
          </div>
        </div>
        <div>
          <div className='activity'>
            {/* <WeekChar/> */}
            <WeekChart/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardContent