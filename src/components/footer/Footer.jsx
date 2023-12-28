import { Box, Container } from '../shared/ui/MUIglobal/muiGlobal'

import InformationUmbrella from './contentOfFooter/InformationUmbrella'
import UsefulLinks from './contentOfFooter/UsefulLinks'
import LinksOfRules from './contentOfFooter/LinksOfRules'
import AllRights from './contentOfFooter/AllRights'

import umbrellaFooterLogo from '../../assets/pictures/umbrellaFooterLogo.webp'
import linkedIcon from '../../assets/pictures/app-icons/linkedIcon.webp'
import twitterIcon from '../../assets/pictures/app-icons/twitterIcon.webp'

const DATE = new Date().getFullYear()

const stylesForText = {
  cursor: 'default',
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: '400',
}

const styleForTextCompany = {
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: '400',
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
    color: 'red',
  },
}

const stylesForTextBelowTheLine = {
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: '400',
  cursor: 'pointer',
  ':hover': {
    color: 'red',
  },
}

const Footer = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: '#083952',
        color: '#fff',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            justifyContent: { xs: 'space-between' },
            alignItems: { md: 'center', xs: 'flex-start' },
            mt: '30px',
            height: '100%',
          }}
        >
          <InformationUmbrella
            umbrellaFooterLogo={umbrellaFooterLogo}
            stylesForText={stylesForText}
            twitterIcon={twitterIcon}
            linkedIcon={linkedIcon}
          />
          <UsefulLinks styleForTextCompany={styleForTextCompany} />
        </Box>
        <hr
          style={{
            width: '100%',
            height: '1px',
            background: '#fff',
            marginTop: '40px',
            marginBottom: '40px',
            borderRadius: '5px',
          }}
        />
        <LinksOfRules stylesForTextBelowTheLine={stylesForTextBelowTheLine} />

        <AllRights DATE={DATE} />
      </Container>
    </div>
  )
}

export default Footer
