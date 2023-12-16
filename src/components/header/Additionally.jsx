import { Box, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language'

const stylesForAdditionallyLinks = { color: '#053f68', cursor: 'pointer' }

const Additionally = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '1.3rem',
      }}
    >
      <Typography sx={stylesForAdditionallyLinks}>Careers</Typography>
      <Typography sx={stylesForAdditionallyLinks}>Investors</Typography>

      <hr style={{ height: '25px', width: '1px', background: '#508bb6' }} />

      <Typography sx={stylesForAdditionallyLinks}>Contact Us</Typography>
      <LanguageIcon sx={stylesForAdditionallyLinks} />
    </Box>
  )
}

export default Additionally
