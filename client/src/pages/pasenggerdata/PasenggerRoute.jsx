import React from 'react'
import PasenggerData from './PasenggerData'
import Navigation from '../../components/navbar/NavigationBar'

const PasenggerRoute = () => {
  return (
    <>
    <div className=""><Navigation/></div>
    <div><PasenggerData/></div>
    </>
  )
}

export default PasenggerRoute