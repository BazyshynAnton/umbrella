import { NavLink } from '../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { Box, Typography } from '../shared/ui/MUIglobal/muiGlobal'
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
    handleActiveLink,
  } = useHeaderContext()
  return (
    <div style={{ display: 'flex', gap: '1.3rem' }}>
      <NavLink to="/" onClick={() => handleActiveLink(1)}>
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
      <NavLink
        to="/vaccine/science-of-mrna"
        onClick={() => handleActiveLink(2)}
      >
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
      <NavLink to="/about-us" onClick={() => handleActiveLink(3)}>
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
    </div>
  )
}

export default NavigationForBigScreens
