import { Box, Typography } from '@mui/material'
import scienceInTheLab from '../../../../../pictures/scienceInTheLab.jpeg'

const fontStyle = { fontFamily: "'Open Sans', sans-serif" }
const colorForImportant = { color: '#FF0000' }

const RevolutionizeMedicine = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
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
          sx={{ mt: '20px', fontWeight: '600', ...fontStyle }}>
          mRNA could revolutionize medicine
        </Typography>
        <Typography variant="body1" sx={{ ...fontStyle }}>
          Scientists have been studying mRNA{' '}
          <b style={colorForImportant}>for decades</b>. And mRNA vaccines are
          <b style={colorForImportant}> just the start</b>.
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          pl: '30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Typography variant="h5" sx={{ fontWeight: '600', ...fontStyle }}>
          It's all about proteins
        </Typography>
        <Typography variant="body1" sx={{ ...fontStyle }}>
          An mRNA can <b style={colorForImportant}>teach the body</b> how to
          make a specific protein that can help your immune system prevent or
          treat certain
          <b style={colorForImportant}>diseases</b>.
        </Typography>
      </Box>
    </Box>
  )
}

export default RevolutionizeMedicine
