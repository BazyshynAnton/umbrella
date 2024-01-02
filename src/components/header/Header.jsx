import {
  NavLink,
  lazy,
  Suspense,
} from '../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { Box, Container, useMediaQuery } from '../shared/ui/MUIglobal/muiGlobal'
import { useHeaderContext } from '../../context/HeaderContext'

import Additionally from './Additionally/Additionally'

import umbrellaHeaderLogoSmall from '../../assets/pictures/umbrellaHeaderLogoSmall.webp'

const HeaderBurgerMenu = lazy(() =>
  import('./SmallScreenHeader/HeaderBurgerMenu')
)
const SmallScreenHeader = lazy(() =>
  import('./SmallScreenHeader/SmallScreenHeader')
)
const NavigationForBigScreens = lazy(() => import('./NavigationForBigScreens'))

const Header = () => {
  const { setOpen, handleActiveLink } = useHeaderContext()

  const isSmallScreen = useMediaQuery('(min-width: 900px)')

  return (
    <Box
      component="nav"
      sx={{
        position: 'sticky',
        top: '0px',
        zIndex: '1000',
        background: '#fff',
        boxShadow: '0px 1px 15px rgba(0, 0, 0, 0.6)',
      }}
    >
      <Container>
        <div
          style={{
            position: '  relative',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0px 24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.3rem' }}>
            <NavLink to="/" onClick={() => handleActiveLink(1)}>
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
                  alt="umbrella-logo"
                />
              </Box>
            </NavLink>

            {isSmallScreen && (
              <Suspense>
                <NavigationForBigScreens />
              </Suspense>
            )}
          </div>

          {!isSmallScreen && (
            <Suspense>
              <SmallScreenHeader
                setOpen={setOpen}
                isSmallScreen={isSmallScreen}
              />
            </Suspense>
          )}

          {isSmallScreen && <Additionally isSmallScreen={isSmallScreen} />}
        </div>

        {!isSmallScreen && (
          <Suspense>
            <HeaderBurgerMenu />
          </Suspense>
        )}
      </Container>
    </Box>
  )
}

export default Header
