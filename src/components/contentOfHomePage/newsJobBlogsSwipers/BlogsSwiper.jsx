import { blogsData } from '../../../data/blogsData'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableSwiper from './ReusableSwiper'

import arrowCircleRightOutlinedIcon from '../../../assets/pictures/app-icons/arrowCircleRightOutlinedIcon.webp'

const JobSwiper = () => {
  const {
    handleMouseEnterThree,
    handleMouseLeaveThree,
    animationForUnderLineThree,
  } = useButtonContext()

  return (
    <ReusableSwiper
      iterableInfo={blogsData}
      buttonText={'View blog posts'}
      handleMouseEnter={handleMouseEnterThree}
      handleMouseLeave={handleMouseLeaveThree}
      animationForUnderLine={animationForUnderLineThree}
      icon={
        <img
          style={{ width: '18x', height: '18px', padding: '0px 0px 1px 0px' }}
          src={arrowCircleRightOutlinedIcon}
          alt="arrow"
        />
      }
    />
  )
}

export default JobSwiper
