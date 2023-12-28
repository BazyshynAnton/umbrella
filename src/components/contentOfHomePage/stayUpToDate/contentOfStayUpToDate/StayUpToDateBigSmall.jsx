import { Box, Typography } from '../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../shared/ui/fontStyles/openSans'

import YellowButton from '../../shared/Buttons/YellowButton'

const StayUpToDateBigSmall = ({
  stylesForBigScreensFirst,
  stylesForBigScreensSecond,
  stylesForSmallScreensFirst,
  stylesForSmallScreensSecond,
}) => {
  return (
    <Box sx={{ ...stylesForBigScreensFirst, ...stylesForSmallScreensFirst }}>
      <Box
        sx={{ ...stylesForBigScreensSecond, ...stylesForSmallScreensSecond }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { md: '3rem', sm: '2.5rem', xs: '1.5rem' },
            color: '#376586',
            fontWeight: '600',
            textAlign: 'center',

            ...fontStyleOpenSans,
          }}
        >
          Stay up to date
        </Typography>
        <div>
          <Typography
            variant="body1"
            sx={{
              color: '#376586',
              fontWeight: '400',
              ...fontStyleOpenSans,
            }}
          >
            Looking for our latest news?
            <br />
            Sign-up for our alerts here.
          </Typography>
        </div>
        <YellowButton>Subscribe</YellowButton>
      </Box>
    </Box>
  )
}

export default StayUpToDateBigSmall
