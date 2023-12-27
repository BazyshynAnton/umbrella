import { jobData } from '../../../data/jobData'
import { useButtonContext } from '../../../context/ButtonContext'

import ReusableSwiper from './ReusableSwiper'

import openInNewIcon from '../../../assets/pictures/app-icons/openInNewIcon.webp'

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
      icon={
        <img
          style={{ width: '18x', height: '18px', padding: '0px 0px 2px 0px' }}
          src={openInNewIcon}
          alt="arrow"
        />
      }
    />
  )
}

export default JobSwiper
