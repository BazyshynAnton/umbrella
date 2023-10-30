import React from 'react'
import { Box, Container } from '@mui/material'
import AboutVaccine from './aboutVaccine/AboutVaccine'

const ContentOfHomePage = () => {
  return (
    <Container>
      <Box sx={{ marginTop: '120px' }}>
        <AboutVaccine />
      </Box>
    </Container>
  )
}

export default ContentOfHomePage
