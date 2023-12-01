import { Typography } from '@mui/material'
import Browse from '../browse/Browse'
import { useParams } from 'react-router-dom'
import TheScienceOfMrna from '../theScienceOfMrna/TheScienceOfMrna'
import UmbrellasMrnaPlatform from '../umbrellasMrnaPlatform/UmbrellasMrnaPlatform'
import AboutMrna from '../aboutMrna/AboutMrna'

const fontStyle = { fontFamily: "'Open Sans', sans-serif" }

const ThePowerOfMrna = () => {
  const params = useParams()

  return (
    <div style={{ marginTop: '60px' }}>
      <Typography
        variant="h2"
        sx={{
          color: '#053f68',
          fontSize: { md: '3rem', sm: '2.5rem', xs: '1.7rem' },
          fontWeight: '600',
          ...fontStyle,
        }}>
        The power of mRNA
      </Typography>
      <Browse />

      {params.slug === 'science-of-mrna' && <TheScienceOfMrna />}
      {params.slug === 'umbrellas-mrna-platform' && <UmbrellasMrnaPlatform />}
      {params.slug === 'about-mrna' && <AboutMrna />}
    </div>
  )
}

export default ThePowerOfMrna
