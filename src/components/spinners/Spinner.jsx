import { Box, Typography } from '../shared/ui/MUIglobal/muiGlobal'
import {
  animated,
  useSpring,
} from '../shared/ui/reactSpringImportsGlobal/reactSpringImportsGlobal'
import { fontStyleOpenSans } from '../shared/ui/fontStyles/openSans'

import umbrellaHeaderLogoSmall from '../../assets/pictures/umbrellaHeaderLogoSmall.webp'

const Spinner = () => {
  const rotation = useSpring({
    loop: true,
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    config: { duration: 2000 },
  })

  return (
    <Box
      sx={{
        minWidth: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <animated.img
        style={{ width: '80px', height: '100%', ...rotation }}
        src={umbrellaHeaderLogoSmall}
        alt="spinner"
      />
      <Typography
        sx={{
          fontWeight: '500',
          fontSize: { sm: '1.5rem', xs: '1.3rem' },
          color: '#053f68',
          ...fontStyleOpenSans,
        }}
      >
        Umbrella
      </Typography>
    </Box>
  )
}

export default Spinner
