import { Box, Typography } from '@mui/material'

import { fontStyleOpenSans } from '../../../context/variables'

const styleForImg = {
  width: '130px',
  height: '130px',
}

const styleForBlockWithImgAndText = {
  width: '260px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}

const styleForText = {
  fontSize: '1.3rem',
  color: '#053f68',
  ...fontStyleOpenSans,
}

const ReusableItemBlock = ({ imgOne, imgTwo, textOne, textTwo }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={styleForBlockWithImgAndText}>
        <img style={styleForImg} src={imgOne} alt={textOne} />
        <Typography sx={styleForText}>{textOne}</Typography>
      </Box>
      <Box sx={styleForBlockWithImgAndText}>
        <img style={styleForImg} src={imgTwo} alt={textTwo} />
        <Typography sx={styleForText}>{textTwo}</Typography>
      </Box>
    </Box>
  )
}

export default ReusableItemBlock
