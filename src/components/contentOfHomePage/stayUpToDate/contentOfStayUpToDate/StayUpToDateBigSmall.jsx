import { Box, Typography } from '../../shared/ui/MUI/mui'
import { fontStyleOpenSans } from '../../shared/ui/font/openSans'

import YellowButton from '../../shared/Button/YellowButton'

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
            color: '#376586',
            fontWeight: '600',
            ...fontStyleOpenSans,
          }}
        >
          Stay up to date
        </Typography>
        <Box>
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
        </Box>
        <YellowButton>Subscribe</YellowButton>
      </Box>
    </Box>
  )
}

export default StayUpToDateBigSmall
