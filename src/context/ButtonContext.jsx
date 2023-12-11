import { useSpring } from '@react-spring/web'
import { createContext, useContext, useState } from 'react'

const ButtonContext = createContext()

export const useButtonContext = () => {
  const context = useContext(ButtonContext)

  return context
}

export const ButtonContextProvider = ({ children }) => {
  const [isMouse, setIsMouse] = useState(false)

  const handleMouseEnter = () => {
    setIsMouse(true)
  }

  const handleMouseLeave = () => {
    setIsMouse(false)
  }

  const animationForUnderLine = useSpring({
    from: { width: '0%' },
    to: { width: isMouse ? '100%' : '0%' },
    config: { duration: 200 },
  })

  const contextValue = {
    isMouse,
    setIsMouse,
    handleMouseEnter,
    handleMouseLeave,
    animationForUnderLine,
  }

  return (
    <ButtonContext.Provider value={contextValue}>
      {children}
    </ButtonContext.Provider>
  )
}
