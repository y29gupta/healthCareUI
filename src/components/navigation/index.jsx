import React from 'react'
import "./index.css"
import boy from "../../assets/boy.png"

import { BellRing, Plus, Settings } from 'lucide-react';
import { sidemenu, tools } from '../../data/navLinks';



const Sidebar = () => {
  return (
    <>

     
      <div className='sidebarContent'>
        <div className='navLink'>
          <div className='logo'>
            <div>
              <h1><span style={{ color: '#33dddd', fontWeight: "bold" }}>Health</span>care.</h1>
            </div>
          </div>
          <div className='generalMenu'>
            <p>General</p>
            <ul>
              {
                sidemenu && sidemenu.map((item) => {
                  const Icon = item.icon
                  return (
                    <>
                      <li> <Icon className='icon' size={18} /> {item.title}</li>
                    </>
                  )

                })
              }
            </ul>

          </div>
          <div className='tools'>
            <p>Tools</p>
            <ul>
              {
                tools && tools.map((item) => {
                  const Icon = item.icon
                  return (
                    <>
                      <li> <Icon className='icon' size={18} /> {item.title}</li>
                    </>
                  )

                })
              }
            </ul>
          </div>
        </div>
        <div style={{
          // border:"2px solid red"
        }}>
          <div className='setting'>

            <Settings size={18} className='icon' />
            <p >Setting</p>
          </div>
        </div>
      </div>


    </>
  )
}

export default Sidebar