import React from 'react'
import { Box, Container } from '@mui/material'
import AboutVaccine from './aboutVaccine/AboutVaccine'
import SlidesForHomePage from './slidesForHomePage/SlidesForHomePage'
import CareersAtUmbrella from './careersAtUmbrella/CareersAtUmbrella'
import ConnectWithUs from './connectWithUs/ConnectWithUs'

const ContentOfHomePage = () => {
  return (
    <>
      <Container>
        <Box sx={{ marginTop: '120px' }}>
          <AboutVaccine />
        </Box>
        <SlidesForHomePage />
        <CareersAtUmbrella />
        <ConnectWithUs />
      </Container>
    </>
  )
}

export default ContentOfHomePage
