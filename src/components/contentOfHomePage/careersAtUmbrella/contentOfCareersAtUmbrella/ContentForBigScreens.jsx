import { Box, Typography } from '../../../MUIcomponents/MUIcomponents'
import { fontStyleOpenSans } from '../../../../context/variables'

import YellowButton from '../../yellowButton/YellowButton'

import redBook from '../../../../pictures/redBook.png'

const ContentForBigScreens = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        marginTop: '60px',
        width: '100%',
        height: '600px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: { xl: '-150px', lg: '0px' },
          width: '100%',
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
          src={redBook}
          alt="pic"
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: '18%',
          right: '0',
          background: '#fff',
          width: '600px',
          height: '400px',
          padding: '2pc',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: '#376586',
              fontWeight: '600',
              ...fontStyleOpenSans,
            }}
          >
            Careers at Umbrella
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#376586',
              fontWeight: '400',
              ...fontStyleOpenSans,
            }}
          >
            Our mission is clear: translating science into survival to improve
            the health of people worldwide. We are always on the lookout for
            dedicated and curious new talents supporting our team of
            visionaries, entrepreneurs, scientists, engineers and business
            professionals. Join us and be part of our unique pioneering spirit.
          </Typography>
        </Box>
        <YellowButton>Careers Portal</YellowButton>
      </Box>
    </Box>
  )
}

export default ContentForBigScreens
