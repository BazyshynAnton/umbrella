import { Box, Typography } from '@mui/material'
import { useSpring, animated } from '@react-spring/web'

import { fontStyleOpenSans } from '../../../context/variables'

const ChartData = () => {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: 14000 },
    config: { duration: 2000 },
  })

  const { number: numberTwo } = useSpring({
    from: { number: 0 },
    to: { number: 7000 },
    config: { duration: 2000 },
  })

  const people = number.to((val) => Math.floor(val))
  const vaccine = numberTwo.to((val) => Math.floor(val))
  const placebo = numberTwo.to((val) => Math.floor(val))

  return (
    <Box
      sx={{
        width: '100%',
        height: '100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Box
        sx={{
          background: 'rgba(128, 128, 128, 0.3)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          paddingLeft: '8px',
        }}
      >
        <Typography
          variant="h5"
          sx={{ pr: '3px', color: '#376586', ...fontStyleOpenSans }}
        >
          Clinical trial participants:
        </Typography>
        <animated.p
          style={{
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'flex-end',
            background: 'rgba(192, 192, 192, 0.9)',
            padding: '5px 8px 5px 8px',
            borderRadius: '10px',
            width: '73.19px',
            ...fontStyleOpenSans,
          }}
        >
          {people}
        </animated.p>
      </Box>
      <Box
        sx={{
          background: 'rgba(255, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          paddingLeft: '8px',
        }}
      >
        <Typography variant="h5" sx={{ pr: '3px', ...fontStyleOpenSans }}>
          Vaccine:
        </Typography>
        <animated.p
          style={{
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'flex-end',
            width: '61.75px',
            background: 'rgba(255, 0, 0, 0.5)',
            padding: '5px 8px 5px 8px',
            borderRadius: '10px',
            ...fontStyleOpenSans,
          }}
        >
          {vaccine}
        </animated.p>
      </Box>
      <Box
        sx={{
          background: 'rgba(53, 162, 235, 0.4)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '10px',
          paddingLeft: '8px',
        }}
      >
        <Typography variant="h5" sx={{ pr: '3px', ...fontStyleOpenSans }}>
          Placebo:
        </Typography>
        <animated.p
          style={{
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'flex-end',
            width: '58.75px',
            background: 'rgba(53, 162, 235, 0.5)',
            padding: '5px 8px 5px 8px',
            borderRadius: '10px',
            ...fontStyleOpenSans,
          }}
        >
          {placebo}
        </animated.p>
      </Box>
    </Box>
  )
}

export default ChartData
