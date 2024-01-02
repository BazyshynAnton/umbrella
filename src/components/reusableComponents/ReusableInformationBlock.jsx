import { Box } from '../shared/ui/MUIglobal/muiGlobal'
import { LazyLoadImage } from '../shared/ui/reactImportsGlobal/reactImportsGlobal'

const ReusableInformationBlock = ({ picture, headerText, informationText }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: { sm: 'center', xs: 'initial' },
        justifyContent: 'flex-start',
      }}
    >
      <Box sx={{ width: '150px', height: '150px' }}>
        <LazyLoadImage
          style={{
            objectFit: 'cover',
            width: '150px',
            height: '100%',
          }}
          src={picture}
          alt="pic1"
        />
      </Box>
      <Box
        sx={{
          height: { sm: '100%', xs: '100%' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {headerText}
        {informationText}
      </Box>
    </Box>
  )
}

export default ReusableInformationBlock
