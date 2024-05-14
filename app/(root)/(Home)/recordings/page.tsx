import CallList from '@/components/CallList'
import React from 'react'

const recordings = () => {
  return (
    <section className="flex size-full flex-col gap-5 text-white">
    
        <h2 className="text-3xl font-bold">
            recordings
        </h2>
      <CallList  type='recordings'/>
  
  </section>
  )
}

export default recordings