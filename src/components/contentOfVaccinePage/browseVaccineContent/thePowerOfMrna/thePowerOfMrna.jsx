import { Typography } from '@mui/material'
import Browse from '../browse/Browse'
import { useParams } from 'react-router-dom'
import TheScienceOfMrna from '../theScienceOfMrna/TheScienceOfMrna'
import UmbrellasMrnaPlatform from '../umbrellasMrnaPlatform/UmbrellasMrnaPlatform'
import AboutMrna from '../aboutMrna/AboutMrna'

const ThePowerOfMrna = () => {
  const params = useParams()

  return (
    <div style={{ marginTop: '60px' }}>
      <Typography variant="h2">The power of mRNA</Typography>
      <Browse />

      {params.slug === 'science-of-mrna' && <TheScienceOfMrna />}
      {params.slug === 'umbrellas-mrna-platform' && <UmbrellasMrnaPlatform />}
      {params.slug === 'about-mrna' && <AboutMrna />}
    </div>
  )
}

export default ThePowerOfMrna
