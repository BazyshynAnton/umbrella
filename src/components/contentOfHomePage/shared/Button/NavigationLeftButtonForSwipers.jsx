import { Button, ArrowBackIosRoundedIcon } from '../ui/MUI/mui'

const NavigationLeftButtonForSwipers = ({
  styles,
  handleClick,
  stylesIcon,
}) => {
  return (
    <Button sx={styles} onClick={handleClick}>
      <ArrowBackIosRoundedIcon sx={stylesIcon} />
    </Button>
  )
}

export default NavigationLeftButtonForSwipers
