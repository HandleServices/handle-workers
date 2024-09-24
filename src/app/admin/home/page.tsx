'use client'

import OrderTabsFetcher from '@/components/OrderTabs/components/OrderTabsFetcher'
import Search from '@/components/Search'

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
      <OrderTabsFetcher />
    </div>
  )
}

export default Home
