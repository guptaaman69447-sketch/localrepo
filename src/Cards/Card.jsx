import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className='card'>
            <div className='top'>
              <img src="https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
              <button>Save <Bookmark /></button>
            </div>
            <div className='center'>
              <h3>{props.name} <span>5 days ago</span></h3>
              <h2>Senior UI/UX Designer</h2>
              <div className='h4'>
                <h4>Part-Time</h4>
                <h4>Senior-level</h4>
              </div>
            </div>
            <div className='bottom'>
                <div>
                  <h3>{props.pay}</h3>
                  <p>{props.location}</p>
                </div>
                <button className='btn'>Apply now</button>
            </div>
          </div>
  )
}

export default Card