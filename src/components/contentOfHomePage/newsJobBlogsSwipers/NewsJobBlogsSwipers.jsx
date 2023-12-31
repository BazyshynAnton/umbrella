import {
  Suspense,
  lazy,
  useState,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { Button, Box } from '../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'
import { useTranslation } from '../../shared/translations/translationsImports'

import NewsSwiper from './NewsSwiper'
import SmallSpinner from '../../spinners/SmallSpinner'

const JobSwiper = lazy(() => import('./JobSwiper'))
const BlogsSwiper = lazy(() => import('./BlogsSwiper'))

const stylesForBtns = {
  fontWeight: '600',
  color: '#376586',
  ...fontStyleOpenSans,
}

const stylesForActiveBtn = {
  fontWeight: '600',
  color: '#053f68',
  ...fontStyleOpenSans,
}

const NewsJobBlogsSwipers = () => {
  const { t } = useTranslation()

  const [activeSwiper, setActiveSwiper] = useState('news')
  const handleChangeToNews = () => setActiveSwiper('news')
  const handleChangeToJob = () => setActiveSwiper('job')
  const handleChangeToBlogs = () => setActiveSwiper('blogs')

  return (
    <div>
      <Box
        sx={{
          marginBottom: '15px',
          padding: '0px 10px',
          display: 'flex',
          flexDirection: { sm: 'row', xs: 'column' },
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: '0.3rem',
        }}
      >
        <Button
          sx={
            t(activeSwiper) === t('news') ? stylesForActiveBtn : stylesForBtns
          }
          onClick={handleChangeToNews}
        >
          {t('news')}
        </Button>
        <Button
          sx={t(activeSwiper) === t('job') ? stylesForActiveBtn : stylesForBtns}
          onClick={handleChangeToJob}
        >
          {t('job')}
        </Button>
        <Button
          sx={
            t(activeSwiper) === t('blogs') ? stylesForActiveBtn : stylesForBtns
          }
          onClick={handleChangeToBlogs}
        >
          {t('blogs')}
        </Button>
      </Box>
      {t(activeSwiper) === t('news') && <NewsSwiper />}
      {t(activeSwiper) === t('job') && (
        <Suspense fallback={<SmallSpinner />}>
          <JobSwiper />
        </Suspense>
      )}
      {t(activeSwiper) === t('blogs') && (
        <Suspense fallback={<SmallSpinner />}>
          <BlogsSwiper />
        </Suspense>
      )}
    </div>
  )
}

export default NewsJobBlogsSwipers
