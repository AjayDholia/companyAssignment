import React from 'react'
import './about.css'
import linear from '../../Assets/Images/linear.png'
import howards from '../../Assets/Images/howards.png'
import bank from '../../Assets/Images/bank.png'
import ELLERY from '../../Assets/Images/ELLERY.png'
import GINGER from '../../Assets/Images/GINGER.png'
function About() {
  return (
    <div className='row m-0 p-0 aboutmain'>
      <img src={linear} className='gradian' />
      <div className='aboutspan'><div>About Olvera</div></div>
      <div className='loreamdiv'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</div>
<div className=' row aboutimgediv'>
    <img src={howards} className=' col-3 howards'/>
    <img src={bank} className='col-3 howards'/>
    <img src={ELLERY} className='col-3 howards'/>
    <img src={GINGER} className='col-3 howards'/>
</div>
    </div>
  )
}

export default About
