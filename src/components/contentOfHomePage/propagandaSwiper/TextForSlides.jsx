import { Typography } from '../../shared/ui/MUIglobal/muiGlobal'
import { usePropagandaSwiperContext } from '../../../context/PropagandaSwiperContext'
import { useTranslation } from '../../shared/translations/translationsImports'

export const TextForSlide1 = () => {
  const { styles } = usePropagandaSwiperContext()
  const { t } = useTranslation()
  return (
    <Typography variant="body1" sx={styles.forTextInSlides.blueText}>
      {t('Protect Yourself')}
      <br />
      <Typography variant="caption" sx={styles.forTextInSlides.yellowText}>
        {t('and Others')}:
      </Typography>
      <br />
      {t('Vaccination - the key')}
      <br /> {t('to a safer tomorrow!')}
    </Typography>
  )
}
export const TextForSlide2 = () => {
  const { styles } = usePropagandaSwiperContext()
  const { t } = useTranslation()
  return (
    <Typography variant="body1" sx={styles.forTextInSlides.blueText}>
      {t('Together')}
      <br />
      {t('we are stronger')}:
      <br />
      {t('protect yourself')}
      <br />
      <Typography variant="caption" sx={styles.forTextInSlides.yellowText}>
        {t('and your loved')}
      </Typography>
      <br />
      {t('ones with the vaccine!')}
    </Typography>
  )
}
export const TextForSlide3 = () => {
  const { styles } = usePropagandaSwiperContext()
  const { t } = useTranslation()
  return (
    <Typography variant="body1" sx={styles.forTextInSlides.blueText}>
      {t('Take')}
      <br />
      {t('the Umbrella vaccine')}
      <br />
      {t('to strengthen')}
      <br />
      <Typography variant="caption" sx={styles.forTextInSlides.yellowText}>
        {t('the immune system')}
      </Typography>
    </Typography>
  )
}
export const TextForSlide4 = () => {
  const { styles } = usePropagandaSwiperContext()
  const { t } = useTranslation()
  return (
    <Typography variant="body1" sx={styles.forTextInSlides.blueText}>
      {t('Umbrella')}:
      <br />
      {t('Innovations')}
      <br />
      <Typography variant="caption" sx={styles.forTextInSlides.yellowText}>
        {t('with')}
      </Typography>
      <br />
      {t('Responsibility')}
    </Typography>
  )
}
