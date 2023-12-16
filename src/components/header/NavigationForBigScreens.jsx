import { Box, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { useHeaderContext } from '../../context/HeaderContext'

const NavigationForBigScreens = () => {
  const { stylesForLinks, stylesForHoveredNavLinks } = useHeaderContext()
  return (
    <Box sx={{ display: 'flex', gap: '1.3rem' }}>
      <NavLink to='/' onClick={() => window.scrollTo(0, 0)}>
        <Box sx={stylesForHoveredNavLinks}>
          <Typography variant='h5' sx={stylesForLinks}>
            Main
          </Typography>
        </Box>
      </NavLink>
      <NavLink
        to='/vaccine/science-of-mrna'
        onClick={() => window.scrollTo(0, 0)}
      >
        <Box sx={stylesForHoveredNavLinks}>
          <Typography variant='h5' sx={stylesForLinks}>
            Vaccine
          </Typography>
        </Box>
      </NavLink>
      <NavLink to='/about-us' onClick={() => window.scrollTo(0, 0)}>
        <Box sx={stylesForHoveredNavLinks}>
          <Typography variant='h5' sx={stylesForLinks}>
            About
          </Typography>
        </Box>
      </NavLink>
    </Box>
  )
}

export default NavigationForBigScreens
