import { Box, Typography } from '../ui/MUI/mui'
import {
  useSpring,
  animated,
} from '../ui/reactSpringImports/reactSpringImports'

import { fontStyleOpenSans } from '../ui/font/openSans'

const YellowButton = ({ children }) => {
  const [props, set] = useSpring(() => ({
    background: 'linear-gradient(to left, #fff 50%, #fff 50%)',
    typographyOneLeft: 20,
    typographyTwoLeft: 60,
  }))

  return (
    <animated.div
      onMouseOver={() =>
        set.start({
          background: 'linear-gradient(to left, #fff 0%, #FFFF00 100%)',
          typographyOneLeft: 26,
          typographyTwoLeft: 40,
        })
      }
      onMouseLeave={() =>
        set.start({
          background: 'linear-gradient(to left, #fff 50%, #fff 50%)',
          typographyOneLeft: 20,
          typographyTwoLeft: 60,
        })
      }
      style={{
        position: 'relative',
        width: '200px',
        height: '50px',
        background: props.background,
        borderRadius: '100px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Box
        style={{
          width: '50px',
          height: '50px',
          background: '#FFFF00',
          borderRadius: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <animated.div
          style={{
            left: props.typographyOneLeft,
            position: 'absolute',
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: '#053f68', fontWeight: '700', ...fontStyleOpenSans }}
          >
            {'>'}
          </Typography>
        </animated.div>
      </Box>
      <animated.div
        style={{
          left: props.typographyTwoLeft,
          position: 'absolute',
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: '#053f68', fontWeight: '700', ...fontStyleOpenSans }}
        >
          {children}
        </Typography>
      </animated.div>
    </animated.div>
  )
}

export default YellowButton
