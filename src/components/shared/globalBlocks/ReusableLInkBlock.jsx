import { Box, Typography } from '../ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'
import { LazyLoadImage } from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { useTranslation } from '../../shared/translations/translationsImports'

import ReusableButtonWithAnimation from '../globalButtons/ReusableButtonWithAnimation'

import arrowCircleRightOutlinedIcon from '../../../assets/pictures/app-icons/arrowCircleRightOutlinedIcon.webp'

const ReusableLInkBlock = ({
  text,
  buttonWidth,
  headerText,
  handleEnter,
  handleLeave,
  animationFor,
  textForButton,
  padding,
}) => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        width: { md: '600px', sm: '500px', xs: '100%' },
        p: padding,
        cursor: 'pointer',
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: '2rem',
          color: '#053f68',
          ...fontStyleOpenSans,
        }}
      >
        {t(headerText)}
      </Typography>
      <Typography
        sx={{
          fontSize: '1rem',
          color: '#376586',
          pt: '10px',
          ...fontStyleOpenSans,
        }}
      >
        {t(text)}
      </Typography>
      {textForButton && (
        <ReusableButtonWithAnimation
          buttonText={t(textForButton)}
          icon={
            <LazyLoadImage
              style={{
                width: '18x',
                height: '18px',
                padding: '0px 0px 1px 0px',
              }}
              src={arrowCircleRightOutlinedIcon}
              alt="arrow"
            />
          }
          animation={animationFor}
        />
      )}
    </Box>
  )
}

export default ReusableLInkBlock
