import { Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'

const styleForHeader = {
  fontSize: { sm: '1.5rem', xs: '1.2rem' },
  fontWeight: { sm: '400', xs: '600' },
}

export const headerTextOne = (
  <Typography
    variant="h5"
    sx={{
      ...styleForHeader,
      ...fontStyleOpenSans,
    }}
  >
    We start with a protein
  </Typography>
)

export const informationTextOne = (
  <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
    All mRNA medicines start with identifying a protein that is designed to
    prevent or treat a certain disease.
  </Typography>
)
export const headerTextTwo = (
  <Typography
    variant="h5"
    sx={{
      ...styleForHeader,
      ...fontStyleOpenSans,
    }}
  >
    Then we design the mRNA
  </Typography>
)

export const informationTextTwo = (
  <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
    Our scientists design an mRNA that carries instructions for this protein.
  </Typography>
)
export const headerTextThree = (
  <Typography
    variant="h5"
    sx={{
      ...styleForHeader,
      ...fontStyleOpenSans,
    }}
  >
    And repeat this process to create other medicines
  </Typography>
)

export const informationTextThree = (
  <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
    To make mRNA vaccines or therapeutics, our scientists create instructions to
    make different proteins that could help our body fight infections or prevent
    diseases.
  </Typography>
)
export const headerTextFour = (
  <Typography
    variant="h5"
    sx={{
      ...styleForHeader,
      ...fontStyleOpenSans,
    }}
  >
    We have an extensive pipeline
  </Typography>
)

export const informationTextFour = (
  <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
    In addition to mRNA vaccines, Umbrella is working on other applications of
    potential mRNA therapeutics that could help people with cancer, metabolic
    diseases and more.
  </Typography>
)
