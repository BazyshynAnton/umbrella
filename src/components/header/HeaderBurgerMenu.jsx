import { NavLink } from 'react-router-dom'
import { useHeaderContext } from '../../context/HeaderContext'
import {
  Box,
  Typography,
  Divider,
  IconButton,
  SwipeableDrawer,
  MenuOpenIcon,
  AutoStoriesRoundedIcon,
  HomeRoundedIcon,
} from '../MUIcomponents/MUIcomponents'

import Additionally from './Additionally'

import umbrellaHeaderLogoSmall from '../../pictures/umbrellaHeaderLogoSmall.png'

const styleForLinkBlocks = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.4rem',
}

const HeaderBurgerMenu = () => {
  const {
    open,
    setOpen,
    handleActiveLinkOne,
    handleActiveLinkTwo,
    handleActiveLinkThree,
    stylesForLinks,
    stylesForActiveLinks,
    isActiveLinkOne,
    isActiveLinkTwo,
    isActiveLinkThree,
  } = useHeaderContext()
  const handleTouchLInk = () => {
    setOpen(false)
    window.scrollTo(0, 0)
  }
  return (
    <SwipeableDrawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      anchor="top"
    >
      <IconButton
        onClick={handleTouchLInk}
        sx={{
          p: '0px 48px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NavLink to="/">
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
        <MenuOpenIcon sx={{ color: 'rgb(209, 52, 62)', fontSize: '2rem' }} />
      </IconButton>
      <Divider sx={{ background: 'rgba(5, 63, 104, 0.5)' }} />
      <Box
        sx={{
          p: '0px 48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '1.3rem',
          height: '200px',
        }}
      >
        <NavLink to="/" onClick={handleActiveLinkOne}>
          <Box sx={styleForLinkBlocks}>
            <HomeRoundedIcon
              sx={isActiveLinkOne ? stylesForActiveLinks : stylesForLinks}
            />
            <Typography
              variant="h5"
              sx={isActiveLinkOne ? stylesForActiveLinks : stylesForLinks}
            >
              Main
            </Typography>
          </Box>
        </NavLink>
        <NavLink to="/vaccine/science-of-mrna" onClick={handleActiveLinkTwo}>
          <Box sx={styleForLinkBlocks}>
            <AutoStoriesRoundedIcon
              sx={isActiveLinkTwo ? stylesForActiveLinks : stylesForLinks}
            />
            <Typography
              variant="h5"
              fontSize={{ sm: '1.5rem', xs: '1.3rem' }}
              sx={isActiveLinkTwo ? stylesForActiveLinks : stylesForLinks}
            >
              Vaccine
            </Typography>
          </Box>
        </NavLink>
        <NavLink to="/about-us" onClick={handleActiveLinkThree}>
          <Box sx={styleForLinkBlocks}>
            <AutoStoriesRoundedIcon
              sx={isActiveLinkThree ? stylesForActiveLinks : stylesForLinks}
            />
            <Typography
              variant="h5"
              sx={isActiveLinkThree ? stylesForActiveLinks : stylesForLinks}
            >
              About Us
            </Typography>
          </Box>
        </NavLink>
      </Box>
      <Additionally />
    </SwipeableDrawer>
  )
}

export default HeaderBurgerMenu
