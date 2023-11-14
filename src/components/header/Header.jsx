import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

import umbrellaHeaderLogo from '../../pictures/umbrellaHeaderLogo.png'

const stylesForLinks = {
  color: '#363435',
  ':hover': {
    textDecoration: 'underline',
  },
}

const Header = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        background: '#fff',
      }}>
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavLink to="/">
            <Box sx={{ height: '100px' }}>
              <img
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                src={umbrellaHeaderLogo}
                alt="umbrella-logo"
              />
            </Box>
          </NavLink>

          <Box sx={{ display: 'flex', gap: '1.3rem' }}>
            <NavLink to="/">
              <Typography variant="h5" sx={stylesForLinks}>
                Main
              </Typography>
            </NavLink>
            <NavLink to="">
              <Typography variant="h5" sx={stylesForLinks}>
                Vaccine
              </Typography>
            </NavLink>
            <NavLink to="">
              <Typography variant="h5" sx={stylesForLinks}>
                About
              </Typography>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
