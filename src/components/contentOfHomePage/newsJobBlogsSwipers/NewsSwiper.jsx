import { newsData } from '../../../data/newsData'
import { ArrowCircleRightOutlinedIcon } from '../shared/ui/MUI/mui'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableSwiper from './ReusableSwiper'

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
      icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
    />
  )
}

export default NewsSwiper
