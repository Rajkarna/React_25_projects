import React from 'react'
import Accordion from './components/Accordion'
import RandomColor from './components/Randomcolor'
import StarRating from './components/star-rating'

const App = () => {
  return (
    <div>
      {/* Accordion component */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* star rating component */}
      <StarRating noOfStars={10}/>
    </div>
  )
}

export default App