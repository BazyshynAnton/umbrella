import React from 'react'
import { Box } from '@mui/material'
import ContentOfHomePage from '../components/contentOfHomePage/ContentOfHomePage'
import Header from '../components/header/Header'

const HomePage = () => {
  return (
    <div className="wrapper">
      <Header />
      <ContentOfHomePage />
    </div>
  )
}

export default HomePage
