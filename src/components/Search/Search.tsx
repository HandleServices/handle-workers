import * as Separator from '@radix-ui/react-separator'
import React, { forwardRef, InputHTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import SearchIcon from './assets/SearchIcon'

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
}

const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ className, placeholder, onSearch }, ref) => {
    const [search, setSearch] = useState('')

    const handleSearchClick = () => {
      if (onSearch) {
        onSearch(search)
      }
    }

    return (
      <div className={twMerge('grid grid-cols-[0.95fr_0.05fr]', className)}>
        <input
          className="bg-handle-background-intern p-2 h-8 border-handle-gray-icons border-1.5 border-r-0 rounded-md rounded-r-none font-thin focus:outline-none"
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          ref={ref}
        />
        <div className="flex border-y-handle-gray-icons border-y-1.5 gap-2 border-r-handle-gray-icons border-r-1.5 rounded-r-md p-2 items-center justify-center h-8">
          <Separator.Root className="h-5 w-[0.5px] bg-handle-gray-icons" />
          <SearchIcon
            onClick={handleSearchClick}
            width={16}
            height={16}
            className="ml-2 cursor-pointer"
          />
        </div>
      </div>
    )
  },
)

Search.displayName = 'Search'

export { Search }
