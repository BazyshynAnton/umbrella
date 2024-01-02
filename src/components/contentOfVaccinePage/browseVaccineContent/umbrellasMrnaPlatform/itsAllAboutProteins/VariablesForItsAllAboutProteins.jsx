import { useTranslation } from '../../../../shared/translations/translationsImports'
import { Typography } from '../../../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../../../shared/ui/fontStyles/openSans'

const styleForHeader = {
  fontSize: { sm: '1.5rem', xs: '1.2rem' },
  fontWeight: { sm: '400', xs: '600' },
}

export const HeaderTextOne = () => {
  const { t } = useTranslation()
  return (
    <Typography
      variant="h5"
      sx={{
        ...styleForHeader,
        ...fontStyleOpenSans,
      }}
    >
      {t('We start with a protein')}
    </Typography>
  )
}

export const InformationTextOne = () => {
  const { t } = useTranslation()
  return (
    <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
      {t('All mRNA medicines start')}
    </Typography>
  )
}
export const HeaderTextTwo = () => {
  const { t } = useTranslation()
  return (
    <Typography
      variant="h5"
      sx={{
        ...styleForHeader,
        ...fontStyleOpenSans,
      }}
    >
      {t('Then we design the mRNA')}
    </Typography>
  )
}

export const InformationTextTwo = () => {
  const { t } = useTranslation()
  return (
    <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
      {t('Our scientists are')}
    </Typography>
  )
}

export const HeaderTextThree = () => {
  const { t } = useTranslation()
  return (
    <Typography
      variant="h5"
      sx={{
        ...styleForHeader,
        ...fontStyleOpenSans,
      }}
    >
      {t('And repeat this')}
    </Typography>
  )
}

export const InformationTextThree = () => {
  const { t } = useTranslation()
  return (
    <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
      {t('To make mRNA vaccines')}
    </Typography>
  )
}

export const HeaderTextFour = () => {
  const { t } = useTranslation()
  return (
    <Typography
      variant="h5"
      sx={{
        ...styleForHeader,
        ...fontStyleOpenSans,
      }}
    >
      {t('We have an extensive pipeline')}
    </Typography>
  )
}

export const InformationTextFour = () => {
  const { t } = useTranslation()
  return (
    <Typography variant="body1" sx={{ ...fontStyleOpenSans }}>
      {t('In addition to mRNA vaccines')}
    </Typography>
  )
}
