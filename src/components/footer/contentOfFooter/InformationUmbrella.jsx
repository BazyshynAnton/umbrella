import { Box, Typography } from '../../contentOfHomePage/shared/ui/MUI/mui'

const InformationUmbrella = ({
  umbrellaFooterLogo,
  stylesForText,
  twitterIcon,
  linkedIcon,
}) => {
  return (
    <Box>
      <Box sx={{ width: '200px', height: '104px', mb: '20px', mt: '20px' }}>
        <img
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          src={umbrellaFooterLogo}
          alt="umbrella-logo"
        />
      </Box>
      <Typography variant="body1" sx={stylesForText}>
        Umbrella Corp.
      </Typography>
      <Typography variant="body1" sx={stylesForText}>
        123 Raccoon Street
      </Typography>
      <Typography variant="body1" sx={stylesForText}>
        Raccoon City, CA 90210
      </Typography>
      <Typography variant="body1" sx={stylesForText}>
        T: +1 9084 6113-0
      </Typography>
      <Typography variant="body1" sx={stylesForText}>
        F: +1 6311 8490-1212
      </Typography>
      <Typography variant="body1" sx={stylesForText}>
        M: service@umbrella.corp
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          mt: '15px',
          mb: '20px',
        }}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: '20px',
            color: '#1E90FF',
            cursor: 'pointer',
            width: '35px',
            height: '35px',
            marginRight: '8px',
          }}
        >
          <img
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            src={twitterIcon}
            alt="twitter"
          />
        </div>
        <div
          style={{
            cursor: 'pointer',
            width: '35px',
            height: '35px',
          }}
        >
          <img
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '10px',
            }}
            src={linkedIcon}
            alt="linked-in"
          />
        </div>
      </Box>
    </Box>
  )
}

export default InformationUmbrella
