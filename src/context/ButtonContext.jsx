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

  const [isMouseSix, setIsMouseSix] = useState(false)

  const handleMouseEnterSix = () => {
    setIsMouseSix(true)
  }

  const handleMouseLeaveSix = () => {
    setIsMouseSix(false)
  }

  const animationForUnderLineSix = useSpring({
    from: { width: '0%' },
    to: { width: isMouseSix ? '100%' : '0%' },
    config: { duration: 200 },
  })

  const [isMouseSeven, setIsMouseSeven] = useState(false)

  const handleMouseEnterSeven = () => {
    setIsMouseSeven(true)
  }

  const handleMouseLeaveSeven = () => {
    setIsMouseSeven(false)
  }

  const animationForUnderLineSeven = useSpring({
    from: { width: '0%' },
    to: { width: isMouseSeven ? '100%' : '0%' },
    config: { duration: 200 },
  })

  const [isMouseEight, setIsMouseEight] = useState(false)

  const handleMouseEnterEight = () => {
    setIsMouseEight(true)
  }

  const handleMouseLeaveEight = () => {
    setIsMouseEight(false)
  }

  const animationForUnderLineEight = useSpring({
    from: { width: '0%' },
    to: { width: isMouseEight ? '100%' : '0%' },
    config: { duration: 200 },
  })

  const [isMouseNine, setIsMouseNine] = useState(false)

  const handleMouseEnterNine = () => {
    setIsMouseNine(true)
  }

  const handleMouseLeaveNine = () => {
    setIsMouseNine(false)
  }

  const animationForUnderLineNine = useSpring({
    from: { width: '0%' },
    to: { width: isMouseNine ? '100%' : '0%' },
    config: { duration: 200 },
  })

  const [isMouseTen, setIsMouseTen] = useState(false)

  const handleMouseEnterTen = () => {
    setIsMouseTen(true)
  }

  const handleMouseLeaveTen = () => {
    setIsMouseTen(false)
  }

  const animationForUnderLineTen = useSpring({
    from: { width: '0%' },
    to: { width: isMouseTen ? '100%' : '0%' },
    config: { duration: 200 },
  })

  const contextValue = {
    handleMouseEnterOne,
    handleMouseEnterTwo,
    handleMouseEnterThree,
    handleMouseEnterFour,
    handleMouseEnterFive,
    handleMouseEnterSix,
    handleMouseEnterSeven,
    handleMouseEnterEight,
    handleMouseEnterNine,
    handleMouseEnterTen,

    handleMouseLeaveOne,
    handleMouseLeaveTwo,
    handleMouseLeaveThree,
    handleMouseLeaveFour,
    handleMouseLeaveFive,
    handleMouseLeaveSix,
    handleMouseLeaveSeven,
    handleMouseLeaveEight,
    handleMouseLeaveNine,
    handleMouseLeaveTen,

    animationForUnderLineOne,
    animationForUnderLineTwo,
    animationForUnderLineThree,
    animationForUnderLineFour,
    animationForUnderLineFive,
    animationForUnderLineSix,
    animationForUnderLineSeven,
    animationForUnderLineEight,
    animationForUnderLineNine,
    animationForUnderLineTen,
  }

  return (
    <ButtonContext.Provider value={contextValue}>
      {children}
    </ButtonContext.Provider>
  )
}
