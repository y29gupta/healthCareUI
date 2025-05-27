import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/navigation'
import DashboardContent from './components/dashboardMainContent'
import boy from "./assets/boy.png"
import CalenderView from './components/calender'
import { Plus } from 'lucide-react'
import AppointmentCard from './components/appointmentCard'
import Card from './components/appointmentCard/Card'
import { appointment, otherSchedule, upcomingSchedule } from './data/upcomingAppointment'

function App() {


  return (
    <>
      <section style={{
        width: "98%",
        margin: "auto ",
        backgroundColor: "white",
        borderRadius: "8px"

      }}>
          {/* main container  conatiner sidebar dashboard and schedule calender components*/}
        <div className='container'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <div className='dashboardOverview'>
            <DashboardContent />
          </div>
          <div className='scheduleContent'>
            <div className='schedules'>

              <div className='profile'>
                <div className='avatar'>
                  <img src={boy} alt="" />
                </div><div className='action' >
                  <Plus />
                </div>
              </div>
              <div>
                <CalenderView />
              </div>
              <div>
                <AppointmentCard item={appointment}/>
              </div>
            </div>
            <div className='upcomingScheduleCard'>
              <h4>The Upcoming Schedule</h4>
              <div className='top'>

                <p ><small>On Thursday</small></p>
                    <AppointmentCard item={upcomingSchedule}/>
              </div>
              <div className='bottom'>
                  <p ><small>On Saturday</small></p>
                    <AppointmentCard item={otherSchedule}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
