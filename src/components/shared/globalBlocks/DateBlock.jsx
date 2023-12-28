import { Typography } from '../ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../ui/fontStyles/openSans'

const DateBlock = ({ integer, text, smallPlus }) => {
  return (
    <div>
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: '4.5rem',
          color: '#5793bf',
          ...fontStyleOpenSans,
        }}
      >
        {integer}
        <span style={{ fontSize: '3.3rem' }}>{smallPlus}</span>
      </Typography>
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '16px',
          color: '#053f68',
          ...fontStyleOpenSans,
        }}
      >
        {text}
      </Typography>
    </div>
  )
}

export default DateBlock
