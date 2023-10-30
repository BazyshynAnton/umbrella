import { Box } from '@mui/material'
import React from 'react'
import og from '../../../pictures/og.png'
const AboutVaccine = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', position: 'relative' }}>
      <Box sx={{ width: '100%' }}>
        <img
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          src={og}
          alt="qwe"
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '-20px',
          right: '0',
          height: '40px',
          width: '60%',
          background: '#c3221c',

          '::before': {
            content: '""',
            position: 'absolute',
            left: '-20px',
            background: '#c3221c',
            transform: 'skewX(-35deg)',
            width: '40px',
            height: '100%',
            zIndex: '90',
          },
        }}></Box>
    </Box>
  )
}

export default AboutVaccine
