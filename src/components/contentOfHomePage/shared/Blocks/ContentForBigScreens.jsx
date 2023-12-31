import { Box, Typography } from '../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../shared/ui/fontStyles/openSans'
import { LazyLoadImage } from '../../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import YellowButton from '../Buttons/YellowButton'

const ContentForBigScreens = ({
  picture,
  headerText,
  text,
  buttonText,
  height,
  positionForPicture,
  position,
}) => {
  return (
    <div
      style={{
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
          ...positionForPicture,
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

      <div
        style={{
          position: 'absolute',
          top: '18%',
          background: '#fff',
          width: '600px',
          height: '400px',
          padding: '2pc',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',

          gap: '1rem',
          ...position,
        }}
      >
        <div
          style={{
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
        </div>
        <YellowButton>{buttonText}</YellowButton>
      </div>
    </div>
  )
}

export default ContentForBigScreens
