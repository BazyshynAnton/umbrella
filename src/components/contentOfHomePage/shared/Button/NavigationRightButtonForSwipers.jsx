import { Button, ArrowForwardIosRoundedIcon } from '../ui/MUI/mui'

const NavigationRightButtonForSwipers = ({
  styles,
  handleClick,
  stylesIcon,
}) => {
  return (
    <Button sx={styles} onClick={handleClick}>
      <ArrowForwardIosRoundedIcon sx={stylesIcon} />
    </Button>
  )
}

export default NavigationRightButtonForSwipers
