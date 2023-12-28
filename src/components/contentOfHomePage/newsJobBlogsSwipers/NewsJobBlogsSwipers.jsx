import {
  Suspense,
  lazy,
  useState,
} from '../../shared/ui/reactImportsGlobal/reactImportsGlobal'
import { Button, Box } from '../../shared/ui/MUIglobal/muiGlobal'
import { fontStyleOpenSans } from '../../shared/ui/fontStyles/openSans'

import NewsSwiper from './NewsSwiper'
// import JobSwiper from './JobSwiper'
// import BlogsSwiper from './BlogsSwiper'

const JobSwiper = lazy(() => import('./JobSwiper'))
const BlogsSwiper = lazy(() => import('./BlogsSwiper'))

const NewsJobBlogsSwipers = () => {
  const [activeNewsSwiper, setActiveNewsSwiper] = useState(true)
  const [activeJobSwiper, setActiveJobSwiper] = useState(false)
  const [activeBlogsSwiper, setActiveBlogsSwiper] = useState(false)

  const handleChangeToNews = () => {
    setActiveNewsSwiper(true)
    setActiveJobSwiper(false)
    setActiveBlogsSwiper(false)
  }
  const handleChangeToJob = () => {
    setActiveNewsSwiper(false)
    setActiveJobSwiper(true)
    setActiveBlogsSwiper(false)
  }
  const handleChangeToBlogs = () => {
    setActiveNewsSwiper(false)
    setActiveJobSwiper(false)
    setActiveBlogsSwiper(true)
  }

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
          sx={activeNewsSwiper ? stylesForActiveBtn : stylesForBtns}
          onClick={handleChangeToNews}
        >
          News
        </Button>
        <Button
          sx={activeJobSwiper ? stylesForActiveBtn : stylesForBtns}
          onClick={handleChangeToJob}
        >
          Job opportunities
        </Button>
        <Button
          sx={activeBlogsSwiper ? stylesForActiveBtn : stylesForBtns}
          onClick={handleChangeToBlogs}
        >
          Blogs
        </Button>
      </Box>
      {activeNewsSwiper && <NewsSwiper />}
      {activeJobSwiper && (
        <Suspense>
          <JobSwiper />
        </Suspense>
      )}
      {activeBlogsSwiper && (
        <Suspense>
          <BlogsSwiper />
        </Suspense>
      )}
    </div>
  )
}

export default NewsJobBlogsSwipers
