import React from 'react'
import { Box, Container } from '@mui/material'
import AboutVaccine from './aboutVaccine/AboutVaccine'
import SlidesForHomePage from './slidesForHomePage/SlidesForHomePage'

const ContentOfHomePage = () => {
  return (
    <Container>
      <Box sx={{ marginTop: '120px' }}>
        <AboutVaccine />
        <SlidesForHomePage />
      </Box>
    </Container>
  )
}

export default ContentOfHomePage
