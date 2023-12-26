import { Box, Typography } from '../../contentOfHomePage/shared/ui/MUI/mui'

const AllRights = ({ DATE }) => {
  return (
    <Box sx={{ mt: '40px', pb: '10px' }}>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '600',
          cursor: 'default',
        }}
      >
        © {DATE} Umbrella.corp
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: '600',
          cursor: 'default',
        }}
      >
        All rights reserved
      </Typography>
    </Box>
  )
}

export default AllRights
