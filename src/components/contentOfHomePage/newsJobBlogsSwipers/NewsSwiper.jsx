import { newsData } from '../../../data/newsData'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableSwiper from './ReusableSwiper'

import arrowCircleRightOutlinedIcon from '../../../assets/pictures/app-icons/arrowCircleRightOutlinedIcon.webp'

const NewsSwiper = () => {
  const { handleMouseEnterOne, handleMouseLeaveOne, animationForUnderLineOne } =
    useButtonContext()

  return (
    <ReusableSwiper
      iterableInfo={newsData}
      buttonText={'View all news'}
      handleMouseEnter={handleMouseEnterOne}
      handleMouseLeave={handleMouseLeaveOne}
      animationForUnderLine={animationForUnderLineOne}
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

export default NewsSwiper
