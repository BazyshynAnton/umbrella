import ReusableSwiper from './ReusableSwiper'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'

import { newsData } from '../../../data/newsData'
import { useButtonContext } from '../../../context/ButtonContext'

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
