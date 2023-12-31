import { Box } from '../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'
import { useTranslation } from '../../shared/translations/translationsImports'
const ReusableSlideForNewsJobBlogsSwipers = ({ text, date }) => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        width: '100%',
        height: '120px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '2rem',
        padding: '10px 20px',

        ':before': {
          content: '""',
          position: 'absolute',
          width: '8px',
          height: 'calc(100% - 3px)',
          top: '0px',
          left: '0px',
          background:
            'linear-gradient(rgb(13, 89, 143) 0%, rgba(4, 75, 125, 0.58) 100%)',
          borderTopLeftRadius: '12px',
          borderBottomLeftRadius: '12px',
        },
      }}
    >
      <p
        style={{
          fontSize: '19px',
          fontWeight: '600',
          color: 'rgb(5, 63, 104)',
          ...fontStyleOpenSans,
        }}
      >
        {t(text)}
      </p>
      <p
        style={{
          fontSize: '15px',
          color: 'rgb(80, 121, 149)',
          ...fontStyleOpenSans,
        }}
      >
        {t(date)}
      </p>
    </Box>
  )
}

export default ReusableSlideForNewsJobBlogsSwipers
