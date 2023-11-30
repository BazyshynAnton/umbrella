import { Box, Typography } from '@mui/material'

import { fontStyleOpenSans } from '../../../../../context/variables'

import scienceInTheLab from '../../../../../pictures/scienceInTheLab.jpeg'

const RevolutionizeMedicine = () => {
  return (
    <Box
      sx={{
        mt: { md: '0px', sm: '70px' },
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
            src={scienceInTheLab}
            alt="scientists"
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            color: '#376586',
            mt: '20px',
            fontSize: { sm: '1.5rem', xs: '1.3rem' },
            fontWeight: '600',
            ...fontStyleOpenSans,
          }}>
          mRNA could revolutionize medicine
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#376586', ...fontStyleOpenSans }}>
          Scientists have been studying mRNA <b>for decades</b>. And mRNA
          vaccines are
          <b> just the start</b>.
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
            color: '#376586',
            fontSize: { sm: '1.5rem', xs: '1.3rem' },
            fontWeight: '600',
            ...fontStyleOpenSans,
          }}>
          It's all about proteins
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: '#376586', ...fontStyleOpenSans }}>
          An mRNA can <b>teach the body</b> how to make a specific protein that
          can help your immune system prevent or treat certain
          <b>diseases</b>.
        </Typography>
      </Box>
    </Box>
  )
}

export default RevolutionizeMedicine
