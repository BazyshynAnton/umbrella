import { Box, Typography } from '@mui/material'
import books from '../../../../pictures/books.png'
import flask from '../../../../pictures/flask.png'
import YellowButton from '../../yellowButton/YellowButton'
import { fontStyleOpenSans } from '../../../../context/variables'
const ContentForSmallSrceens = () => {
  return (
    <Box
      sx={{
        mt: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '450px',
      }}>
      <Box
        sx={{
          position: 'relative',
          border: '1px solid black',
          background: '#fff',
          width: { md: '600px', sm: '500px', xs: '300px' },
          height: { sm: '400px', xs: '550px' },
          padding: '2pc',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
          }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { md: '3rem', sm: '2.5rem', xs: '1.5rem' },
              fontWeight: '600',
              color: '#376586',
              ...fontStyleOpenSans,
            }}>
            Careers at Umbrella
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '400',
              color: '#376586',
              ...fontStyleOpenSans,
            }}>
            Our mission is clear: translating science into survival to improve
            the health of people worldwide. We are always on the lookout for
            dedicated and curious new talents supporting our team of
            visionaries, entrepreneurs, scientists, engineers and business
            professionals. Join us and be part of our unique pioneering spirit.
          </Typography>
        </Box>
        <YellowButton>Careers Portal</YellowButton>
        <Box
          sx={{
            position: 'absolute',
            top: { md: '-50px', sm: '-60px', xs: '-20px' },
            left: { md: '-100px', sm: '-50px', xs: '-60px' },
            width: { md: '150px', sm: '120px', xs: '100px' },
            height: { md: '150px', sm: '120px', xs: '100px' },
          }}>
          <img
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            src={books}
            alt="animated-books-icon"
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: { md: '-50px', sm: '-20px', xs: '-20px' },
            right: { md: '-50px', sm: '-40px', xs: '-40px' },
            width: { md: '150px', sm: '120px', xs: '100px' },
            height: { md: '150px', sm: '120px', xs: '100px' },
          }}>
          <img
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            src={flask}
            alt="animated-flask-icon"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default ContentForSmallSrceens
