import {
  Box,
  Divider,
  IconButton,
  SwipeableDrawer,
  Typography,
} from '@mui/material'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { NavLink } from 'react-router-dom'
const HeaderBurgerMenu = ({ open, setOpen, stylesForLinks }) => {
  return (
    <SwipeableDrawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      anchor="top">
      <IconButton onClick={() => setOpen(false)}>
        <MenuOpenIcon />
      </IconButton>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.3rem',
          height: '200px',
        }}>
        <NavLink to="/">
          <Typography
            variant="h5"
            fontSize={{ sm: '1.5rem', xs: '1.3rem' }}
            sx={stylesForLinks}>
            Main
          </Typography>
        </NavLink>
        <NavLink to="/vaccine/science-of-mrna">
          <Typography
            variant="h5"
            fontSize={{ sm: '1.5rem', xs: '1.3rem' }}
            sx={stylesForLinks}>
            Vaccine
          </Typography>
        </NavLink>
        <NavLink to="">
          <Typography
            variant="h5"
            fontSize={{ sm: '1.5rem', xs: '1.3rem' }}
            sx={stylesForLinks}>
            About
          </Typography>
        </NavLink>
      </Box>
    </SwipeableDrawer>
  )
}

export default HeaderBurgerMenu
