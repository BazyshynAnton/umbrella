import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import umbrellaHeaderLogo from '../../pictures/umbrellaHeaderLogo.png'
import umbrellaHeaderLogoSmall from '../../pictures/umbrellaHeaderLogoSmall.png'

import MenuIcon from '@mui/icons-material/Menu'
import HeaderBurgerMenu from './HeaderBurgerMenu'

const stylesForLinks = {
  color: '#363435',
  ':hover': {
    textDecoration: 'underline',
  },
}

const Header = () => {
  const [open, setOpen] = useState(false)

  const isSmallScreen = useMediaQuery('(min-width: 600px)')

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
            {isSmallScreen ? (
              <Box sx={{ height: { md: '100px', sm: '70px', xs: '60px' } }}>
                <img
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  src={umbrellaHeaderLogo}
                  alt="umbrella-logo"
                />
              </Box>
            ) : (
              <Box sx={{ height: { md: '100px', sm: '70px', xs: '60px' } }}>
                <img
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  src={umbrellaHeaderLogoSmall}
                  alt="umbrella-logo"
                />
              </Box>
            )}
          </NavLink>

          {isSmallScreen ? (
            <Box sx={{ display: 'flex', gap: '1.3rem' }}>
              <NavLink to="/">
                <Typography
                  variant="h5"
                  fontSize={{ sm: '1.5rem', xs: '1.3rem' }}
                  sx={stylesForLinks}>
                  Main
                </Typography>
              </NavLink>
              <NavLink to="">
                <Typography
                  variant="h5"
                  fontSize={{ sm: '1.5rem', xs: '1.3rem' }}
                  sx={stylesForLinks}>
                  Vaccine
                </Typography>
              </NavLink>
              <NavLink to="">
                <Typography
                  variant="h5"
                  fontSize={{ sm: '1.5rem', xs: '1.3rem' }}
                  sx={stylesForLinks}>
                  About
                </Typography>
              </NavLink>
            </Box>
          ) : (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

        {!isSmallScreen && (
          <HeaderBurgerMenu
            open={open}
            setOpen={setOpen}
            stylesForLinks={stylesForLinks}
          />
        )}
      </Container>
    </AppBar>
  )
}

export default Header
