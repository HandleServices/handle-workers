'use client'

import Search from '@/components/Search'
import ServiceTabsFetcher from '@/components/ServiceTabs'

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
      <ServiceTabsFetcher />
    </div>
  )
}

export default Home
