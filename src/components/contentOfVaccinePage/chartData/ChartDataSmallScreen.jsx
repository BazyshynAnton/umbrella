import { useTranslation } from '../../shared/translations/translationsImports'
import { Box, Typography } from '../../shared/ui/MUIglobal/muiGlobal'
import {
  useSpring,
  animated,
} from '../../shared/ui/reactSpringImportsGlobal/reactSpringImportsGlobal'

import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'

const ChartDataSmallScreen = () => {
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

  const { t } = useTranslation()

  return (
    <Box
      sx={{
        mt: '20px',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: { sm: 'center', xs: 'flex-start' },
      }}
    >
      <Box
        sx={{
          width: { sm: '500px', xs: '200px' },
          height: '100px',
          background: 'rgba(128, 128, 128, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          borderLeft: '2px solid #808080',
          paddingLeft: '8px',
        }}
      >
        <animated.p
          style={{
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'flex-end',
            fontWeight: '600',

            ...fontStyleOpenSans,
          }}
        >
          {people}
        </animated.p>
        <Typography variant="body1" sx={{ pr: '3px', ...fontStyleOpenSans }}>
          {t('Clinical trial participants')}
        </Typography>
      </Box>
      <Box
        sx={{
          width: { sm: '500px', xs: '200px' },
          height: '100px',
          background: 'rgba(255, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: '8px',
          borderLeft: '2px solid #FF0000',
        }}
      >
        <animated.p
          style={{
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'flex-start',
            fontWeight: '600',
            ...fontStyleOpenSans,
          }}
        >
          {vaccine}
        </animated.p>
        <Typography variant="body1" sx={{ pr: '3px', ...fontStyleOpenSans }}>
          {t('Vaccine')}:
        </Typography>
      </Box>
      <Box
        sx={{
          width: { sm: '500px', xs: '200px' },
          height: '100px',
          background: 'rgba(53, 162, 235, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: '8px',
          borderLeft: '2px solid #35a2eb',
        }}
      >
        <animated.p
          style={{
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'flex-start',
            fontWeight: '600',
            ...fontStyleOpenSans,
          }}
        >
          {placebo}
        </animated.p>
        <Typography variant="body1" sx={{ pr: '3px', ...fontStyleOpenSans }}>
          {t('Placebo')}:
        </Typography>
      </Box>
    </Box>
  )
}
export default ChartDataSmallScreen
