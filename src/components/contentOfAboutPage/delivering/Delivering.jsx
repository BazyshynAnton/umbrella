import { Box, Typography } from '../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'
import {
  Suspense,
  lazy,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'

import DateBlock from '../../shared/globalBlocks/DateBlock'

import delivering from '../../../assets/pictures/delivering.png'

const ReusablePictureForLinkBlock = lazy(() =>
  import('../../shared/globalBlocks/ReusablePictureForLinkBlock')
)

const Delivering = ({ isSmallScreen, t }) => {
  return (
    <Box
      sx={{
        mt: { md: '0px', xs: '60px' },
        display: 'flex',
        justifyContent: { md: 'flex-start' },
        position: 'relative',
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: { md: '600px', xs: '100%' },
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
          p: '15px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <DateBlock integer={'2000'} smallPlus={'+'} text={'Team members'} />
          <DateBlock
            integer={'43'}
            smallPlus={'+'}
            text={'Years of progress'}
          />
        </Box>
        <div>
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: '1.6rem',
              color: '#053f68',
              ...fontStyleOpenSans,
            }}
          >
            {t('Delivering the greatest')}
          </Typography>
          <Typography
            sx={{
              fontSize: '1rem',
              color: '#376586',
              pt: '10px',
              ...fontStyleOpenSans,
            }}
          >
            {t('From accelerating drug')}
          </Typography>
        </div>
      </Box>
      {isSmallScreen && (
        <Suspense>
          <ReusablePictureForLinkBlock
            topPosition={'49.5px'}
            rightPosition={'0px'}
            picture={delivering}
          />
        </Suspense>
      )}
    </Box>
  )
}

export default Delivering
