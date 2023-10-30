import React from 'react'
import { Box } from '@mui/material'
import ContentOfHomePage from '../components/contentOfHomePage/ContentOfHomePage'
import Header from '../components/header/Header'

const HomePage = () => {
  return (
    <Box className="wrapper">
      <Header />
      <ContentOfHomePage />
    </Box>
  )
}

export default HomePage
