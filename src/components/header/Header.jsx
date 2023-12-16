import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@mui/material'

import { useHeaderContext } from '../../context/HeaderContext'

import HeaderBurgerMenu from './HeaderBurgerMenu'
import NavigationForBigScreens from './NavigationForBigScreens'
import Additionally from './Additionally'
import MenuIcon from '@mui/icons-material/Menu'

import umbrellaHeaderLogoSmall from '../../pictures/umbrellaHeaderLogoSmall.png'

const Header = () => {
  const [open, setOpen] = useState(false)

  const isSmallScreen = useMediaQuery('(min-width: 600px)')

  const { stylesForLinks } = useHeaderContext()

  return (
    <>
      <AppBar
        component='nav'
        position='sticky'
        sx={{
          background: '#fff',
        }}
      >
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.3rem' }}>
              <NavLink to='/'>
                {isSmallScreen ? (
                  <Box
                    sx={{
                      height: { md: '75px', sm: '70px', xs: '60px' },
                    }}
                  >
                    <img
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                      }}
                      src={umbrellaHeaderLogoSmall}
                      alt='umbrella-logo'
                    />
                  </Box>
                ) : (
                  <Box sx={{ height: { md: '100px', sm: '70px', xs: '60px' } }}>
                    <img
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                      }}
                      src={umbrellaHeaderLogoSmall}
                      alt='umbrella-logo'
                    />
                  </Box>
                )}
              </NavLink>

              {isSmallScreen ? (
                <NavigationForBigScreens />
              ) : (
                <IconButton onClick={() => setOpen(true)}>
                  <MenuIcon sx={{ color: '#053f68' }} />
                </IconButton>
              )}
            </Box>
            <Additionally />
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
    </>
  )
}

export default Header
