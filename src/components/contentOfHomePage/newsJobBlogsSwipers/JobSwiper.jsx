import ReusableSwiper from './ReusableSwiper'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

import { jobData } from '../../../data/jobData'
import { useButtonContext } from '../../../context/ButtonContext'

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
