import { Box } from '../../shared/ui/MUIglobal/muiGlobal'

import ReusableItemBlock from './ReusableItemBlock'

import medalForItemsBlock from '../../../assets/pictures/medalForItemsBlock.png'
import puzzleForItemsBlock from '../../../assets/pictures/puzzleForItemsBlock.png'
import relentlessPicForItemsBlock from '../../../assets/pictures/relentlessPicForItemsBlock.png'
import picOfResearch from '../../../assets/pictures/picOfResearch.png'

const ItemsBlock = ({ t }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <ReusableItemBlock
        imgOne={medalForItemsBlock}
        imgTwo={puzzleForItemsBlock}
        textOne={t('Bold')}
        textTwo={t('Collaborative')}
      />
      <ReusableItemBlock
        imgOne={relentlessPicForItemsBlock}
        imgTwo={picOfResearch}
        textOne={t('Relentless')}
        textTwo={t('Curious')}
      />
    </Box>
  )
}

export default ItemsBlock
