import { Box, Typography } from '../contentOfHomePage/shared/ui/MUI/mui'
import { fontStyleOpenSans } from '../contentOfHomePage/shared/ui/font/openSans'

import LanguageIconHeader from './languageLogic/LanguageIconHeader'

const stylesForAdditionallyLinks = {
  color: '#053f68',
  cursor: 'pointer',
  ...fontStyleOpenSans,
}

const Additionally = ({ isSmallScreen }) => {
  return (
    <>
      {isSmallScreen ? (
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
          <Typography sx={stylesForAdditionallyLinks}>Contact Us</Typography>
          <LanguageIconHeader />
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '1.3rem',
          }}
        >
          <hr
            style={{
              height: '1px',
              width: '100%',
              background: 'rgba(5, 63, 104, 0.5)',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '1rem',
              p: '0px 48px',
              pb: '1rem',
            }}
          >
            <Typography sx={stylesForAdditionallyLinks}>Careers</Typography>
            <Typography sx={stylesForAdditionallyLinks}>Investors</Typography>
            <Typography sx={stylesForAdditionallyLinks}>Contact Us</Typography>
          </Box>
        </Box>
      )}
    </>
  )
}

export default Additionally
