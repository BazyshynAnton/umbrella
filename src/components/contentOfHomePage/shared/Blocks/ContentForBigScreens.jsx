import { Box, Typography } from '../ui/MUI/mui'
import { fontStyleOpenSans } from '../ui/font/openSans'
import { LazyLoadImage } from '../ui/reactImports/reactImports'

import YellowButton from '../Button/YellowButton'

const ContentForBigScreens = ({
  picture,
  headerText,
  text,
  buttonText,
  height,
  rightStyles,
  leftStyles,
}) => {
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

          width: '100%',
          height: height,
          ...rightStyles,
          ...leftStyles,
        }}
      >
        <LazyLoadImage
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
          }}
          src={picture}
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
            {headerText}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#376586',
              fontWeight: '400',
              ...fontStyleOpenSans,
            }}
          >
            {text}
          </Typography>
        </Box>
        <YellowButton>{buttonText}</YellowButton>
      </Box>
    </Box>
  )
}

export default ContentForBigScreens
