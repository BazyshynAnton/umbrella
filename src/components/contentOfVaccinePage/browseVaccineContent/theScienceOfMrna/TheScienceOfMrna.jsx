import { Box, Typography, useMediaQuery } from '@mui/material'
import RevolutionizeMedicine from './revolutionizeMedicine/RevolutionizeMedicine'
import IntroduceToMrna from './introduceToMrna/IntroduceToMrna'
import YouAreMadeOfProteins from './youAreMadeOfProteins/YouAreMadeOfProteins'
import SwiperProteinFactories from './swiperProteinFactories/SwiperProteinFactories'

import bgMrna from '../../../../pictures/bgMrna.png'

const fontStyle = { fontFamily: "'Open Sans', sans-serif" }
const colorForImportant = { color: '#FF0000' }

const TheScienceOfMrna = () => {
  const isSmallScreen = useMediaQuery('(min-width: 900px)')
  return (
    <Box
      sx={{
        mt: '20px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
      <IntroduceToMrna />
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
      <RevolutionizeMedicine />
      <YouAreMadeOfProteins />

      {isSmallScreen && (
        <Box
          sx={{
            mt: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: '3rem',
              fontWeight: '600',
              ...fontStyle,
            }}>
            Your cells are protein factories
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', ...fontStyle }}>
            Proteins are made in a process called{' '}
            <b style={colorForImportant}>protein synthesis</b>.
            <br /> And that's where mRNA comes in.
          </Typography>

          <SwiperProteinFactories />
        </Box>
      )}
    </Box>
  )
}

export default TheScienceOfMrna
