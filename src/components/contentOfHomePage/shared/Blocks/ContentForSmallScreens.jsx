import { Box, Typography } from '../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../shared/ui/fontStyles/openSans'
import { LazyLoadImage } from '../../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import YellowButton from '../Buttons/YellowButton'

const ContentForSmallScreens = ({
  picture1,
  picture2,
  buttonText,
  headerText,
  text,
  height1,
  height2,
}) => {
  return (
    <div
      style={{
        marginTop: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          border: '1px solid #376586',
          borderRadius: '10px',
          background: '#fff',
          width: { md: '600px', sm: '500px', xs: '300px' },
          height: { sm: height1, xs: height2 },
          padding: '2pc',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { md: '3rem', sm: '2.5rem', xs: '1.5rem' },
              fontWeight: '600',
              color: '#376586',

              ...fontStyleOpenSans,
            }}
          >
            {headerText}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '400',
              color: '#376586',
              ...fontStyleOpenSans,
            }}
          >
            {text}
          </Typography>
        </div>
        <YellowButton>{buttonText}</YellowButton>
        <Box
          sx={{
            position: 'absolute',
            top: { md: '-40px', sm: '-40px', xs: '-50px' },
            left: { md: '-15px', sm: '-15px', xs: '-15px' },
            width: { md: '150px', sm: '120px', xs: '100px' },
            height: { md: '150px', sm: '120px', xs: '100px' },
          }}
        >
          <LazyLoadImage
            style={{ objectFit: 'cover', width: '80px', height: '80px' }}
            src={picture1}
            alt="animated-books-icon"
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: { md: '-100px', sm: '-65px', xs: '-70px' },
            right: { md: '-50px', sm: '-40px', xs: '-30px' },
            width: { md: '150px', sm: '120px', xs: '100px' },
            height: { md: '150px', sm: '120px', xs: '100px' },
          }}
        >
          <LazyLoadImage
            style={{ objectFit: 'contain', width: '70px', height: '70px' }}
            src={picture2}
            alt="animated-flask-icon"
          />
        </Box>
      </Box>
    </div>
  )
}

export default ContentForSmallScreens
