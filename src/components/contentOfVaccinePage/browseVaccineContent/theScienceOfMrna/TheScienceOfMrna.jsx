import { Box, Typography } from '@mui/material'
import RevolutionizeMedicine from './revolutionizeMedicine/RevolutionizeMedicine'
import IntroduceToMrna from './introduceToMrna/IntroduceToMrna'
import YouAreMadeOfProteins from './youAreMadeOfProteins/YouAreMadeOfProteins'
import SwiperProteinFactories from './swiperProteinFactories/SwiperProteinFactories'

import bgMrna from '../../../../pictures/bgMrna.png'

const fontStyle = { fontFamily: "'Open Sans', sans-serif" }
const colorForImportant = { color: '#FF0000' }

const TheScienceOfMrna = () => {
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
          left: '-500px',
          width: '100%',
          height: '300px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${bgMrna})`,
          zIndex: '-1',
        }}
      />
      <RevolutionizeMedicine />
      <YouAreMadeOfProteins />

      <Box
        sx={{
          mt: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="h3" sx={{ fontWeight: '600', ...fontStyle }}>
          Your cells are protein factories
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', ...fontStyle }}>
          Proteins are made in a process called{' '}
          <b style={colorForImportant}>protein synthesis</b>.
          <br /> And that's where mRNA comes in.
        </Typography>

        <SwiperProteinFactories />
      </Box>
    </Box>
  )
}

export default TheScienceOfMrna
