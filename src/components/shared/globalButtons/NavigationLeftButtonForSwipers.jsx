import { Button } from '../ui/MUIglobal/muiGlobal'
import { LazyLoadImage } from '../ui/reactImportsGlobal/reactImportsGlobal'

import arrowBack from '../../../assets/pictures/app-icons/arrowBack.webp'

const NavigationLeftButtonForSwipers = ({ styles, handleClick }) => {
  return (
    <Button sx={styles} onClick={handleClick}>
      <LazyLoadImage
        style={{ width: '35px', height: '35px' }}
        src={arrowBack}
        alt="prev"
      />
    </Button>
  )
}

export default NavigationLeftButtonForSwipers
