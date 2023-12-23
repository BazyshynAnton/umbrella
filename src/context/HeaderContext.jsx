import { createContext, useContext, useState } from 'react'
import { fontStyleOpenSans } from './variables'
import { useSpring } from '@react-spring/web'

const HeaderContext = createContext()

export const useHeaderContext = () => {
  const context = useContext(HeaderContext)

  return context
}

export const HeaderContextProvider = ({ children }) => {
  const stylesForLinks = {
    fontWeight: '500',
    fontSize: { sm: '1.5rem', xs: '1.3rem' },
    color: '#053f68',
    ...fontStyleOpenSans,
  }

  const stylesForActiveLinks = {
    fontWeight: '500',
    fontSize: { sm: '1.5rem', xs: '1.3rem' },
    color: '#d1343e',
    ...fontStyleOpenSans,
  }

  const stylesForHoveredNavLinks = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    p: '0px 6px',
    minHeight: '64px',
    borderTop: '3px solid #fff',
    borderBottom: '3px solid #fff',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      borderBottom: '3px solid #508bb6',
    },
  }
  const stylesForActiveHoveredNavLinks = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    p: '0px 6px',
    minHeight: '64px',
    borderTop: '3px solid #fff',
    borderBottom: '3px solid #d1343e',
    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      borderBottom: '3px solid #d1343e',
    },
  }

  const [isActiveAnimation, setIsActiveAnimation] = useState(false)

  const headerLogoAnim = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    config: { duration: 400 },
    reset: true,
  })

  const [isActiveLinkOne, setIsActiveLinkOne] = useState(false)
  const [isActiveLinkTwo, setIsActiveLinkTwo] = useState(false)
  const [isActiveLinkThree, setIsActiveLinkThree] = useState(false)
  const [open, setOpen] = useState(false)

  const handleActiveLinkOne = () => {
    setIsActiveLinkOne(true)
    setIsActiveLinkTwo(false)
    setIsActiveLinkThree(false)
    setIsActiveAnimation(true)
    window.scrollTo(0, 0)
    setOpen(false)
  }
  const handleActiveLinkTwo = () => {
    setIsActiveLinkOne(false)
    setIsActiveLinkTwo(true)
    setIsActiveLinkThree(false)
    setIsActiveAnimation(false)
    window.scrollTo(0, 0)
    setOpen(false)
  }
  const handleActiveLinkThree = () => {
    setIsActiveLinkOne(false)
    setIsActiveLinkTwo(false)
    setIsActiveLinkThree(true)
    setIsActiveAnimation(false)
    window.scrollTo(0, 0)
    setOpen(false)
  }

  const contextValue = {
    stylesForLinks,
    stylesForActiveLinks,
    stylesForHoveredNavLinks,
    stylesForActiveHoveredNavLinks,
    isActiveLinkOne,
    isActiveLinkTwo,
    isActiveLinkThree,
    handleActiveLinkOne,
    handleActiveLinkTwo,
    handleActiveLinkThree,
    open,
    setOpen,
    headerLogoAnim,
    isActiveAnimation,
  }

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  )
}
