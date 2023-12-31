import { NavLink } from '../../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { Button } from '../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../shared/ui/fontStyles/openSans'
import { useTranslation } from '../../../shared/translations/translationsImports'

import { useHeaderContext } from '../../../../context/HeaderContext'

const stylesForBtn = {
  blueBtn: {
    border: '2px solid rgb(5, 63, 104)',
    borderRadius: '12px',
    transition: ' all 0.2s ease 0s',
    padding: '17px',
    display: 'inline-block',
    width: 'auto',
    lineHeight: '20px',
    a: {
      color: 'rgb(5, 63, 104)',
    },
    ':hover': {
      backgroundColor: 'rgb(80, 139, 182)',
      border: '2px solid rgb(80, 139, 182)',
      color: 'rgb(255, 255, 255)',
      a: {
        color: 'rgb(255, 255, 255)',
      },
    },
    fontSize: '18px',
    fontWeight: '600',
    ...fontStyleOpenSans,
  },
  redBtn: {
    display: 'inline-block',
    width: 'auto',
    lineHeight: '20px',
    border: '2px solid rgb(209, 52, 62)',
    color: 'rgb(209, 52, 62)',
    borderRadius: '12px',
    transition: ' all 0.2s ease 0s',
    padding: '17px',
    ':hover': {
      backgroundColor: 'rgb(213, 70, 79)',
      border: '2px solid rgb(213, 70, 79)',
      color: 'rgb(255, 255, 255)',
    },
    fontSize: '18px',
    fontWeight: '600',
    ...fontStyleOpenSans,
  },
}

const ReusableButton = ({ buttonText }) => {
  const { handleActiveLinkTwo } = useHeaderContext()
  const { t } = useTranslation()

  return (
    <>
      {t(buttonText) === t('learn more') ? (
        <Button sx={stylesForBtn.blueBtn}>
          <NavLink to="/vaccine/science-of-mrna" onClick={handleActiveLinkTwo}>
            {t(`${buttonText}`)}
          </NavLink>
        </Button>
      ) : (
        <Button sx={stylesForBtn.redBtn}>{t(`${buttonText}`)}</Button>
      )}
    </>
  )
}

export default ReusableButton
