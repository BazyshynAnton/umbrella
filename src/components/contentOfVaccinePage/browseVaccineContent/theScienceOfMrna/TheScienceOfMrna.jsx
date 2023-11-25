import { Box, Typography, useMediaQuery } from '@mui/material'

import { colorForImportant } from '../../../../context/variables'
import { fontStyleOpenSans } from '../../../../context/variables'

import RevolutionizeMedicine from './revolutionizeMedicine/RevolutionizeMedicine'
import IntroduceToMrna from './introduceToMrna/IntroduceToMrna'
import YouAreMadeOfProteins from './youAreMadeOfProteins/YouAreMadeOfProteins'
import SwiperProteinFactories from './swiperProteinFactories/SwiperProteinFactories'

import ReusableComponentMrnaPicture from '../reusableComponentMrnaPicture/ReusableComponentMrnaPicture'

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
      <ReusableComponentMrnaPicture />
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
              ...fontStyleOpenSans,
            }}>
            Your cells are protein factories
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: 'center', ...fontStyleOpenSans }}>
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
