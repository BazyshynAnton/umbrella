import { Box, Typography } from '@mui/material'

import picOfResearch from '../../../../../pictures/picOfResearch.png'
import picOfMed from '../../../../../pictures/picOfMed.png'
import picOfHuman from '../../../../../pictures/picOfHuman.png'
import picOfMrnaSmall from '../../../../../pictures/picOfMrnaSmall.png'

const fontStyle = { fontFamily: "'Open Sans', sans-serif" }

const ItsAllAboutProteins = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          mt: '100px',
          color: '#053f68',
          fontSize: { sm: '2.1rem', xs: '1.5rem' },
          fontWeight: '600',
          ...fontStyle,
        }}>
        It’s all about proteins
      </Typography>
      <Typography sx={{ color: '#376586', ...fontStyle }}>
        At Umbrella, we are working on developing and testing
        <b> new mRNA medicines </b>
        for a wide range of diseases.
      </Typography>
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
                src={picOfResearch}
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
                  ...fontStyle,
                }}>
                We start with a protein
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                All mRNA medicines start with identifying a protein that is
                designed to prevent or treat a certain disease.
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
                src={picOfHuman}
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
                  ...fontStyle,
                }}>
                Then we design the mRNA
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                Our scientists design an mRNA that carries instructions for this
                protein.
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
                src={picOfMed}
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
                  ...fontStyle,
                }}>
                And repeat this process to create other medicines
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                To make mRNA vaccines or therapeutics, our scientists create
                instructions to make different proteins that could help our body
                fight infections or prevent diseases.
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
                src={picOfMrnaSmall}
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
                  ...fontStyle,
                }}>
                We have an extensive pipeline
              </Typography>
              <Typography variant="body1" sx={{ ...fontStyle }}>
                In addition to mRNA vaccines, Umbrella is working on other
                applications of potential mRNA therapeutics that could help
                people with cancer, metabolic diseases and more.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ItsAllAboutProteins
