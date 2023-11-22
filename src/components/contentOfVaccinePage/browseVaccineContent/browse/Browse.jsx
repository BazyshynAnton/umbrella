import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const styleForPoint = {
  width: '5px',
  height: '5px',
  background: '#000',
  borderRadius: '5px',
}
const styleForTypography = {
  cursor: 'pointer',
  ':hover': { textDecoration: 'underline' },
}

const Browse = () => {
  return (
    <div>
      <Typography variant="body1">browse:</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          gap: '1rem',
          alignItems: 'center',
        }}>
        <NavLink to="/vaccine/science-of-mrna">
          <Typography variant="h5" sx={styleForTypography}>
            The Science of mRNA
          </Typography>
        </NavLink>
        <hr style={styleForPoint} />
        <NavLink to="/vaccine/umbrellas-mrna-platform">
          <Typography variant="h5" sx={styleForTypography}>
            Umbrella's mRNA platform
          </Typography>
        </NavLink>
        <hr style={styleForPoint} />
        <NavLink to="/vaccine/about-mrna">
          <Typography variant="h5" sx={styleForTypography}>
            About mRNA
          </Typography>
        </NavLink>
      </Box>
    </div>
  )
}

export default Browse
