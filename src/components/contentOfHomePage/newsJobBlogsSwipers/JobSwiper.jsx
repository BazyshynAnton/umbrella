import { jobData } from '../../../data/jobData'
import { OpenInNewIcon } from '../shared/ui/MUI/mui'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableSwiper from './ReusableSwiper'

const JobSwiper = () => {
  const { handleMouseEnterTwo, handleMouseLeaveTwo, animationForUnderLineTwo } =
    useButtonContext()

  return (
    <ReusableSwiper
      iterableInfo={jobData}
      buttonText={'View all job opportunities'}
      handleMouseEnter={handleMouseEnterTwo}
      handleMouseLeave={handleMouseLeaveTwo}
      animationForUnderLine={animationForUnderLineTwo}
      icon={<OpenInNewIcon sx={{ color: '#d1343e' }} />}
    />
  )
}

export default JobSwiper
