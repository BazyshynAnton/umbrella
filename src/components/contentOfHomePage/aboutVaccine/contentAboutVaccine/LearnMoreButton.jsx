import { NavLink } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { animated } from '@react-spring/web'
import { useAnimationContextAboutVaccine } from '../../../../context/AboutVaccineContext'

const LearnMoreButton = () => {
  const { setIsButtonHovered, animationLearnMoreBtn } =
    useAnimationContextAboutVaccine()

  return (
    <Box
      sx={{
        position: 'relative',
        left: { lg: '25px', md: '20px', xs: '0px' },
      }}>
      <animated.div style={{ ...animationLearnMoreBtn }}>
        <NavLink
          onClick={() => window.scrollTo(0)}
          to="/vaccine/science-of-mrna"
          style={{
            borderRadius: '25px',
          }}>
          <Button
            onMouseEnter={() => {
              setIsButtonHovered(true)
            }}
            onMouseLeave={() => setIsButtonHovered(false)}
            variant="outlined"
            sx={{
              color: '#376586',
              borderRadius: '25px',
              borderColor: '#376586',
              borderWidth: '2px',
              fontWeight: 'bold',
              ':hover': {
                background: '#376586',
                borderWidth: '2px',
                color: '#fff',
              },
            }}>
            Learn More
          </Button>
        </NavLink>
      </animated.div>
    </Box>
  )
}

export default LearnMoreButton
