import { Button } from '../ui/MUI/mui'
import { LazyLoadImage } from '../ui/reactImports/reactImports'
import arrowForward from '../../../../assets/pictures/app-icons/arrowForward.webp'

const NavigationRightButtonForSwipers = ({ styles, handleClick }) => {
  return (
    <Button sx={styles} onClick={handleClick}>
      <LazyLoadImage
        style={{ width: '35px', height: '35px' }}
        src={arrowForward}
        alt="prev"
      />
    </Button>
  )
}

export default NavigationRightButtonForSwipers
