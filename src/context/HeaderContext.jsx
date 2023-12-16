import { createContext, useContext } from 'react'

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

  const contextValue = {
    stylesForLinks,
    stylesForHoveredNavLinks,
  }

  return (
    <HeaderContext.Provider value={contextValue}>
      {children}
    </HeaderContext.Provider>
  )
}
