import { Box } from '@mui/material'
import bgMrna from '../../../../pictures/bgMrna.png'

const ReusableComponentMrnaPicture = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: { lg: '-500px', md: '-300px', sm: '-200px', xs: '-150px' },
        top: { md: '30px', sm: '80px', xs: '150px' },
        width: '100%',
        height: '300px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${bgMrna})`,
        zIndex: '-1',
      }}
    />
  )
}

export default ReusableComponentMrnaPicture
