import { Box, Typography } from '../../shared/ui/MUIglobal/muiGlobal'

const UsefulLinks = ({ styleForTextCompany }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { sm: 'row', xs: 'column' },
        gap: '1.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0.5rem',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '600',
            cursor: 'default',
          }}
        >
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
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: '600',
            cursor: 'default',
          }}
        >
          Quick Links
        </Typography>
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
      </div>
    </Box>
  )
}

export default UsefulLinks
