import React from 'react'
import './stats.css'
const Stats = ({figure, text}) => (
    <div className='stats_template'>
      <h1>{figure}</h1>
      <p>{text}</p>
    </div>
  )

export default Stats
