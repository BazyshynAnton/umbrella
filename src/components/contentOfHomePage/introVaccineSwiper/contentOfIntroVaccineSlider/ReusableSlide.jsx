import { Box } from '@mui/material'
import ReusableButton from './ReusableButton'

const ReusableSlide = ({ text, img, buttonText }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '340px',
        p: '0px 50px',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2rem',
          padding: '0px 10px 0px 0px',
        }}
      >
        {text}
        <ReusableButton buttonText={buttonText} />
      </Box>
      <Box
        sx={{
          width: '1000px',
          height: '340px',
        }}
      >
        <img
          src={img}
          alt='slide'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '15px',
          }}
        />
      </Box>
    </Box>
  )
}

export default ReusableSlide
