import { createContext, useContext, useState } from 'react'
import { useSpring, config } from '@react-spring/web'

const AboutVaccineContext = createContext()

export const useAnimationContextAboutVaccine = () => {
  const context = useContext(AboutVaccineContext)
  if (!context) {
    throw new Error(
      'useAnimationContextAboutVaccine must be used within an AboutVaccineProvider'
    )
  }
  return context
}

export const AboutVaccineProvider = ({ children }) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  const animationForAd = useSpring({
    from: { opacity: 0, x: 10 },
    to: { opacity: 1, x: 0 },
    config: { duration: 1500 },
  })

  const animationForCovidPicOne = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  })
  const fadeInOutAnimation = useSpring({
    opacity: isButtonHovered ? 0 : 1,
    config: { duration: 300 },
  })
  const animationForCovidPicTwo = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  })
  const animationForCovidPicThree = useSpring({
    from: { transform: 'rotate(360deg)' },
    to: { transform: 'rotate(0deg)' },
    config: { duration: 5000 },
    reset: true,
    loop: true,
  })

  const animationLearnMoreBtn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
    delay: 3600,
  })

  const animationForCovidText = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
  })
  const animationForStorageDiv = useSpring({
    from: { opacity: 0, width: '0px', transformOrigin: 'left' },
    to: { opacity: 1, width: '10px', transformOrigin: 'left' },
    config: { duration: 500 },
  })

  const [animationHeight, setAnimationHeight] = useSpring(() => ({
    from: { height: '80px' },
    to: { height: '185px' },
    config: { duration: 500 },
    onRest: () => {
      setTimeout(() => {
        setAnimationHeight({ height: '80px' })
      }, 2000)
    },
    delay: 800,
  }))

  const animationForUmbrellaVaccine = useSpring({
    from: { opacity: 0, x: -280 },
    to: { opacity: 1, x: 20 },
    config: { duration: 1500 },
    delay: 1600,
  })
  const animationImg = useSpring({
    from: { opacity: 0, x: -10 },
    to: { opacity: 1, x: 0 },
    config: { duration: 1500 },
  })

  const contextValue = {
    isButtonHovered,
    setIsButtonHovered,
    animationHeight,
    setAnimationHeight,
    animationForAd,
    animationForCovidPicOne,
    fadeInOutAnimation,
    animationForCovidPicTwo,
    animationForCovidPicThree,
    animationLearnMoreBtn,
    animationForCovidText,
    animationForStorageDiv,
    animationForUmbrellaVaccine,
    animationImg,
  }

  return (
    <AboutVaccineContext.Provider value={contextValue}>
      {children}
    </AboutVaccineContext.Provider>
  )
}
