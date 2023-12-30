import { fontStyleOpenSans } from '../shared/ui/fontStyles/openSans'

const SmallSpinner = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        fontWeight: '600',
        color: '#053f68',
        ...fontStyleOpenSans,
      }}
    >
      Loading data...
    </div>
  )
}

export default SmallSpinner
