import { newsData } from '../../../data/newsData'
import { useButtonContext } from '../../../context/ButtonContext'
import { LazyLoadImage } from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import ReusableSwiper from './ReusableSwiper'

import arrowCircleRightOutlinedIcon from '../../../assets/pictures/app-icons/arrowCircleRightOutlinedIcon.webp'

const NewsSwiper = () => {
  const { handleMouseEnter, handleMouseLeave, animations } = useButtonContext()

  return (
    <ReusableSwiper
      iterableInfo={newsData}
      buttonText={'View all news'}
      handleMouseEnter={handleMouseEnter(0)}
      handleMouseLeave={handleMouseLeave(0)}
      animationForUnderLine={animations[0]}
      icon={
        <LazyLoadImage
          style={{ width: '18x', height: '18px', padding: '0px 0px 1px 0px' }}
          src={arrowCircleRightOutlinedIcon}
          alt="arrow"
        />
      }
    />
  )
}

export default NewsSwiper
