import { Typography } from '../../shared/ui/MUIglobal/muiGlobal'

const LinksOfRules = ({ stylesForTextBelowTheLine }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        Terms of Use
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        General Terms and Conditions
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        General Conditions of Purchase
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        Data Privacy Statement
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        Adverse Event Reporting
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        Imprint
      </Typography>
      <Typography variant="body2" sx={stylesForTextBelowTheLine}>
        Cookie Settings
      </Typography>
    </div>
  )
}

export default LinksOfRules
