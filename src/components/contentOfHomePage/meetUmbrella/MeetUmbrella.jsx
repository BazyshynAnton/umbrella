import { Box } from '@mui/material'
import OurMission from './contentOfMeetUmbrella/OurMission'
import JoinUs from './contentOfMeetUmbrella/JoinUs'

const MeetUmbrella = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
      <OurMission />
      <JoinUs />
    </Box>
  )
}

export default MeetUmbrella
