import { Box, Button } from '../ui/MUIglobal/muiGlobal'
import { animated } from '../ui/reactSpringImportsGlobal/reactSpringImportsGlobal'
import { fontStyleOpenSans } from '../ui/fontStyles/openSans'
import { useTranslation } from '../translations/translationsImports'

const ReusableButtonWithAnimation = ({ buttonText, icon, animation }) => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      <Button
        sx={{
          p: '6px 0px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          fontSize: '16px',
          fontWeight: '700',
          color: '#053f68',
          ...fontStyleOpenSans,
        }}
      >
        {t(buttonText)} {icon}
      </Button>
      <animated.div
        style={{
          height: '1px',
          background: '#376586',
          ...animation,
        }}
      />
    </Box>
  )
}

export default ReusableButtonWithAnimation
