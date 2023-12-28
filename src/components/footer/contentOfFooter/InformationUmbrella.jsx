import { Typography } from '../../shared/ui/MUIglobal/muiGlobal'
import { LazyLoadImage } from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
const InformationUmbrella = ({
  umbrellaFooterLogo,
  stylesForText,
  twitterIcon,
  linkedIcon,
}) => {
  return (
    <div>
      <div style={{ width: '200px', height: '104px', margin: '20px 0px' }}>
        <LazyLoadImage
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          src={umbrellaFooterLogo}
          alt="umbrella-logo"
        />
      </div>
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '15px',
          marginBottom: '20px',
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
          <LazyLoadImage
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
          <LazyLoadImage
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
      </div>
    </div>
  )
}

export default InformationUmbrella
