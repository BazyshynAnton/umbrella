import { NavLink } from '../contentOfHomePage/shared/ui/reactImports/reactImports'
import { useHeaderContext } from '../../context/HeaderContext'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useMediaQuery,
} from '../contentOfHomePage/shared/ui/MUI/mui'

import { animated } from '../contentOfHomePage/shared/ui/reactSpringImports/reactSpringImports'

import HeaderBurgerMenu from './HeaderBurgerMenu'
import NavigationForBigScreens from './NavigationForBigScreens'
import Additionally from './Additionally'
import LanguageIconHeader from './languageLogic/LanguageIconHeader'

import menuIcon from '../../assets/pictures/app-icons/menuIcon.webp'
import umbrellaHeaderLogoSmall from '../../assets/pictures/umbrellaHeaderLogoSmall.webp'

const Header = () => {
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
                <button
                  style={{ cursor: 'pointer' }}
                  onClick={() => setOpen(true)}
                >
                  <img
                    style={{ width: '30px', height: '30px' }}
                    src={menuIcon}
                    alt="menu-icon"
                  />
                </button>
              </Box>
            )}

            {isSmallScreen && <Additionally isSmallScreen={isSmallScreen} />}
          </Toolbar>

          {!isSmallScreen && <HeaderBurgerMenu />}
        </Container>
      </AppBar>
    </>
  )
}

export default Header
