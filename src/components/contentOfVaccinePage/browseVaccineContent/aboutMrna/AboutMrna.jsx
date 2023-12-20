import { Box, Typography } from '@mui/material'

import ReusableComponentForIntroduce from '../../../reusableComponentsForVaccineAndAboutPages/ReusableComponentForIntroduce'
import ReusableComponentMrnaPicture from '../../../reusableComponentsForVaccineAndAboutPages/ReusableComponentMrnaPicture'
import QuestionsSwiper from './questionsSwiper/QuestionsSwiper'

import demoImgFive from '../../../../pictures/demoImgFive.jfif'
import demoImgSix from '../../../../pictures/demoImgSix.jfif'
import DiscoverTheScienceOfMrna from './discoverTheScienceOfMrna/DiscoverTheScienceOfMrna'

import { fontStyleOpenSans } from '../../../../context/variables'

const text =
  "Learn more about the science behind mRNA and how Umbrella's scientists are researching and developing investigational mRNA medicines to potentially help prevent or treat disease."

const AboutMrna = () => {
  return (
    <Box
      sx={{
        mt: '20px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <ReusableComponentForIntroduce
        text={text}
        img1={demoImgSix}
        img2={demoImgFive}
      />
      <ReusableComponentMrnaPicture />
      <DiscoverTheScienceOfMrna />

      <Typography
        variant="h4"
        sx={{
          mt: '100px',
          fontWeight: '600px',
          color: '#053f68',
          ...fontStyleOpenSans,
        }}
      >
        Q&mRNA
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: '#376586', ...fontStyleOpenSans }}
      >
        Tune into our Q&mRNA video series to learn more about the power and
        potential of mRNA
        <br /> and how Umbrella is researching and developing mRNA medicines
        with the goal
        <br /> of delivering the greatest possible impact to people through mRNA
        medicines.
      </Typography>
      <QuestionsSwiper />
    </Box>
  )
}

export default AboutMrna
