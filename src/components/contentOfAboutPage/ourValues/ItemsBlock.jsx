import { Box } from '@mui/material'

import ReusableItemBlock from './ReusableItemBlock'

import medalForItemsBlock from '../../../pictures/medalForItemsBlock.png'
import puzzleForItemsBlock from '../../../pictures/puzzleForItemsBlock.png'
import relentlessPicForItemsBlock from '../../../pictures/relentlessPicForItemsBlock.png'
import picOfResearch from '../../../pictures/picOfResearch.png'

const ItemsBlock = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <ReusableItemBlock
        imgOne={medalForItemsBlock}
        imgTwo={puzzleForItemsBlock}
        textOne={'Bold'}
        textTwo={'Collaborative'}
      />
      <ReusableItemBlock
        imgOne={relentlessPicForItemsBlock}
        imgTwo={picOfResearch}
        textOne={'Relentless'}
        textTwo={'Curious'}
      />
    </Box>
  )
}

export default ItemsBlock
