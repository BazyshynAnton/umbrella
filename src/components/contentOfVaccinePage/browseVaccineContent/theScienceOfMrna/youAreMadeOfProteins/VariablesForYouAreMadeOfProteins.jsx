import { useTranslation } from '../../../../shared/translations/translationsImports'
import { Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'

export const HeaderTextOne = () => {
  const { t } = useTranslation()

  return (
    <Typography
      variant="h5"
      sx={{
        fontSize: { sm: '1.5rem', xs: '1.2rem' },
        fontWeight: { sm: '400', xs: '600' },
        ...fontStyleOpenSans,
      }}
    >
      {t('What proteins do')}
    </Typography>
  )
}
export const InformationTextOne = () => {
  const { t } = useTranslation()

  return (
    <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
      {t('Proteins are the')} <b>"{t('workhorses')}"</b> {t('of your cells')}.{' '}
      <br /> {t('And your body makes')}
      <br />
      <b>{'>'}100,000</b> {t('different kinds of proteins')}.
    </Typography>
  )
}
export const HeaderTextTwo = () => {
  const { t } = useTranslation()
  return (
    <Typography
      variant="h5"
      sx={{
        fontSize: { sm: '1.5rem', xs: '1.2rem' },
        fontWeight: { sm: '400', xs: '600' },
        ...fontStyleOpenSans,
      }}
    >
      {t('How proteins work')}
    </Typography>
  )
}

export const InformationTextTwo = () => {
  const { t } = useTranslation()
  return (
    <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
      {t('For example, insulin')}
      <br /> {t('control sugar')}. {t('In people with')} <br />{' '}
      {t('Type I diabetes')} <b>{t('insulin')}</b>.
    </Typography>
  )
}

export const HeaderTextThree = () => {
  const { t } = useTranslation()
  return (
    <Typography
      variant="h5"
      sx={{
        fontSize: { sm: '1.5rem', xs: '1.2rem' },
        fontWeight: { sm: '400', xs: '600' },
        ...fontStyleOpenSans,
      }}
    >
      {t('Why proteins are important')}
    </Typography>
  )
}

export const InformationTextThree = () => {
  const { t } = useTranslation()
  return (
    <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
      {t('When the body')}
      <br /> {t('or type of protein')}
      <br /> {t('like')} <b>{t('cancer or metabolic')}</b>.
    </Typography>
  )
}

export const HeaderTextFour = () => {
  const { t } = useTranslation()
  return (
    <Typography
      variant="h5"
      sx={{
        fontSize: { sm: '1.5rem', xs: '1.2rem' },
        fontWeight: { sm: '400', xs: '600' },
        ...fontStyleOpenSans,
      }}
    >
      {t('Why we focus on proteins')}
    </Typography>
  )
}

export const InformationTextFour = () => {
  const { t } = useTranslation()
  return (
    <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
      {t('Proteins are essential')}
      <b> {t('maintaining health')}</b>.
    </Typography>
  )
}
