import Header from "./Header"
import Services from "./Services"
import Stripe from "./Stripe"
import Art from "./Art"
import Roadmap from "./Roadmap"
import Query from "./Query"

// import React from 'react'

const index = () => {

  return (
    <div>

      <Header/>
      <Services/>
      <Stripe />
      <Art/>
      <Roadmap/>
      <Query/>

    </div>
  )
}

export default index