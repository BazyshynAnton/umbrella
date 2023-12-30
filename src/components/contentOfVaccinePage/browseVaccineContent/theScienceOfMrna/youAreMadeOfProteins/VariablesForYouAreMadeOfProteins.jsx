import { Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'

export const headerTextOne = (
  <Typography
    variant="h5"
    sx={{
      fontSize: { sm: '1.5rem', xs: '1.2rem' },
      fontWeight: { sm: '400', xs: '600' },
      ...fontStyleOpenSans,
    }}
  >
    What proteins do
  </Typography>
)

export const informationTextOne = (
  <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
    Proteins are the <b>"workhorses"</b> of your cells. <br /> And your body
    makes
    <br />
    <b>{'>'}100,000</b> different kinds of proteins.
  </Typography>
)
export const headerTextTwo = (
  <Typography
    variant="h5"
    sx={{
      fontSize: { sm: '1.5rem', xs: '1.2rem' },
      fontWeight: { sm: '400', xs: '600' },
      ...fontStyleOpenSans,
    }}
  >
    How proteins work
  </Typography>
)

export const informationTextTwo = (
  <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
    For example, insulin is a protein that helps the body
    <br /> control sugar levels in the blood.
    <br /> In people with Type I diabetes, their body doesn't make enough{' '}
    <b>insulin</b>.
  </Typography>
)
export const headerTextThree = (
  <Typography
    variant="h5"
    sx={{
      fontSize: { sm: '1.5rem', xs: '1.2rem' },
      fontWeight: { sm: '400', xs: '600' },
      ...fontStyleOpenSans,
    }}
  >
    Why proteins are important'
  </Typography>
)

export const informationTextThree = (
  <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
    When the body doesn’t make the right amount
    <br /> or type of protein, it can cause conditions
    <br /> like <b>cancer or metabolic diseases</b>.
  </Typography>
)
export const headerTextFour = (
  <Typography
    variant="h5"
    sx={{
      fontSize: { sm: '1.5rem', xs: '1.2rem' },
      fontWeight: { sm: '400', xs: '600' },
      ...fontStyleOpenSans,
    }}
  >
    Why we focus on proteins
  </Typography>
)

export const informationTextFour = (
  <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
    Proteins are essential for
    <b> maintaining health and preventing disease</b>.
  </Typography>
)
