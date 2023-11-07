import { Box, Container, Typography } from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import umbrellaFooterLogo from '../../pictures/umbrellaFooterLogo.png'

const DATE = new Date().getFullYear()

const stylesForText = {
  cursor: 'default',
}

const styleForTextCompany = {
  cursor: 'pointer',
  ':hover': {
    textDecoration: 'underline',
  },
}

const stylesForTextBelowTheLine = {
  cursor: 'pointer',
}

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '600px',
        background: '#A9A9A9',
      }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: '30px',
            height: '100%',
          }}>
          <Box>
            <Box sx={{ width: '200px', height: '104px', mb: '20px' }}>
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
                mt: '20px',
              }}>
              <TwitterIcon
                sx={{ color: '#1E90FF', cursor: 'pointer', fontSize: '2.5rem' }}
              />
              <LinkedInIcon
                sx={{ color: '#00008B', cursor: 'pointer', fontSize: '2.5rem' }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1.5rem' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '0.5rem',
              }}>
              <Typography variant="h5" sx={{ cursor: 'default' }}>
                Company
              </Typography>
              <Typography variant="body1" sx={styleForTextCompany}>
                {'>'} About
              </Typography>
              <Typography variant="body1" sx={styleForTextCompany}>
                {'>'} Research & Innovation
              </Typography>
              <Typography variant="body1" sx={styleForTextCompany}>
                {'>'} Manufacturing
              </Typography>
              <Typography variant="body1" sx={styleForTextCompany}>
                {'>'} Careers
              </Typography>
              <Typography variant="body1" sx={styleForTextCompany}>
                {'>'} Covid-19
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
              <Typography variant="h5">Quick Links</Typography>
              <Typography variant="body1" sx={styleForTextCompany}>
                {'>'} Newsroom
              </Typography>
              <Typography variant="body1" sx={styleForTextCompany}>
                {'>'} Investors
              </Typography>
              <Typography variant="body1" sx={styleForTextCompany}>
                {'>'} Healthcare Professionals
              </Typography>
              <Typography variant="body1" sx={styleForTextCompany}>
                {'>'} Connect
              </Typography>
            </Box>
          </Box>
        </Box>
        <hr
          style={{
            width: '100%',
            height: '1px',
            background: '#000',
            marginTop: '40px',
            marginBottom: '40px',
            borderRadius: '5px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}>
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
        </Box>
        <Box sx={{ mt: '40px' }}>
          <Typography variant="body2" sx={{ cursor: 'default' }}>
            © {DATE} Umbrella.corp
          </Typography>
          <Typography variant="body2" sx={{ cursor: 'default' }}>
            All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
