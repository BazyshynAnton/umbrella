import { LazyLoadImage } from '../contentOfHomePage/shared/ui/reactImports/reactImports'
import { Box } from '../contentOfHomePage/shared/ui/MUI/mui'

import LanguageIconHeader from './languageLogic/LanguageIconHeader'

import menuIcon from '../../assets/pictures/app-icons/menuIcon.webp'

const SmallScreenHeader = ({ setOpen }) => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <LanguageIconHeader />
        <button
          style={{ cursor: 'pointer', background: '#fff' }}
          onClick={() => setOpen(true)}
        >
          <LazyLoadImage
            style={{ width: '30px', height: '30px' }}
            src={menuIcon}
            alt="menu-icon"
          />
        </button>
      </Box>
    </>
  )
}

export default SmallScreenHeader
