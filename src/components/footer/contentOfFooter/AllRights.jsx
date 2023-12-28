import { Typography } from '../../shared/ui/MUIglobal/muiGlobal'

const AllRights = ({ DATE }) => {
  return (
    <div style={{ marginTop: '40px', paddingBottom: '10px' }}>
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
    </div>
  )
}

export default AllRights
