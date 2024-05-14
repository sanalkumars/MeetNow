import CallList from '@/components/CallList'
import React from 'react'

const Upcoming = () => {
  return (
    <section className="flex size-full flex-col gap-5 text-white">
    
        <h2 className="text-3xl font-bold">
            upcoming
        </h2>
       <CallList type ="upcoming"/>
      
  
  </section>
  )
}

export default Upcoming