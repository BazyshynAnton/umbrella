import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHeaderContext } from '../../context/HeaderContext'
import {
  MenuIcon,
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '../MUIcomponents/MUIcomponents'

import { animated } from '@react-spring/web'

import HeaderBurgerMenu from './HeaderBurgerMenu'
import NavigationForBigScreens from './NavigationForBigScreens'
import Additionally from './Additionally'

import umbrellaHeaderLogoSmall from '../../assets/pictures/umbrellaHeaderLogoSmall.webp'
import LanguageIconHeader from './languageLogic/LanguageIconHeader'

const Header = React.memo(() => {
  const { setOpen, headerLogoAnim, isActiveAnimation, handleActiveLinkOne } =
    useHeaderContext()

  const isSmallScreen = useMediaQuery('(min-width: 900px)')

  return (
    <>
      <AppBar
        component="nav"
        position="sticky"
        sx={{
          background: '#fff',
        }}
      >
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.3rem' }}>
              <NavLink to="/" onClick={handleActiveLinkOne}>
                <Box
                  sx={{
                    height: { md: '75px', sm: '70px', xs: '60px' },
                  }}
                >
                  <animated.img
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      ...(isActiveAnimation ? headerLogoAnim : {}),
                    }}
                    src={umbrellaHeaderLogoSmall}
                    alt="umbrella-logo"
                  />
                </Box>
              </NavLink>

              {isSmallScreen && <NavigationForBigScreens />}
            </Box>

            {!isSmallScreen && (
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <LanguageIconHeader />
                <IconButton onClick={() => setOpen(true)}>
                  <MenuIcon
                    sx={{ color: 'rgb(209, 52, 62)', fontSize: '1.8rem' }}
                  />
                </IconButton>
              </Box>
            )}

            {isSmallScreen && <Additionally isSmallScreen={isSmallScreen} />}
          </Toolbar>

          {!isSmallScreen && <HeaderBurgerMenu />}
        </Container>
      </AppBar>
    </>
  )
})

export default Header
