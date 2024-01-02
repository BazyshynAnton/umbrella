import {
  LazyLoadImage,
  useRef,
  useEffect,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { Box } from '../../shared/ui/MUIglobal/muiGlobal'
import { useHeaderContext } from '../../../context/HeaderContext'

import langIcon from '../../../assets/pictures/app-icons/langIcon.webp'
import ChangeLang from './ChangeLang'

const stylesForAdditionallyLinks = {
  width: '30px',
  height: '30px',
  cursor: 'pointer',
}

const LanguageIconHeader = () => {
  const { changeLang, setChangeLang } = useHeaderContext()

  const ref = useRef(null)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setChangeLang(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleChangeLang = () => {
    setChangeLang(!changeLang)
  }
  return (
    <>
      <LazyLoadImage
        onClick={handleChangeLang}
        style={stylesForAdditionallyLinks}
        src={langIcon}
        alt="change-language"
      />
      {changeLang && (
        <Box
          ref={ref}
          sx={{
            position: 'absolute',
            right: { md: '0px', xs: '60px' },
            top: '50px',
          }}
        >
          <ChangeLang setChangeLang={setChangeLang} />
        </Box>
      )}
    </>
  )
}

export default LanguageIconHeader
