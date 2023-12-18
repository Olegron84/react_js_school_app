import React from 'react'
import "./clouds.css"

const Clouds = () => {
  return (
    <div className="clouds">
    <img src="/images/clouds_animate/cloud1.png" alt="" style={{"--i":1}}/>
    <img src="/images/clouds_animate/cloud2.png" alt="" style={{"--i":2}} />
    <img src="/images/clouds_animate/cloud3.png"alt="" style={{"--i":3}} />
    <img src="/images/clouds_animate/cloud4.png" alt="" style={{"--i":4}}/>
    <img src="/images/clouds_animate/cloud5.png" alt="" style={{"--i":5}}/>
  </div>
  )
}

export default Clouds
