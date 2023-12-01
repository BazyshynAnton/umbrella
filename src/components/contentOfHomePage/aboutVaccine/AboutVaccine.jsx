import { Box } from '@mui/material'
import { useAnimationContextAboutVaccine } from '../../../context/AboutVaccineContext'

import CovidAnimatedPictures from './contentAboutVaccine/CovidAnimatedPictures'
import LearnMoreButton from './contentAboutVaccine/LearnMoreButton'
import CovidUmbrellaVaccineBlock from './contentAboutVaccine/CovidUmbrellaVaccineBlock'
import AdvertisingBlock from './contentAboutVaccine/AdvertisingBlock'
import UmbrellaAnimatedPicture from './contentAboutVaccine/UmbrellaAnimatedPicture'

const AboutVaccine = () => {
  const { isButtonHovered, setIsButtonHovered } =
    useAnimationContextAboutVaccine()

  return (
    <Box
      sx={{
        mt: { sm: '10px', xs: '20px' },
        width: '100%',
        height: '350px',
        display: 'flex',
        position: 'relative',
        justifyContent: { md: 'unset', xs: 'center' },
      }}>
      <UmbrellaAnimatedPicture />

      <AdvertisingBlock />

      <Box
        sx={{
          position: { md: 'absolute', xs: 'static' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { lg: '1.5rem', md: '0rem' },
          top: '15%',
          left: {
            xl: '40%',
            lg: '35%',
            md: '35%',
            sm: '-4%',
          },
          width: { lg: '620px', md: '500px', xs: '100%' },
          height: '250px',
        }}>
        <CovidUmbrellaVaccineBlock />

        <LearnMoreButton setIsButtonHovered={setIsButtonHovered} />

        <CovidAnimatedPictures isButtonHovered={isButtonHovered} />
      </Box>
    </Box>
  )
}

export default AboutVaccine
