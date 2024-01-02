import {
  Box,
  Typography,
  useMediaQuery,
} from '../../../shared/ui/MUIglobal/muiGlobal'
import { useTranslation } from '../../../shared/translations/translationsImports'
import { NavLink } from '../../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { fontStyleOpenSans } from '../../../shared/ui/fontStyles/openSans'

const styleForPoint = {
  width: '5px',
  height: '5px',
  borderRadius: '5px',
  background: 'rgba(55, 101, 134, 0.5)',
}
const styleForLinks = ({ isActive }) =>
  isActive
    ? { color: '#D1343E', textDecoration: 'underline' }
    : {
        color: '#376586',
      }

const styleForTypography = {
  fontWeight: '600',
  fontSize: { sm: '1.5rem', xs: '1.2rem' },
  fontFamily: "'Open Sans', sans-serif",
  cursor: 'pointer',
  ':hover': { textDecoration: 'underline' },
}

const Browse = () => {
  const isSmallScreen = useMediaQuery('(min-width: 1200px)')
  const { t } = useTranslation()
  return (
    <div>
      <Typography
        variant="body1"
        sx={{ color: '#376586', ...fontStyleOpenSans }}
      >
        {t('browse')}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { lg: 'row', xs: 'column' },
          justifyContent: { lg: 'flex-start' },
          gap: { lg: '1rem', sm: '0.3rem', xs: '0.2rem' },
          alignItems: { lg: 'center', xs: 'flex-start' },
        }}
      >
        <NavLink to="/vaccine/science-of-mrna" style={styleForLinks}>
          <Typography variant="h5" sx={styleForTypography}>
            {t('The Science of mRNA')}
          </Typography>
        </NavLink>
        {isSmallScreen && <hr style={styleForPoint} />}
        <NavLink to="/vaccine/umbrellas-mrna-platform" style={styleForLinks}>
          <Typography variant="h5" sx={styleForTypography}>
            {t("Umbrella's mRNA platform")}
          </Typography>
        </NavLink>
        {isSmallScreen && <hr style={styleForPoint} />}
        <NavLink to="/vaccine/about-mrna" style={styleForLinks}>
          <Typography variant="h5" sx={styleForTypography}>
            {t('About mRNA')}
          </Typography>
        </NavLink>
      </Box>
    </div>
  )
}

export default Browse
