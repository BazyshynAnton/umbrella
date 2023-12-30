import { useSpring } from '../components/shared/ui/reactSpringImportsGlobal/reactSpringImportsGlobal'
import {
  createContext,
  useContext,
  useState,
} from '../components/shared/ui/reactImportsGlobal/reactImportsGlobal'

const ButtonContext = createContext()

export const useButtonContext = () => {
  const context = useContext(ButtonContext)

  return context
}

function createAnimations(isMouseOver) {
  return isMouseOver.map((mouseOver, _) =>
    useSpring({
      from: { width: '0%' },
      to: { width: mouseOver ? '100%' : '0%' },
      config: { duration: 200 },
    })
  )
}

export const ButtonContextProvider = ({ children }) => {
  const buttonCount = 11
  const [isMouseOver, setIsMouseOver] = useState(Array(buttonCount).fill(false))
  const animations = createAnimations(isMouseOver)

  const handleMouseEnter = (index) => () => {
    setIsMouseOver((prevState) =>
      prevState.map((value, i) => (i === index ? true : value))
    )
  }

  const handleMouseLeave = (index) => () => {
    setIsMouseOver((prevState) =>
      prevState.map((value, i) => (i === index ? false : value))
    )
  }

  const contextValue = {
    handleMouseEnter,
    handleMouseLeave,
    animations,
    isMouseOver,
  }
  return (
    <ButtonContext.Provider value={contextValue}>
      {children}
    </ButtonContext.Provider>
  )
}
