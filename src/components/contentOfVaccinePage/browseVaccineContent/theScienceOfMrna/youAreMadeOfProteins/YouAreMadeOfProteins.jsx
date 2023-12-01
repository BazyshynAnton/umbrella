import { Box, Typography } from '@mui/material'

import { fontStyleOpenSans } from '../../../../../context/variables'

import picOfProteins from '../../../../../pictures/picOfProteins.png'
import picOfResearch from '../../../../../pictures/picOfResearch.png'
import picOfMed from '../../../../../pictures/picOfMed.png'
import picOfImportant from '../../../../../pictures/picOfImportant.png'

const YouAreMadeOfProteins = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          mt: '150px',
          color: '#053f68',
          fontSize: { sm: '2.1rem', xs: '1.5rem' },
          fontWeight: '600',
          ...fontStyleOpenSans,
        }}>
        You are made of proteins
      </Typography>
      <Typography sx={{ color: '#376586', ...fontStyleOpenSans }}>
        Your body contains <b>trillions of cells</b>, the basic units of life.
        And every cell contains proteins.
      </Typography>
      {/*  */}
      <Box
        sx={{
          mt: '40px',
          display: 'flex',
          flexDirection: 'column',
          height: { md: '300px', xs: '100%' },
          gap: { sm: '0px', xs: '1rem' },
          color: '#376586',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            gap: { sm: '0rem', xs: '1rem' },
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: { sm: 'center', xs: 'initial' },
              justifyContent: 'flex-start',
            }}>
            <Box sx={{ width: '150px', height: '150px' }}>
              <img
                style={{
                  objectFit: 'cover',
                  width: '150px',
                  height: '100%',
                }}
                src={picOfProteins}
                alt="pic1"
              />
            </Box>
            <Box
              sx={{
                height: { sm: '130px', xs: '100%' },
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { sm: '1.5rem', xs: '1.2rem' },
                  fontWeight: { sm: '400', xs: '600' },
                  ...fontStyleOpenSans,
                }}>
                What proteins do
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
                Proteins are the <b>"workhorses"</b> of your cells. <br /> And
                your body makes
                <br />
                <b>{'>'}100,000</b> different kinds of proteins.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: { sm: 'center', xs: 'initial' },
              justifyContent: 'flex-start',
            }}>
            <Box sx={{ width: '150px', height: '150px' }}>
              <img
                style={{
                  objectFit: 'cover',
                  width: '150px',
                  height: '100%',
                }}
                src={picOfResearch}
                alt="pic2"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: { sm: '130px', xs: '100%' },
              }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { sm: '1.5rem', xs: '1.2rem' },
                  fontWeight: { sm: '400', xs: '600' },
                  ...fontStyleOpenSans,
                }}>
                How proteins work
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
                For example, insulin is a protein that helps the body
                <br /> control sugar levels in the blood.
                <br /> In people with Type I diabetes, their body doesn't make
                enough <b>insulin</b>.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            gap: { sm: '0rem', xs: '1rem' },
          }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: { sm: 'center', xs: 'initial' },
            }}>
            <Box sx={{ width: '150px', height: '150px' }}>
              <img
                style={{
                  objectFit: 'cover',
                  width: '150px',
                  height: '100%',
                }}
                src={picOfImportant}
                alt="pic3"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: { sm: '130px', xs: '100%' },
              }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { sm: '1.5rem', xs: '1.2rem' },
                  fontWeight: { sm: '400', xs: '600' },
                  ...fontStyleOpenSans,
                }}>
                Why proteins are important
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
                When the body doesn’t make the right amount
                <br /> or type of protein, it can cause conditions
                <br /> like <b>cancer or metabolic diseases</b>.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: { sm: 'center', xs: 'initial' },
            }}>
            <Box sx={{ width: '150px', height: '150px' }}>
              <img
                style={{
                  objectFit: 'cover',
                  width: '150px',
                  height: '100%',
                }}
                src={picOfMed}
                alt="pic4"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { sm: '1.5rem', xs: '1.2rem' },
                  fontWeight: { sm: '400', xs: '600' },
                  ...fontStyleOpenSans,
                }}>
                Why we focus on proteins
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
                Proteins are essential for
                <b> maintaining health and preventing disease</b>.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default YouAreMadeOfProteins
