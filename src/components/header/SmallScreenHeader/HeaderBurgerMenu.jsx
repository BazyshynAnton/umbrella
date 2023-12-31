import {
  NavLink,
  LazyLoadImage,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { Box, Typography } from '../../shared/ui/MUIglobal/muiGlobal'
import { useHeaderContext } from '../../../context/HeaderContext.jsx'
import { useTranslation } from '../../shared/translations/translationsImports.js'

import SwipeableDrawer from '@mui/material/SwipeableDrawer'

import Additionally from '../Additionally/Additionally.jsx'

import umbrellaHeaderLogoSmall from '../../../assets/pictures/umbrellaHeaderLogoSmall.webp'
import menuIcon from '../../../assets/pictures/app-icons/menuIcon.webp'
import homeIconActive from '../../../assets/pictures/app-icons/homeIconActive.webp'
import homeIconDisabled from '../../../assets/pictures/app-icons/homeIconDisabled.webp'
import bookIconActive from '../../../assets/pictures/app-icons/bookIconActive.webp'
import bookIconDisabled from '../../../assets/pictures/app-icons/bookIconDisabled.webp'

const styleForLinkBlocks = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
}

const HeaderBurgerMenu = () => {
  const {
    open,
    setOpen,
    isActiveLinkOne,
    isActiveLinkTwo,
    isActiveLinkThree,
    handleActiveLink,
    stylesForLinks,
    stylesForActiveLinks,
  } = useHeaderContext()
  const handleTouchLInk = () => {
    setOpen(false)
    window.scrollTo(0, 0)
  }

  const { t } = useTranslation()

  return (
    <SwipeableDrawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      anchor="top"
    >
      <button
        onClick={handleTouchLInk}
        style={{
          padding: '0px 48px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NavLink to="/" onClick={() => handleActiveLink(1)}>
          <Box
            sx={{
              height: { md: '75px', sm: '70px', xs: '60px' },
            }}
          >
            <LazyLoadImage
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
        <LazyLoadImage
          style={{ width: '30px', height: '30px', cursor: 'pointer' }}
          src={menuIcon}
          alt="menu-icon"
        />
      </button>
      <hr
        style={{
          height: '1px',
          width: '100%',
          background: 'rgba(5, 63, 104, 0.5)',
        }}
      />
      <div
        style={{
          padding: '0px 48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '1.3rem',
          height: '200px',
        }}
      >
        <NavLink to="/" onClick={() => handleActiveLink(1)}>
          <Box sx={styleForLinkBlocks}>
            {isActiveLinkOne ? (
              <LazyLoadImage
                style={{ width: '25px', height: '25px' }}
                src={homeIconActive}
                alt="home"
              />
            ) : (
              <LazyLoadImage
                style={{ width: '25px', height: '25px' }}
                src={homeIconDisabled}
                alt="home"
              />
            )}
            <Typography
              variant="h5"
              sx={isActiveLinkOne ? stylesForActiveLinks : stylesForLinks}
            >
              {t('Main')}
            </Typography>
          </Box>
        </NavLink>
        <NavLink
          to="/vaccine/science-of-mrna"
          onClick={() => handleActiveLink(2)}
        >
          <Box sx={styleForLinkBlocks}>
            {isActiveLinkTwo ? (
              <LazyLoadImage
                style={{ width: '25px', height: '20px' }}
                src={bookIconActive}
                alt="home"
              />
            ) : (
              <LazyLoadImage
                style={{ width: '25px', height: '20px' }}
                src={bookIconDisabled}
                alt="home"
              />
            )}
            <Typography
              variant="h5"
              fontSize={{ sm: '1.5rem', xs: '1.3rem' }}
              sx={isActiveLinkTwo ? stylesForActiveLinks : stylesForLinks}
            >
              {t('Vaccine')}
            </Typography>
          </Box>
        </NavLink>
        <NavLink to="/about-us" onClick={() => handleActiveLink(3)}>
          <Box sx={styleForLinkBlocks}>
            {isActiveLinkThree ? (
              <LazyLoadImage
                style={{ width: '25px', height: '20px' }}
                src={bookIconActive}
                alt="home"
              />
            ) : (
              <LazyLoadImage
                style={{ width: '25px', height: '20px' }}
                src={bookIconDisabled}
                alt="home"
              />
            )}
            <Typography
              variant="h5"
              sx={isActiveLinkThree ? stylesForActiveLinks : stylesForLinks}
            >
              {t('About Us')}
            </Typography>
          </Box>
        </NavLink>
      </div>
      <Additionally />
    </SwipeableDrawer>
  )
}

export default HeaderBurgerMenu
