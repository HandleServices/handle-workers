'use client'
import React, { useState } from 'react'

import DialogButton from '@/components/Dialog/components/DialogButton'
import Search from '@/components/Search'
import WorksList from '@/components/WorksList/WorksList'
import { WorkOrder } from '@/types/models/Order.model'

const Services = () => {
  const search = (value: string) => {
    console.log(value)
  }
  const [isSendingData, setIsSendingData] = useState(false)
  const [dialogIsOpen, setDialogIsOpen] = useState(false)
  const [workList, setWorkList] = React.useState<WorkOrder[]>([
    {
      id: 1,
      customer: {
        name: 'Alice Johnson',
        address: '123 Maple St, Springfield, IL',
      },
      value: 500,
      name: 'Website Redesign',
      description: 'Complete overhaul of the company website.',
      estimatedTime: '40 hours',
      enable: true,
    },
    {
      id: 2,
      customer: { name: 'Bob Smith', address: '456 Oak St, Metropolis, NY' },
      value: 300,
      name: 'SEO Optimization',
      description: 'Improve search engine ranking and visibility.',
      estimatedTime: '20 hours',
      enable: true,
    },
    {
      id: 3,
      customer: { name: 'Charlie Brown', address: '789 Pine St, Gotham, NJ' },
      value: 150,
      name: 'Social Media Management',
      description: 'Manage social media accounts and content.',
      estimatedTime: '15 hours',
      enable: false,
    },
    {
      id: 4,
      customer: { name: 'Diana Prince', address: '101 Elm St, Themyscira, DC' },
      value: 700,
      name: 'Mobile App Development',
      description: 'Develop a mobile application for iOS and Android.',
      estimatedTime: '60 hours',
      enable: true,
    },
    {
      id: 5,
      customer: {
        name: 'Edward Norton',
        address: '202 Birch St, Star City, CA',
      },
      value: 250,
      name: 'Graphic Design',
      description: 'Create marketing materials and graphics.',
      estimatedTime: '25 hours',
      enable: true,
    },
    {
      id: 6,
      customer: { name: 'Fiona Glenanne', address: '303 Cedar St, Miami, FL' },
      value: 180,
      name: 'Content Writing',
      description: 'Write blog posts and website content.',
      estimatedTime: '30 hours',
      enable: true,
    },
    {
      id: 7,
      customer: { name: 'George Harrison', address: '404 Fir St, London, UK' },
      value: 400,
      name: 'Email Marketing Campaign',
      description: 'Design and execute an email marketing campaign.',
      estimatedTime: '35 hours',
      enable: false,
    },
    {
      id: 8,
      customer: {
        name: 'Hannah Montana',
        address: '505 Spruce St, Nashville, TN',
      },
      value: 220,
      name: 'Photography',
      description: 'Professional photography for product catalog.',
      estimatedTime: '18 hours',
      enable: true,
    },
    {
      id: 9,
      customer: {
        name: 'Iris West',
        address: '606 Poplar St, Central City, KS',
      },
      value: 350,
      name: 'Database Management',
      description: 'Setup and manage a customer database system.',
      estimatedTime: '45 hours',
      enable: true,
    },
    {
      id: 10,
      customer: { name: 'John Doe', address: '707 Willow St, Gotham, NJ' },
      value: 600,
      name: 'Consulting Services',
      description: 'Business consulting and strategy development.',
      estimatedTime: '50 hours',
      enable: false,
    },
  ])

  return (
    <div className="h-full w-full">
      <Search
        onSearch={search}
        placeholder="Pesquisar"
        className="w-5/6 mr-12 mb-10"
      />

      <DialogButton
        className="ml-2 text-start select-none rounded-md"
        buttonClassName="w-30"
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        isSendingData={isSendingData}
        buttonTitle="+ Novo Serviço"
      >
        <div></div>
      </DialogButton>
      <WorksList worksList={workList} minHeight={400} />
    </div>
  )
}

export default Services
