import {
  createContext,
  useContext,
  useState,
} from '../components/shared/ui/reactImportsGlobal/reactImportsGlobal'
import { fontStyleOpenSans } from '../components/shared/ui/fontStyles/openSans'
import { useSpring } from '../components/shared/ui/reactSpringImportsGlobal/reactSpringImportsGlobal'

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

  const [activeLink, setActiveLink] = useState(null)
  const [open, setOpen] = useState(false)

  const handleActiveLink = (linkNumber) => {
    setActiveLink(linkNumber)
    setIsActiveAnimation(linkNumber === 1)
    window.scrollTo(0, 0)
    setOpen(false)
  }

  const contextValue = {
    stylesForLinks,
    stylesForActiveLinks,
    stylesForHoveredNavLinks,
    stylesForActiveHoveredNavLinks,
    isActiveLinkOne: activeLink === 1,
    isActiveLinkTwo: activeLink === 2,
    isActiveLinkThree: activeLink === 3,
    handleActiveLink,
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
