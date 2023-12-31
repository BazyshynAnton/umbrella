import { jobData } from '../../../data/jobData'
import { useButtonContext } from '../../../context/ButtonContext'
import { LazyLoadImage } from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import ReusableSwiper from './ReusableSwiper'

import openInNewIcon from '../../../assets/pictures/app-icons/openInNewIcon.webp'

const JobSwiper = () => {
  const { handleMouseEnter, handleMouseLeave, animations } = useButtonContext()

  return (
    <ReusableSwiper
      iterableInfo={jobData}
      buttonText={'view all job opportunities'}
      handleMouseEnter={handleMouseEnter(1)}
      handleMouseLeave={handleMouseLeave(1)}
      animationForUnderLine={animations[1]}
      icon={
        <LazyLoadImage
          style={{ width: '18x', height: '18px', padding: '0px 0px 2px 0px' }}
          src={openInNewIcon}
          alt="arrow"
        />
      }
    />
  )
}

export default JobSwiper
