import {
  NavLink,
  lazy,
  Suspense,
} from '../contentOfHomePage/shared/ui/reactImports/reactImports'
import { useHeaderContext } from '../../context/HeaderContext'
import {
  Box,
  Container,
  useMediaQuery,
} from '../contentOfHomePage/shared/ui/MUI/mui'

import { animated } from '../contentOfHomePage/shared/ui/reactSpringImports/reactSpringImports'

import umbrellaHeaderLogoSmall from '../../assets/pictures/umbrellaHeaderLogoSmall.webp'
import Additionally from './Additionally'

const HeaderBurgerMenu = lazy(() => import('./HeaderBurgerMenu'))
const SmallScreenHeader = lazy(() => import('./SmallScreenHeader'))
const NavigationForBigScreens = lazy(() => import('./NavigationForBigScreens'))

const Header = () => {
  const { setOpen, headerLogoAnim, isActiveAnimation, handleActiveLinkOne } =
    useHeaderContext()

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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

            {isSmallScreen && (
              <Suspense>
                <NavigationForBigScreens />
              </Suspense>
            )}
          </Box>

          {!isSmallScreen && (
            <Suspense>
              <SmallScreenHeader
                setOpen={setOpen}
                isSmallScreen={isSmallScreen}
              />
            </Suspense>
          )}

          {isSmallScreen && <Additionally isSmallScreen={isSmallScreen} />}
        </Box>

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
