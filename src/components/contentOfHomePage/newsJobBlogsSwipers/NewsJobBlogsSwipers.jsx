import { useState } from '../shared/ui/reactImports/reactImports'
import { Box, Button } from '../shared/ui/MUI/mui'
import { fontStyleOpenSans } from '../shared/ui/font/openSans'

import NewsSwiper from './NewsSwiper'
import JobSwiper from './JobSwiper'
import BlogsSwiper from './BlogsSwiper'

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
    <Box>
      <Box sx={{ mb: '15px', p: '0px 10px', display: 'flex', gap: '0.3rem' }}>
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
      {activeJobSwiper && <JobSwiper />}
      {activeBlogsSwiper && <BlogsSwiper />}
    </Box>
  )
}

export default NewsJobBlogsSwipers
