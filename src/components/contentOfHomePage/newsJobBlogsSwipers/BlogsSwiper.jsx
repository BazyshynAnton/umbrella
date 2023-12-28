import { blogsData } from '../../../data/blogsData'
import { useButtonContext } from '../../../context/ButtonContext'
import { LazyLoadImage } from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import ReusableSwiper from './ReusableSwiper'

import arrowCircleRightOutlinedIcon from '../../../assets/pictures/app-icons/arrowCircleRightOutlinedIcon.webp'

const JobSwiper = () => {
  const { handleMouseEnter, handleMouseLeave, animations } = useButtonContext()

  return (
    <ReusableSwiper
      iterableInfo={blogsData}
      buttonText={'View blog posts'}
      handleMouseEnter={handleMouseEnter(2)}
      handleMouseLeave={handleMouseLeave(2)}
      animationForUnderLine={animations[2]}
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

export default JobSwiper
