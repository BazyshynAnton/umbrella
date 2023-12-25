import { ArrowCircleRightOutlinedIcon } from '../shared/ui/MUI/mui'
import { blogsData } from '../../../data/blogsData'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableSwiper from './ReusableSwiper'

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
      icon={<ArrowCircleRightOutlinedIcon sx={{ color: '#d1343e' }} />}
    />
  )
}

export default JobSwiper
