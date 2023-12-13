import { Box } from '@mui/material'
import OurMission from './contentOfMeetUmbrella/OurMission'
import JoinUs from './contentOfMeetUmbrella/JoinUs'

const MeetUmbrella = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' } }}>
      <OurMission />
      <JoinUs />
    </Box>
  )
}

export default MeetUmbrella
