import { LazyLoadImage } from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import LanguageIconHeader from '../languageLogic/LanguageIconHeader'

import menuIcon from '../../../assets/pictures/app-icons/menuIcon.webp'

const SmallScreenHeader = ({ setOpen }) => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
      </div>
    </>
  )
}

export default SmallScreenHeader
