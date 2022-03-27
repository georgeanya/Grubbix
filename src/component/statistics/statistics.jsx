import React from 'react'
import Stats from '../statsTemplate/stats'
import './statistics.css'

const Statistics = () => {
  return (
    <div className='statistics_template'>
      <Stats figure='488' text='Orders delivered'/>
      <Stats figure='4.8' text='Google score'/>
      <Stats figure='98%' text='Natural product we use'/>
    </div>
  )
}

export default Statistics
