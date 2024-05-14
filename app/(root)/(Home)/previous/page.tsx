import CallList from '@/components/CallList'
import React from 'react'

const previous = () => {
  return (
    <section className="flex size-full flex-col gap-5 text-white">
    
    <h2 className="text-3xl font-bold">
        Previous Meetings
    </h2>
  <CallList type='ended'/>

</section>
  )
}

export default previous