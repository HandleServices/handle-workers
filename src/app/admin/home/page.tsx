'use client'

import React from 'react'

import Search from '@/components/Search'
import ServiceTabs from '@/components/ServiceTabs'

const Home = () => {
  const search = (value: string) => {
    console.log(value)
  }

  return (
    <div>
      <Search
        onSearch={search}
        placeholder="Pesquisar"
        className="w-[97.7%] mr-12 mb-10"
      />
      <ServiceTabs />
    </div>
  )
}

export default Home
