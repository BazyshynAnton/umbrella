import { Box, Button, Typography } from '@mui/material'

import discoverTheScienceOfMrnaPicture from '../../../../../pictures/discoverTheScienceOfMrnaPicture.jfif'

import { fontStyleOpenSans } from '../../../../../context/variables'

const DiscoverTheScienceOfMrna = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '324px',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '8px',
        transition: '0.3s ease-out',
        ':hover': {
          boxShadow: ' 0px 0px 30px black',
          img: {
            transform: 'scale(1.1)',
          },
        },
      }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '2rem',
          padding: '1.5rem',
        }}>
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: '600', ...fontStyleOpenSans }}>
            Transforming medicine with mRNA
          </Typography>
          <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
            At Moderna, we believe the future of medicine is mRNA, the language
            of life inside every cell in our bodies. With our technology, we are
            researching and developing investigational mRNA vaccines and
            therapeutic approaches for infectious diseases, cancers, rare
            diseases, cardiovascular diseases, and autoimmune diseases. Learn
            more about the science of mRNA and how Moderna is developing
            investigational mRNA medicines.
          </Typography>
        </Box>
        <Button
          sx={{
            border: ' 2px solid #FF0000',
            borderRadius: '8px',
            color: '#FF0000',
            padding: '0.75rem 2rem',
            textTransform: 'uppercase',
            fontWeight: '700',

            ':hover': {
              background: 'rgba(255, 0, 0, 0.5)',
              color: '#000',
            },
            ...fontStyleOpenSans,
          }}>
          dicover the science of mrna {'>'}
        </Button>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          overflow: 'hidden',
          borderRadius: '8px',
        }}>
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            transition: '0.3s ease-out',
            borderRadius: '8px',
          }}
          src={discoverTheScienceOfMrnaPicture}
          alt="discoverTheScienceOfMrnaPicture"
        />
      </Box>
    </Box>
  )
}

export default DiscoverTheScienceOfMrna
