import { Box, Typography } from '@mui/material'

import { colorForImportant } from '../../../../../context/variables'
import { fontStyleOpenSans } from '../../../../../context/variables'

import femaleScientist from '../../../../../pictures/femaleScientist.jpg'

const MrnaIsTransformational = () => {
  return (
    <Box
      sx={{
        mb: '50px',
        mt: { md: '100px', sm: '70px' },
        display: 'flex',

        flexDirection: {
          md: 'row',
          xs: 'column',
        },
      }}>
      <Box
        sx={{
          width: '100%',
        }}>
        <Box
          sx={{
            width: '100%',
            height: '300px',
          }}>
          <img
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
            }}
            src={femaleScientist}
            alt="scientists"
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            mt: '20px',
            fontSize: { sm: '1.5rem', xs: '1.3rem' },
            fontWeight: '600',
            ...fontStyleOpenSans,
          }}>
          mRNA is transformational
        </Typography>
        <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
          With our technology, we are{' '}
          <b style={colorForImportant}>revolutionizing</b> medicine and
          developing potential mRNA treatments in shorter periods of time for
          previously{' '}
          <b style={colorForImportant}>untreatable and emerging diseases</b>.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          mt: { md: '0px', xs: '30px' },
          pl: { md: '30px' },
          display: { xs: 'flex' },
          flexDirection: { xs: 'column' },
          justifyContent: { md: 'center', xs: 'flex-start' },
        }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: { sm: '1.5rem', xs: '1.3rem' },
            fontWeight: '600',
            ...fontStyleOpenSans,
          }}>
          We can positively impact the lives of millions of people
        </Typography>
        <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
          Our mRNA platform, with its{' '}
          <b style={colorForImportant}>speed, scale, and flexibility</b>, is
          uniquely suited to tackle current and emerging pathogens that threaten
          global health.
        </Typography>
      </Box>
    </Box>
  )
}

export default MrnaIsTransformational
