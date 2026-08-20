import Header from '@/components/About/Header'
import Services from '@/components/Home/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header small='What we do' text="Our Services" />
      <Services notitle/>
    </div>
  )
}

export default page