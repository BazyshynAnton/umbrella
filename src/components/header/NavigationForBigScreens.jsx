import { NavLink } from 'react-router-dom'
import { Box, Typography } from '../MUIcomponents/MUIcomponents'
import { useHeaderContext } from '../../context/HeaderContext'

const NavigationForBigScreens = () => {
  const {
    stylesForLinks,
    stylesForActiveLinks,
    stylesForHoveredNavLinks,
    stylesForActiveHoveredNavLinks,
    isActiveLinkOne,
    isActiveLinkTwo,
    isActiveLinkThree,
    handleActiveLinkOne,
    handleActiveLinkTwo,
    handleActiveLinkThree,
  } = useHeaderContext()
  return (
    <Box sx={{ display: 'flex', gap: '1.3rem' }}>
      <NavLink to="/" onClick={handleActiveLinkOne}>
        <Box
          sx={
            isActiveLinkOne
              ? stylesForActiveHoveredNavLinks
              : stylesForHoveredNavLinks
          }
        >
          <Typography
            variant="h5"
            sx={isActiveLinkOne ? stylesForActiveLinks : stylesForLinks}
          >
            Main
          </Typography>
        </Box>
      </NavLink>
      <NavLink to="/vaccine/science-of-mrna" onClick={handleActiveLinkTwo}>
        <Box
          sx={
            isActiveLinkTwo
              ? stylesForActiveHoveredNavLinks
              : stylesForHoveredNavLinks
          }
        >
          <Typography
            variant="h5"
            sx={isActiveLinkTwo ? stylesForActiveLinks : stylesForLinks}
          >
            Vaccine
          </Typography>
        </Box>
      </NavLink>
      <NavLink to="/about-us" onClick={handleActiveLinkThree}>
        <Box
          sx={
            isActiveLinkThree
              ? stylesForActiveHoveredNavLinks
              : stylesForHoveredNavLinks
          }
        >
          <Typography
            variant="h5"
            sx={isActiveLinkThree ? stylesForActiveLinks : stylesForLinks}
          >
            About Us
          </Typography>
        </Box>
      </NavLink>
    </Box>
  )
}

export default NavigationForBigScreens
