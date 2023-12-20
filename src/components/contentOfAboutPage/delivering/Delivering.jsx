import { Box, Typography } from '@mui/material'
import DateBlock from '../../reusableButtonForHomeAndAboutPages/DateBlock'
import DeliveringPicture from './DeliveringPicture'

const Delivering = ({ isSmallScreen }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        position: 'relative',
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          p: '15px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <DateBlock integer={'2000'} smallPlus={'+'} text={'Team members'} />
          <DateBlock
            integer={'43'}
            smallPlus={'+'}
            text={'Years of progress'}
          />
        </Box>
        <div>
          <Typography
            sx={{ fontWeight: '700', fontSize: '1.6rem', color: '#053f68' }}
          >
            Delivering the greatest possible impact through mRNA medicines
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', color: '#053f68', pt: '10px' }}>
            From accelerating drug discovery and early development to a rapidly
            expanding pipeline and a world-class team, we are delivering on the
            promise of mRNA.
          </Typography>
        </div>
      </Box>
      {isSmallScreen && <DeliveringPicture />}
    </Box>
  )
}

export default Delivering
