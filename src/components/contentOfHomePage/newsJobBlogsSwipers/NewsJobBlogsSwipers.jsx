import {
  Suspense,
  lazy,
  useState,
  useCallback,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { Button, Box } from '../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'

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
  const [activeSwiper, setActiveSwiper] = useState('news')

  const handleChangeToNews = useCallback(() => setActiveSwiper('news'), [])
  const handleChangeToJob = useCallback(() => setActiveSwiper('job'), [])
  const handleChangeToBlogs = useCallback(() => setActiveSwiper('blogs'), [])

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
          sx={activeSwiper === 'news' ? stylesForActiveBtn : stylesForBtns}
          onClick={handleChangeToNews}
        >
          News
        </Button>
        <Button
          sx={activeSwiper === 'job' ? stylesForActiveBtn : stylesForBtns}
          onClick={handleChangeToJob}
        >
          Job opportunities
        </Button>
        <Button
          sx={activeSwiper === 'blogs' ? stylesForActiveBtn : stylesForBtns}
          onClick={handleChangeToBlogs}
        >
          Blogs
        </Button>
      </Box>
      {activeSwiper === 'news' && <NewsSwiper />}
      {activeSwiper === 'job' && (
        <Suspense fallback={<SmallSpinner />}>
          <JobSwiper />
        </Suspense>
      )}
      {activeSwiper === 'blogs' && (
        <Suspense fallback={<SmallSpinner />}>
          <BlogsSwiper />
        </Suspense>
      )}
    </div>
  )
}

export default NewsJobBlogsSwipers
