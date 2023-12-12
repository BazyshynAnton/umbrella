import { useSpring } from '@react-spring/web'
import { createContext, useContext, useState } from 'react'

const ButtonContext = createContext()

export const useButtonContext = () => {
  const context = useContext(ButtonContext)

  return context
}

export const ButtonContextProvider = ({ children }) => {
  const [isMouseOne, setIsMouseOne] = useState(false)

  const handleMouseEnterOne = () => {
    setIsMouseOne(true)
  }

  const handleMouseLeaveOne = () => {
    setIsMouseOne(false)
  }

  const animationForUnderLineOne = useSpring({
    from: { width: '0%' },
    to: { width: isMouseOne ? '100%' : '0%' },
    config: { duration: 200 },
  })

  const [isMouseTwo, setIsMouseTwo] = useState(false)

  const handleMouseEnterTwo = () => {
    setIsMouseTwo(true)
  }

  const handleMouseLeaveTwo = () => {
    setIsMouseTwo(false)
  }

  const animationForUnderLineTwo = useSpring({
    from: { width: '0%' },
    to: { width: isMouseTwo ? '100%' : '0%' },
    config: { duration: 200 },
  })

  const [isMouseThree, setIsMouseThree] = useState(false)

  const handleMouseEnterThree = () => {
    setIsMouseThree(true)
  }

  const handleMouseLeaveThree = () => {
    setIsMouseThree(false)
  }

  const animationForUnderLineThree = useSpring({
    from: { width: '0%' },
    to: { width: isMouseThree ? '100%' : '0%' },
    config: { duration: 200 },
  })

  const [isMouseFour, setIsMouseFour] = useState(false)

  const handleMouseEnterFour = () => {
    setIsMouseFour(true)
  }

  const handleMouseLeaveFour = () => {
    setIsMouseFour(false)
  }

  const animationForUnderLineFour = useSpring({
    from: { width: '0%' },
    to: { width: isMouseFour ? '100%' : '0%' },
    config: { duration: 200 },
  })

  const [isMouseFive, setIsMouseFive] = useState(false)

  const handleMouseEnterFive = () => {
    setIsMouseFive(true)
  }

  const handleMouseLeaveFive = () => {
    setIsMouseFive(false)
  }

  const animationForUnderLineFive = useSpring({
    from: { width: '0%' },
    to: { width: isMouseFive ? '100%' : '0%' },
    config: { duration: 200 },
  })

  const contextValue = {
    handleMouseEnterOne,
    handleMouseEnterTwo,
    handleMouseEnterThree,
    handleMouseEnterFour,
    handleMouseEnterFive,
    handleMouseLeaveOne,
    handleMouseLeaveTwo,
    handleMouseLeaveThree,
    handleMouseLeaveFour,
    handleMouseLeaveFive,
    animationForUnderLineOne,
    animationForUnderLineTwo,
    animationForUnderLineThree,
    animationForUnderLineFour,
    animationForUnderLineFive,
  }

  return (
    <ButtonContext.Provider value={contextValue}>
      {children}
    </ButtonContext.Provider>
  )
}
