import { Box, Typography } from '@mui/material'

import demoImgOne from '../../../../../pictures/demoImgOne.jfif'
import demoImgTwo from '../../../../../pictures/demoImgTwo.jfif'

const fontStyle = { fontFamily: "'Open Sans', sans-serif" }

const IntroduceToMrna = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Typography variant="body1" sx={{ width: '100%', ...fontStyle }}>
        At Umbrella, we are delivering on the promise of mRNA science to create
        a new generation of transformative medicines for patients.
      </Typography>
      <Box sx={{ width: '100%', height: '350px', position: 'relative' }}>
        <Box
          sx={{
            width: '350px',
            height: '450px',
            position: 'absolute',
            top: '-180px',
            right: '0',
          }}>
          <img
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
            }}
            src={demoImgOne}
            alt="demo-img1"
          />
        </Box>
        <Box
          sx={{
            width: '200px',
            height: '250px',
            position: 'absolute',
            bottom: '90px',
            left: '80px',
          }}>
          <img
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '20px',
            }}
            src={demoImgTwo}
            alt="demo-img2"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default IntroduceToMrna
