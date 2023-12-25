import { NavLink } from '../../shared/ui/reactImports/reactImports'
import { Button } from '../../shared/ui/MUI/mui'
import { fontStyleOpenSans } from '../../shared/ui/font/openSans'
import { useHeaderContext } from '../../../../context/HeaderContext'

const stylesForBtn = {
  blueBtn: {
    border: '2px solid rgb(5, 63, 104)',
    color: 'rgb(5, 63, 104)',
    borderRadius: '12px',
    transition: ' all 0.2s ease 0s',
    width: '200px',
    height: '62px',
    padding: '17px',
    ':hover': {
      backgroundColor: 'rgb(80, 139, 182)',
      border: '2px solid rgb(80, 139, 182)',
      color: 'rgb(255, 255, 255)',
    },
    fontSize: '18px',
    fontWeight: '600',
    ...fontStyleOpenSans,
  },
  redBtn: {
    border: '2px solid rgb(209, 52, 62)',
    color: 'rgb(209, 52, 62)',
    borderRadius: '12px',
    transition: ' all 0.2s ease 0s',
    width: '200px',
    height: '62px',
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
  return (
    <>
      {buttonText === 'learn more' ? (
        <NavLink
          to="/vaccine/science-of-mrna"
          onClick={handleActiveLinkTwo}
          style={{ width: '200px', height: '62px', borderRadius: '12px' }}
        >
          <Button sx={stylesForBtn.blueBtn}>{buttonText}</Button>
        </NavLink>
      ) : (
        <Button sx={stylesForBtn.redBtn}>{buttonText}</Button>
      )}
    </>
  )
}

export default ReusableButton
