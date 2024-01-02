import { Box, Typography } from '../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'

import ItemsBlock from './ItemsBlock'

const OurValues = ({ t }) => {
  return (
    <Box
      sx={{
        mt: '70px',
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', p: '0px 20px 0px 0px' }}>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '2.5rem',
            color: '#053f68',
            ...fontStyleOpenSans,
          }}
        >
          Our Values
        </Typography>
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '1rem',
            color: '#376586',
            ...fontStyleOpenSans,
          }}
        >
          {t('Umbrella people hold')}
        </Typography>
      </Box>
      <ItemsBlock t={t} />
    </Box>
  )
}

export default OurValues
